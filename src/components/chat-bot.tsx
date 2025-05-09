
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "bot";
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: "bot",
    content: "Hi there! I'm the EquiCorp AI assistant. How can I help you today with workplace discrimination issues?",
  },
];

const RESPONSES = {
  "pay gap": "Gender pay gaps are unfortunately common. At EquiCorp, we recommend: 1) Documenting your experience, 2) Gathering market rate data, 3) Scheduling a meeting with HR, and 4) Consider filing a formal complaint if necessary.",
  "discrimination": "I'm sorry you're experiencing discrimination. Document all incidents, report to your HR department, and know your rights. Our platform has templates for formal complaints and can connect you with legal resources.",
  "maternity": "Maternity discrimination is illegal in most countries. Keep records of all communications, know your legal rights to leave, and contact us for specific legal guidelines in your country.",
  "promotion": "Being passed over for promotion based on gender is a form of discrimination. We recommend documenting achievements, seeking feedback, finding mentors, and if necessary, consulting our legal resources section.",
  "resources": "EquiCorp offers templates for negotiations, legal literacy guides, access to community support, and tools to compare your compensation with industry benchmarks.",
  "help": "I can assist with information on workplace rights, discrimination issues, salary negotiation tips, and connect you with resources. What specific area would you like help with?",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Find a relevant response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let botResponse = "I'm not sure how to help with that specific issue, but our team is available to help. Would you like to contact our support team?";
      
      for (const [keyword, response] of Object.entries(RESPONSES)) {
        if (lowerInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Bot Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-equicorp-primary hover:bg-equicorp-primary/90"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>

      {/* Chat Bot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col z-50 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-equicorp-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-semibold">EquiCorp Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === "user" ? "ml-auto" : "mr-auto"
                } max-w-[80%]`}
              >
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
              <Button size="icon" onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
