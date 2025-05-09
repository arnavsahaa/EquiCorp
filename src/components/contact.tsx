
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Have questions or need assistance with workplace discrimination issues? 
              Our team is ready to provide guidance and support.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-equicorp-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-equicorp-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:arnavbprd@gmail.com" className="text-muted-foreground hover:text-equicorp-primary">
                    arnavbprd@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-equicorp-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-equicorp-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-equicorp-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-equicorp-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-equicorp-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Manipal University Jaipur
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your situation..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-equicorp-primary hover:bg-equicorp-secondary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
