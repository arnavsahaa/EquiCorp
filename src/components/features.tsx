
import { CheckCircle, ChevronRight, BarChart4, TrendingUp, Search, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: <BarChart4 className="w-10 h-10 text-equicorp-primary" />,
      title: "Salary Transparency Tool",
      description: "Compare crowdsourced salary data across gender, nationality, and experience levels to identify gaps."
    },
    {
      icon: <Search className="w-10 h-10 text-equicorp-primary" />,
      title: "Bias Scanner",
      description: "Upload job listings to detect biased language and get suggestions for inclusive alternatives."
    },
    {
      icon: <Shield className="w-10 h-10 text-equicorp-primary" />,
      title: "Inclusive Hiring Tracker",
      description: "Track and compare companies based on their inclusivity metrics and diversity practices."
    },
    {
      icon: <FileText className="w-10 h-10 text-equicorp-primary" />,
      title: "Empowerment Tools",
      description: "Access negotiation templates and legal literacy guides specific to your situation."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-equicorp-primary" />,
      title: "Anonymous Reviews",
      description: "Read and share experiences about equity practices at different companies."
    },
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Comprehensive Solutions</h2>
          <p className="text-muted-foreground">
            EquiCorp provides tools and resources to identify, address, and prevent workplace discrimination.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border hover:border-equicorp-primary transition-colors duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button variant="ghost" className="group/btn">
                  <span>Learn more</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-equicorp-primary/10 dark:bg-equicorp-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">UN Sustainable Development Goals</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our platform directly contributes to multiple UN SDGs by promoting equality and reducing workplace discrimination.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-[#E5243B] text-white px-4 py-2 rounded-md font-medium">SDG 5: Gender Equality</div>
            <div className="bg-[#DD1367] text-white px-4 py-2 rounded-md font-medium">SDG 10: Reduced Inequalities</div>
            <div className="bg-[#8F1838] text-white px-4 py-2 rounded-md font-medium">SDG 8: Decent Work</div>
            <div className="bg-[#F36D25] text-white px-4 py-2 rounded-md font-medium">SDG 9: Innovation</div>
            <div className="bg-[#00689D] text-white px-4 py-2 rounded-md font-medium">SDG 16: Justice</div>
          </div>
          
          <Button className="bg-equicorp-primary hover:bg-equicorp-secondary">
            Learn About Our Impact
          </Button>
        </div>
      </div>
    </section>
  );
}
