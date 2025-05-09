
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-medium">Made with</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" fill="currentColor" />
            <span className="text-lg font-medium">by team EastSide</span>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-primary">Contact Information</h3>
            <p className="text-muted-foreground">Arnav Saha, Manipal University Jaipur</p>
            <a href="mailto:arnavbprd@gmail.com" className="text-primary hover:underline underline-animation">
              arnavbprd@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
