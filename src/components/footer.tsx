
import { Heart } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="mb-4 flex flex-col items-center">
            <p className="text-lg font-semibold">
              Made with <Heart className="h-5 w-5 inline-block mx-1 text-red-500 fill-red-500" /> by team EastSide
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Contact Information</h3>
            <p className="text-muted-foreground">Manipal University Jaipur</p>
            <a href="mailto:arnavbprd@gmail.com" className="text-blue-500 hover:text-blue-700 hover:underline underline-animation">
              arnavbprd@gmail.com
            </a>
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center text-muted-foreground text-sm pt-4 border-t w-full">
            <Copyright className="h-4 w-4 mr-1" />
            <span>2025 EquiCorp-Bringing the Change</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
