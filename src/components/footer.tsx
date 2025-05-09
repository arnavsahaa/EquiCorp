
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-equicorp-primary w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
              <span className="text-xl font-bold">EquiCorp</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Creating transparency and accountability for inclusive workplaces.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Legal Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Helplines</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground">
              Made with <Heart className="inline-block h-4 w-4 fill-red-500 text-red-500" /> by team EastSide
            </span>
          </div>
          
          <div className="text-xs text-gray-400">
            Made by Arnav
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Arnav Saha, Manipal University Jaipur | arnavbprd@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
