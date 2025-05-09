
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, Shield, Lock, User, Info, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: "bot",
    content: "Hi there! I'm the EquiCorp AI assistant. How can I help you today with workplace discrimination issues?",
    timestamp: new Date(),
  },
  {
    role: "bot",
    content: "Your privacy matters to us. This conversation is anonymous and encrypted. You can share your concerns without revealing your identity.",
    timestamp: new Date(),
  },
];

// Default Gemini API key - Note: This would typically be stored more securely
const DEFAULT_API_KEY = "AIzaSyAnONWrR2LWBd3ZhO-Yx4xBf4E4JgGC4eU";

// Interface for API key input
interface ApiKeyFormProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const ApiKeyForm = ({ apiKey, setApiKey, onSave, onCancel }: ApiKeyFormProps) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-nature-green/30 animate-fade-in">
      <h3 className="font-medium mb-4 text-center">Google Gemini API Setup</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-1">API Key</label>
          <Input 
            type="password" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key"
            className="w-full"
          />
          <p className="text-xs mt-2 text-muted-foreground">
            Your API key is stored locally and never sent to our servers.
          </p>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button 
            size="sm" 
            onClick={onSave} 
            disabled={!apiKey.trim()}
            className="bg-nature-green hover:bg-nature-forest"
          >
            Save Key
          </Button>
        </div>
        <div className="border-t pt-4 mt-2">
          <p className="text-xs text-muted-foreground">
            Don't have an API key? <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-nature-green hover:underline">
              Get one from Google AI Studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);
  const [showApiForm, setShowApiForm] = useState(false);
  const [isGeminiEnabled, setIsGeminiEnabled] = useState(true); // Set to true since we have a default key
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
    
    // Check for saved API key on component mount
    const savedApiKey = localStorage.getItem("gemini_api_key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsGeminiEnabled(true);
    } else {
      // Use the default key
      localStorage.setItem("gemini_api_key", DEFAULT_API_KEY);
    }
  }, [messages, isOpen]);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("gemini_api_key", apiKey);
      setIsGeminiEnabled(true);
      setShowApiForm(false);
      toast({
        title: "API Key Saved",
        description: "Your Gemini API key has been saved successfully.",
      });
    }
  };

  const generateGeminiResponse = async (userMessage: string) => {
    try {
      setIsTyping(true);
      
      const geminiKey = localStorage.getItem("gemini_api_key") || apiKey;
      
      // Real Gemini API call
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': geminiKey
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful assistant for EquiCorp, a company focused on workplace equality and addressing discrimination.
                  Answer user questions related to workplace discrimination, equal pay, harassment, and similar topics.
                  Be compassionate, informative and helpful, but avoid giving specific legal advice.
                  User question: ${userMessage}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        console.error("Gemini API error:", data.error);
        setIsTyping(false);
        return "I'm having trouble connecting to my knowledge base. Please check your API key or try again later.";
      }
      
      const botReply = data.candidates[0].content.parts[0].text;
      setIsTyping(false);
      return botReply;
      
    } catch (error) {
      console.error("Error generating response:", error);
      setIsTyping(false);
      return "I'm having trouble connecting to my knowledge base right now. Please check your API key or try again later.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: "user", content: input, timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Generate response
    let botResponse;
    if (isGeminiEnabled) {
      botResponse = await generateGeminiResponse(input);
    } else {
      // Fallback if Gemini is not enabled
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsTyping(false);
      botResponse = "Please set up your Google Gemini API key to enable AI-powered responses.";
    }
    
    setMessages(prev => [...prev, { 
      role: "bot", 
      content: botResponse,
      timestamp: new Date()
    }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Bot Button with animation and better visibility */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full h-16 w-16 shadow-lg bg-nature-terracotta hover:bg-nature-rust 
                     animate-pulse hover:animate-none hover:scale-110 transition-transform`}
        >
          <MessageSquare className="h-7 w-7" />
          <span className="sr-only">Open Chat</span>
        </Button>
        <div className="bg-white dark:bg-gray-800 py-1 px-3 rounded-lg shadow-md text-sm font-medium text-nature-terracotta animate-bounce-subtle">
          Share your issues anonymously
        </div>
      </div>

      {/* Chat Bot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col z-50 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-nature-terracotta p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <h3 className="font-semibold">Anonymous Chat Assistant</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowApiForm(!showApiForm)} 
                className="h-8 w-8 rounded-full hover:bg-white/20 transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span className="sr-only">API Settings</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)} 
                className="h-8 w-8 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Privacy Banner */}
          <div className="bg-nature-terracotta/20 px-4 py-2 text-xs flex items-center border-b border-nature-terracotta/30">
            <Lock className="h-3 w-3 mr-1 text-nature-terracotta" />
            <span>Anonymous & secure chat - powered by Google Gemini AI</span>
          </div>

          {/* API Key Form (when shown) */}
          {showApiForm ? (
            <div className="flex-1 p-4 overflow-y-auto">
              <ApiKeyForm 
                apiKey={apiKey}
                setApiKey={setApiKey}
                onSave={handleSaveApiKey}
                onCancel={() => setShowApiForm(false)}
              />
            </div>
          ) : (
            /* Messages */
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    msg.role === "user" ? "ml-auto" : "mr-auto"
                  } max-w-[80%] animate-fade-in`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex items-center mb-1">
                    {msg.role === "bot" ? (
                      <div className="w-5 h-5 rounded-full bg-nature-terracotta flex items-center justify-center text-white text-xs mr-1">
                        E
                      </div>
                    ) : (
                      <User className="w-4 h-4 mr-1 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-500">{formatTime(msg.timestamp)}</span>
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-nature-terracotta text-white rounded-tr-none"
                        : "bg-gray-200 dark:bg-gray-700 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4 mr-auto max-w-[80%]">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-nature-terracotta flex items-center justify-center text-white text-xs mr-1">
                      E
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}

          {!showApiForm && (
            <>
              {/* Guest Login Prompt */}
              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs flex items-center justify-between">
                <div className="flex items-center">
                  <Info className="h-3 w-3 mr-1 text-nature-terracotta" />
                  <span>Using guest mode - no account required</span>
                </div>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="text-xs p-0 h-auto text-nature-terracotta"
                  onClick={() => {
                    toast({
                      title: "Guest Mode Active",
                      description: "You're using anonymous guest mode. No personal data is being stored.",
                    })
                  }}
                >
                  Learn more
                </Button>
              </div>

              {/* Input */}
              <div className="p-4 border-t dark:border-gray-700">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSend}
                    className="bg-nature-terracotta hover:bg-nature-rust transition-colors"
                    disabled={!input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {isGeminiEnabled && (
                  <div className="mt-2 flex items-center justify-center">
                    <span className="text-xs text-nature-terracotta">Powered by Google Gemini</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
