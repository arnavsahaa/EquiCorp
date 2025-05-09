
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";

interface StoryCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  delay?: number;
}

const StoryCard = ({ name, role, company, content, image, rating, delay = 0 }: StoryCardProps) => (
  <div 
    className="bg-gradient-to-br from-white to-nature-green/5 dark:from-nature-forest/40 dark:to-background p-6 rounded-xl shadow-lg border border-nature-green/10 hover-lift" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4 mb-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-nature-green/30" />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role} at {company}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-nature-green/20" />
      <p className="pl-6 text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

const Stories = () => {
  useEffect(() => {
    // Add scroll animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on component mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-nature-green/10 to-nature-leaf/20 dark:from-nature-forest/40 dark:to-nature-moss/30 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">
                Real Stories of <span className="bg-gradient-to-r from-nature-green to-nature-leaf bg-clip-text text-transparent">Workplace Justice</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "200ms"}}>
                Learn how EquiCorp has helped thousands of individuals address workplace discrimination and find resolution.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Story */}
        <section className="py-16 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Featured Story</h2>
            <div className="bg-gradient-to-br from-white to-nature-green/10 dark:from-nature-forest/30 dark:to-background p-8 rounded-2xl shadow-xl border border-nature-green/20 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                  <p className="text-muted-foreground mb-4">Senior Developer, Tech Innovations Inc.</p>
                  <p className="mb-4 text-lg leading-relaxed italic">
                    "After 5 years of being passed over for promotions while watching less experienced male colleagues advance, I used EquiCorp's tools to document the pattern and build my case. Their legal resources helped me understand my rights, and their platform gave me the confidence to address the issue. Today, I'm leading my own team and mentoring other women in tech."
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-nature-green/10 text-nature-forest dark:text-nature-leaf rounded-full text-sm">Gender Discrimination</span>
                    <span className="px-3 py-1 bg-nature-green/10 text-nature-forest dark:text-nature-leaf rounded-full text-sm">Promotion Inequality</span>
                    <span className="px-3 py-1 bg-nature-green/10 text-nature-forest dark:text-nature-leaf rounded-full text-sm">Tech Industry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories Grid */}
        <section className="py-16 container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">More Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real people, real outcomes. Discover how our platform has helped individuals across various industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="Michael Chen" 
                role="Marketing Manager" 
                company="Global Brands"
                content="The pay disparity in my department was subtle but real. EquiCorp's salary comparison tool helped me gather data that proved I was being underpaid compared to peers. The negotiation was tough, but I succeeded in getting a 15% adjustment."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                rating={5}
              />
            </div>
            
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="Aisha Williams" 
                role="Senior Nurse" 
                company="Central Hospital"
                content="As a woman of color, I faced both racial and gender discrimination. The documentation tools from EquiCorp helped me record incidents and build a case that led to hospital-wide diversity training and policy changes."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                rating={4}
              />
            </div>
            
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="Carlos Rodriguez" 
                role="Finance Analyst" 
                company="Investment Partners"
                content="Being passed over for promotion despite outperforming colleagues was frustrating. EquiCorp's guidance helped me approach HR with concrete evidence. I'm now in a leadership position and working to ensure our promotion process is fair and transparent."
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                rating={5}
              />
            </div>
            
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="Emily Zhang" 
                role="Software Engineer" 
                company="Future Tech"
                content="The 'boys club' culture at my workplace was affecting my career growth. Using EquiCorp's resources, I found allies and approached leadership. The company has since implemented measures to make the culture more inclusive."
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                rating={4}
              />
            </div>
            
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="David Washington" 
                role="Project Manager" 
                company="Construction Solutions"
                content="Facing age discrimination at 58 was devastating. EquiCorp connected me with legal resources that helped me understand my rights. Today, my company values my experience and I'm mentoring younger colleagues."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                rating={5}
              />
            </div>
            
            <div className="scroll-animate opacity-0">
              <StoryCard 
                name="Sophia Patel" 
                role="HR Director" 
                company="Global Retail"
                content="I used EquiCorp not as an employee, but as an HR professional. Their resources helped me identify blind spots in our hiring and promotion processes. We've now implemented more equitable practices company-wide."
                image="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                rating={5}
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-nature-green hover:bg-nature-forest hover-lift">
              Submit Your Success Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        
        {/* Testimonials Scroll */}
        <section className="py-16 bg-gradient-to-br from-nature-green/5 to-nature-leaf/10 dark:from-nature-forest/20 dark:to-nature-moss/10">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">What People Are Saying</h2>
            
            <ScrollArea className="w-full h-60 rounded-xl p-4">
              <div className="space-y-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <p className="italic text-muted-foreground">
                      {[
                        "EquiCorp's chatbot guided me through documenting my case when I didn't know where to start. It was like having an expert in my pocket.",
                        "The salary comparison tool was eye-opening. I had no idea the pay gap was that significant in my role.",
                        "Having templates for emails and formal complaints took away the stress of figuring out what to say.",
                        "The anonymous reporting feature gave me the confidence to speak up without fear of retaliation.",
                        "I appreciated the personalized guidance that took my specific situation into account.",
                        "The community support section helped me realize I wasn't alone in my experience.",
                        "EquiCorp helped me have a productive conversation with HR instead of an accusatory one.",
                        "The legal resources were invaluable. I wouldn't have known my rights otherwise."
                      ][i]}
                    </p>
                    <div className="mt-2 flex justify-end">
                      <small className="text-nature-green font-medium">— EquiCorp User</small>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 container">
          <div className="bg-gradient-to-br from-nature-green to-nature-leaf dark:from-nature-forest dark:to-nature-moss rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-lg mb-6 max-w-2xl opacity-90">
                Join thousands who have used EquiCorp to address workplace discrimination and create positive change.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-nature-forest hover:bg-gray-100 hover-lift">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover-lift">
                  Learn How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
