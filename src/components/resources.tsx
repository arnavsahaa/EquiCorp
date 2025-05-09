
import { Book, Download, FileText, FileCheck, Link, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Resources() {
  const templates = [
    {
      title: "Pay Gap Complaint Template",
      description: "Formal template for reporting salary discrepancies based on gender or nationality.",
      icon: <FileText className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Salary Negotiation Script",
      description: "Step-by-step conversation guide for requesting fair compensation.",
      icon: <FileCheck className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Maternity Leave Request",
      description: "Template for requesting and documenting maternity leave entitlements.",
      icon: <FileText className="h-8 w-8 text-equicorp-primary" />,
    },
  ];
  
  const guides = [
    {
      title: "Legal Rights by Country",
      description: "Country-specific workplace discrimination laws and protections.",
      icon: <Book className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Evidence Collection Guide",
      description: "How to properly document workplace discrimination incidents.",
      icon: <FileCheck className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Company Policy Analysis",
      description: "Guide to understanding and evaluating company equality policies.",
      icon: <Book className="h-8 w-8 text-equicorp-primary" />,
    },
  ];
  
  const helplines = [
    {
      title: "EquiCorp Support Line",
      description: "24/7 confidential support line for workplace discrimination issues.",
      icon: <HelpCircle className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Legal Advice Network",
      description: "Connect with legal professionals specializing in workplace discrimination.",
      icon: <Link className="h-8 w-8 text-equicorp-primary" />,
    },
    {
      title: "Crisis Support",
      description: "Immediate assistance for urgent discrimination situations.",
      icon: <HelpCircle className="h-8 w-8 text-equicorp-primary" />,
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-equicorp-light/10 dark:to-equicorp-dark/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Resources Library</h2>
          <p className="text-muted-foreground">
            Access tools, templates, and guides to help you navigate workplace discrimination issues.
          </p>
        </div>
        
        <Tabs defaultValue="templates" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="guides">Legal Guides</TabsTrigger>
            <TabsTrigger value="helplines">Helplines</TabsTrigger>
          </TabsList>
          
          <TabsContent value="templates" className="mt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="hover:border-equicorp-primary transition-colors">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{template.icon}</div>
                    <CardTitle>{template.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{template.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full gap-2">
                      <Download className="h-4 w-4" /> Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guides" className="mt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:border-equicorp-primary transition-colors">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{guide.icon}</div>
                    <CardTitle>{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{guide.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full gap-2">
                      <Download className="h-4 w-4" /> Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="helplines" className="mt-4">
            <div className="grid md:grid-cols-3 gap-6">
              {helplines.map((helpline, index) => (
                <Card key={index} className="hover:border-equicorp-primary transition-colors">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{helpline.icon}</div>
                    <CardTitle>{helpline.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{helpline.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full gap-2">
                      <Link className="h-4 w-4" /> Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need personalized assistance? Our team is ready to help.</p>
          <Button className="bg-equicorp-primary hover:bg-equicorp-secondary">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
