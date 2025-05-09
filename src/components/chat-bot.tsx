
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, Shield, Lock, User, Info } from "lucide-react";
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

const RESPONSES = {
  "pay gap": "Gender pay gaps are unfortunately common. At EquiCorp, we recommend: 1) Documenting your experience, 2) Gathering market rate data, 3) Scheduling a meeting with HR, and 4) Consider filing a formal complaint if necessary.",
  "discrimination": "I'm sorry you're experiencing discrimination. Document all incidents, report to your HR department, and know your rights. Our platform has templates for formal complaints and can connect you with legal resources.",
  "maternity": "Maternity discrimination is illegal in most countries. Keep records of all communications, know your legal rights to leave, and contact us for specific legal guidelines in your country.",
  "promotion": "Being passed over for promotion based on gender is a form of discrimination. We recommend documenting achievements, seeking feedback, finding mentors, and if necessary, consulting our legal resources section.",
  "resources": "EquiCorp offers templates for negotiations, legal literacy guides, access to community support, and tools to compare your compensation with industry benchmarks.",
  "help": "I can assist with information on workplace rights, discrimination issues, salary negotiation tips, and connect you with resources. What specific area would you like help with?",
  "privacy": "Your privacy is our priority. All conversations are encrypted and anonymous. We don't store personally identifiable information unless you explicitly choose to share it with us.",
  "anonymous": "You can use our platform completely anonymously. Our guest login feature allows you to access resources without creating an account with personal details.",
  "legal": "We provide legal resources specific to workplace discrimination laws in various countries. However, please note that our AI provides general guidance, not legal advice. For specific cases, we can connect you with specialized legal professionals.",
  "bias": "Bias can be subtle and hard to prove. We recommend keeping detailed records, finding allies in your workplace, and consulting with our resources on addressing implicit and explicit bias.",
  "evidence": "When documenting potential discrimination, focus on: dates, exact quotes, witnesses, email trails, performance metrics, and any patterns of behavior. Our templates can guide you through this process.",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: "user", content: input, timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Find a relevant response
    setTimeout(() => {
      setIsTyping(false);
      const lowerInput = input.toLowerCase();
      let botResponse = "I'm not sure how to help with that specific issue, but our team is available to help. Would you like to contact our support team?";
      
      for (const [keyword, response] of Object.entries(RESPONSES)) {
        if (lowerInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: botResponse,
        timestamp: new Date()
      }]);
    }, 1500);
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
      {/* Chat Bot Button with animation */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-equicorp-primary hover:bg-equicorp-primary/90 animate-pulse hover:animate-none hover:scale-110 transition-transform z-50"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      {/* Chat Bot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col z-50 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-equicorp-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <h3 className="font-semibold">EquiCorp Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full hover:bg-white/20 transition-colors">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Privacy Banner */}
          <div className="bg-equicorp-primary/20 px-4 py-2 text-xs flex items-center border-b border-equicorp-primary/30">
            <Lock className="h-3 w-3 mr-1 text-equicorp-primary" />
            <span>Anonymous & secure chat - your privacy is protected</span>
          </div>

          {/* Messages */}
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
                    <div className="w-5 h-5 rounded-full bg-equicorp-primary flex items-center justify-center text-white text-xs mr-1">
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
                      ? "bg-equicorp-primary text-white rounded-tr-none"
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
                  <div className="w-5 h-5 rounded-full bg-equicorp-primary flex items-center justify-center text-white text-xs mr-1">
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

          {/* Guest Login Prompt */}
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs flex items-center justify-between">
            <div className="flex items-center">
              <Info className="h-3 w-3 mr-1 text-equicorp-primary" />
              <span>Using guest mode - no account required</span>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="text-xs p-0 h-auto text-equicorp-primary"
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
                className="bg-equicorp-primary hover:bg-equicorp-secondary transition-colors"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
