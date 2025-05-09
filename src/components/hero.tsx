
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-equicorp-primary/10 px-3 py-1 rounded-full text-equicorp-primary font-medium text-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-equicorp-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-equicorp-primary"></span>
              </span>
              GNEC Hackathon Project
            </div>
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ending Workplace <span className="text-gradient">Discrimination</span> Together
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              EquiCorp helps identify, report, and resolve workplace inequalities through transparency, 
              data, and empowerment tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-equicorp-primary hover:bg-equicorp-secondary">
                Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Resources
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-equicorp-primary" />
                <span className="text-sm">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-equicorp-primary" />
                <span className="text-sm">10,000+ People Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-equicorp-primary" />
                <span className="text-sm">Data-Driven Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-equicorp-primary/80 to-equicorp-accent p-1">
                <img 
                  src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Workplace equality" 
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Gender Pay Gap Analysis</h3>
                  <span className="text-red-500 font-medium">23% Gap</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Male</span>
                      <span>$76,000</span>
                    </div>
                    <div className="h-2 bg-muted mt-1 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Female</span>
                      <span>$58,700</span>
                    </div>
                    <div className="h-2 bg-muted mt-1 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 rounded-full w-[77%]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Same role, experience, and education</span>
                    <Button variant="ghost" size="sm" className="text-equicorp-primary">
                      View Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-equicorp-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-equicorp-primary/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
