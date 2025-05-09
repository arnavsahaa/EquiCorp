
import { Logo } from "./logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-nature-green">Contact Information</h3>
            <p className="text-muted-foreground">Manipal University Jaipur</p>
            <a href="mailto:arnavbprd@gmail.com" className="text-nature-terracotta hover:text-nature-rust hover:underline underline-animation">
              arnavbprd@gmail.com
            </a>
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-nature-terracotta transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-nature-terracotta transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-nature-terracotta transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-nature-terracotta transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
