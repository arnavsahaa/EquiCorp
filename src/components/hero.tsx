
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-nature-sage/30 to-nature-sand/20 dark:from-nature-forest/40 dark:to-nature-earth/30">
      <div className="container">
        <div className="text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-nature-green/20 px-3 py-1 rounded-full text-nature-forest dark:text-nature-leaf font-medium text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-terracotta dark:bg-nature-terracotta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nature-terracotta dark:bg-nature-terracotta"></span>
            </span>
            GNEC Hackathon Project
          </div>
        
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Ending Workplace <span className="bg-gradient-to-r from-nature-terracotta to-nature-rust bg-clip-text text-transparent">Discrimination</span> Together
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: "200ms"}}>
            EquiCorp helps identify, report, and resolve workplace inequalities through transparency, 
            data, and empowerment tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in" style={{animationDelay: "400ms"}}>
            <Button size="lg" className="bg-nature-terracotta hover:bg-nature-rust text-white hover-lift">
              Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-nature-terracotta hover:bg-nature-terracotta/10 dark:hover:bg-nature-terracotta/20 hover-lift">
              Explore Resources
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 animate-fade-in" style={{animationDelay: "600ms"}}>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-nature-terracotta" />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-nature-terracotta" />
              <span className="text-sm">10,000+ People Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-nature-terracotta" />
              <span className="text-sm">Eco-Friendly Approach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
