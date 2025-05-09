
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Info, Menu, Search, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-equicorp-primary w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className="text-xl font-bold tracking-tight text-gradient">EquiCorp</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#issues" className="text-sm font-medium hover:text-equicorp-primary transition-colors">Issues</a>
          <a href="#solutions" className="text-sm font-medium hover:text-equicorp-primary transition-colors">Solutions</a>
          <a href="#resources" className="text-sm font-medium hover:text-equicorp-primary transition-colors">Resources</a>
          <a href="#about" className="text-sm font-medium hover:text-equicorp-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-equicorp-primary transition-colors">Contact</a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <Button className="hidden md:flex bg-equicorp-primary hover:bg-equicorp-secondary">
            <Info className="h-4 w-4 mr-2" />
            Report an Issue
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden animate-fade-in">
          <nav className="container mt-8 flex flex-col gap-6 text-center">
            <a href="#issues" className="text-xl font-medium py-3 border-b border-border hover:text-equicorp-primary" onClick={() => setIsMenuOpen(false)}>
              Issues
            </a>
            <a href="#solutions" className="text-xl font-medium py-3 border-b border-border hover:text-equicorp-primary" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
            <a href="#resources" className="text-xl font-medium py-3 border-b border-border hover:text-equicorp-primary" onClick={() => setIsMenuOpen(false)}>
              Resources
            </a>
            <a href="#about" className="text-xl font-medium py-3 border-b border-border hover:text-equicorp-primary" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="text-xl font-medium py-3 border-b border-border hover:text-equicorp-primary" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button className="mt-4 bg-equicorp-primary hover:bg-equicorp-secondary">
              <Info className="h-4 w-4 mr-2" />
              Report an Issue
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
