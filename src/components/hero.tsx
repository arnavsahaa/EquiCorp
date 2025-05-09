
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-950 dark:to-fuchsia-900">
      <div className="container">
        <div className="text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full text-purple-600 dark:text-purple-300 font-medium text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 dark:bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600 dark:bg-purple-400"></span>
            </span>
            GNEC Hackathon Project
          </div>
        
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ending Workplace <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Discrimination</span> Together
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            EquiCorp helps identify, report, and resolve workplace inequalities through transparency, 
            data, and empowerment tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900">
              Explore Resources
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-purple-600" />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm">10,000+ People Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Data-Driven Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
