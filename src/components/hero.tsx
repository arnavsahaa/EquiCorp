
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-100/50 to-green-100/30 dark:from-blue-900/40 dark:to-green-900/30">
      <div className="container">
        <div className="text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full text-blue-800 dark:text-blue-300 font-medium text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
            </span>
            GNEC Hackathon Project
          </div>
        
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Ending Workplace <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Discrimination</span> Together
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: "200ms"}}>
            EquiCorp helps identify, report, and resolve workplace inequalities through transparency, 
            data, and empowerment tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in" style={{animationDelay: "400ms"}}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white hover-lift">
              Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 hover:bg-blue-600/10 dark:hover:bg-blue-600/20 hover-lift">
              Explore Resources
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 animate-fade-in" style={{animationDelay: "600ms"}}>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm">10,000+ People Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="text-sm">Eco-Friendly Approach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
