
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Info, Menu, Search, X, User, UserCircle2, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <Logo />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#issues" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">Issues</a>
          <a href="#solutions" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">Solutions</a>
          <a href="#resources" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">Resources</a>
          <a href="#about" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">Contact</a>
          <a href="/stories" className="text-sm font-medium hover:text-nature-green transition-colors hover:scale-105 transform duration-200">Success Stories</a>

          {/* More Options Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-nature-green">More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/faq" className="flex items-center gap-2 p-2 hover:bg-nature-green/10 rounded-md transition-colors">
                          <Search className="w-4 h-4" />
                          <span>FAQ</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/blog" className="flex items-center gap-2 p-2 hover:bg-nature-green/10 rounded-md transition-colors">
                          <Info className="w-4 h-4" />
                          <span>Blog</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/stories" className="flex items-center gap-2 p-2 hover:bg-nature-green/10 rounded-md transition-colors">
                          <User className="w-4 h-4" />
                          <span>Success Stories</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/legal" className="flex items-center gap-2 p-2 hover:bg-nature-green/10 rounded-md transition-colors">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Legal Resources</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Anonymous Login Button */}
          <Button 
            variant="outline" 
            className="hidden md:flex items-center gap-2 hover:bg-nature-green/10 border-nature-green/30"
            onClick={() => alert("Guest login feature coming soon!")}
          >
            <UserCircle2 className="h-4 w-4" />
            <span>Guest Login</span>
          </Button>

          {/* Report Issue Button */}
          <Button className="hidden md:flex bg-nature-green hover:bg-nature-forest hover:scale-105 transition-transform">
            <Info className="h-4 w-4 mr-2" />
            Report an Issue
          </Button>

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
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden animate-fade-in">
          <nav className="container mt-8 flex flex-col gap-6 text-center">
            <a href="#issues" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              Issues
            </a>
            <a href="#solutions" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
            <a href="#resources" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              Resources
            </a>
            <a href="#about" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="/stories" className="text-xl font-medium py-3 border-b border-border hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
              Success Stories
            </a>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <h3 className="text-lg font-medium">More</h3>
              <a href="/faq" className="text-md py-2 hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
              <a href="/blog" className="text-md py-2 hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
              <a href="/stories" className="text-md py-2 hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
                Success Stories
              </a>
              <a href="/legal" className="text-md py-2 hover:text-nature-green" onClick={() => setIsMenuOpen(false)}>
                Legal Resources
              </a>
            </div>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => {
                alert("Guest login feature coming soon!");
                setIsMenuOpen(false);
              }}
            >
              <UserCircle2 className="h-4 w-4 mr-2" />
              Guest Login
            </Button>
            <Button className="mt-4 bg-nature-green hover:bg-nature-forest">
              <Info className="h-4 w-4 mr-2" />
              Report an Issue
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
