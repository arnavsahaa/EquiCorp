
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, HelpCircle, Mail, Phone, Share2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the video issues data
const issues = [
  {
    id: 1,
    title: "The Missed Promotion",
    description: "Two equally hard-working students/employees. He gets promoted. She gets ignored.",
    tagline: "Same input. Different outcome.",
    videoUrl: "/videos/missed_promotion.mp4", 
    previewImg: "https://placehold.co/600x400/purple/white?text=Promotion+Bias",
    solutions: [
      {
        title: "Document your achievements",
        description: "Keep a record of your contributions, metrics, and positive feedback."
      },
      {
        title: "Request formal feedback",
        description: "Ask for specific reasons why you were passed over and what skills you need to develop."
      },
      {
        title: "Seek mentorship",
        description: "Find senior leaders who can advocate for you and provide guidance."
      },
      {
        title: "Know your legal rights",
        description: "EquiCorp provides legal resources about promotion discrimination based on gender."
      },
      {
        title: "Report to HR",
        description: "If you believe discrimination occurred, file a formal complaint with documentation."
      }
    ]
  },
  {
    id: 2,
    title: "The Interview That Wasn't",
    description: "Two candidates, same resume. One gets hired. The other never gets a call — because of her name.",
    tagline: "Was it my skills... or my name?",
    videoUrl: "/videos/interview_bias.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Interview+Bias",
    solutions: [
      {
        title: "Blind application process",
        description: "EquiCorp advocates for companies to use blind resume screening to eliminate name bias."
      },
      {
        title: "Request feedback",
        description: "If rejected, politely ask for specific reasons to identify potential bias."
      },
      {
        title: "Seek diverse recruiters",
        description: "Look for companies with diverse hiring panels and inclusive practices."
      },
      {
        title: "Report discriminatory patterns",
        description: "If you suspect discrimination, document and report to appropriate agencies."
      },
      {
        title: "Network strategically",
        description: "Build connections who can refer you directly, bypassing initial screening bias."
      }
    ]
  },
  {
    id: 3,
    title: "Just a Joke",
    description: "Girl in group work is mocked and talked over. Her ideas are dismissed.",
    tagline: "It wasn't funny to her.",
    videoUrl: "/videos/workplace_joke.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Dismissive+Behavior",
    solutions: [
      {
        title: "Speak up in the moment",
        description: "Respond calmly with 'I don't find that funny' or 'I'd like to finish my point.'"
      },
      {
        title: "Document incidents",
        description: "Keep a log of repeated behavior, including dates, witnesses, and exact statements."
      },
      {
        title: "Build alliances",
        description: "Find colleagues who will amplify your ideas and give you proper credit."
      },
      {
        title: "Address with leadership",
        description: "If behavior continues, discuss with a manager how it impacts your work."
      },
      {
        title: "Formal complaint",
        description: "For serious cases, file a complaint using EquiCorp's templates and guidance."
      }
    ]
  },
  {
    id: 4,
    title: "Same Output, Different Rewards",
    description: "Two interns give the same effort. One gets praise and a bonus. The other doesn't.",
    tagline: "If we both worked, why am I the only one left behind?",
    videoUrl: "/videos/reward_inequality.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Reward+Inequality",
    solutions: [
      {
        title: "Compensation transparency",
        description: "Use EquiCorp's salary benchmark tool to compare your compensation with peers."
      },
      {
        title: "Ask about bonus criteria",
        description: "Request clear, measurable criteria for bonuses and rewards."
      },
      {
        title: "Negotiate assertively",
        description: "Use our templates to negotiate better compensation based on your contributions."
      },
      {
        title: "Seek external validation",
        description: "Get certifications and external recognition that validates your skills."
      },
      {
        title: "Know equity laws",
        description: "Understand laws regarding equal pay and compensation discrimination in your region."
      }
    ]
  },
  {
    id: 5,
    title: "When It Builds Up",
    description: "A sequence of small insults that add up until she breaks.",
    tagline: "It's not in your head. It's in the system.",
    videoUrl: "/videos/microaggressions.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Microaggressions",
    solutions: [
      {
        title: "Recognize microaggressions",
        description: "Learn to identify subtle forms of discrimination and bias."
      },
      {
        title: "Practice self-care",
        description: "Develop resilience strategies including mindfulness and support networks."
      },
      {
        title: "Set boundaries",
        description: "Learn effective ways to communicate when behavior is unacceptable."
      },
      {
        title: "Seek ally support",
        description: "Connect with advocates who can validate your experiences and speak up."
      },
      {
        title: "Access mental health resources",
        description: "EquiCorp provides connections to professionals who understand workplace discrimination."
      }
    ]
  }
];

export function VideoGallery() {
  const [activeIssue, setActiveIssue] = useState(issues[0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('video-carousel');
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;
      
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };
  
  const handleIssueSelect = (issue: typeof issues[0]) => {
    setActiveIssue(issue);
    
    // Reset all videos
    Object.values(videoRefs.current).forEach(videoEl => {
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
    
    // Play the selected video after a short delay
    setTimeout(() => {
      const activeVideo = videoRefs.current[issue.id];
      if (activeVideo) {
        activeVideo.play().catch(e => console.log("Video play prevented:", e));
      }
    }, 300);
  };
  
  // Autoplay the first video on component mount
  useEffect(() => {
    const firstVideo = videoRefs.current[activeIssue.id];
    if (firstVideo) {
      firstVideo.play().catch(e => console.log("Initial video play prevented:", e));
    }
  }, []);
  
  return (
    <section id="issues" className="py-16 bg-gradient-to-b from-background to-equicorp-light/20 dark:to-equicorp-dark/20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient animate-fade-in">Workplace Issues We Address</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "100ms"}}>
          EquiCorp works to expose and solve these common workplace discrimination issues that affect careers and well-being.
        </p>
        
        <div className="relative mb-8">
          {/* Video Carousel Navigation */}
          <Button 
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full opacity-80 hover:opacity-100 shadow-lg hover:scale-110 transition-transform"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full opacity-80 hover:opacity-100 shadow-lg hover:scale-110 transition-transform"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Video Carousel */}
          <div 
            id="video-carousel"
            className="video-carousel flex gap-6 overflow-x-auto pb-6 px-12 snap-x snap-mandatory"
          >
            {issues.map((issue) => (
              <Card 
                key={issue.id} 
                className={`flex-shrink-0 w-[300px] snap-center cursor-pointer transition-all duration-300 ${
                  activeIssue.id === issue.id 
                    ? 'border-equicorp-primary shadow-lg shadow-equicorp-primary/20 scale-105' 
                    : 'hover:border-equicorp-primary/50 hover:scale-103'
                } animate-fade-in`}
                style={{animationDelay: `${issue.id * 150}ms`}}
                onClick={() => handleIssueSelect(issue)}
              >
                <CardContent className="p-4">
                  <div className="aspect-video mb-4 rounded-md overflow-hidden bg-muted">
                    <img 
                      src={issue.previewImg} 
                      alt={issue.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{issue.title}</h3>
                  <p className="text-sm text-muted-foreground italic">"{issue.tagline}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Selected Issue Content */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 items-start">
          {/* Video Display */}
          <div className="bg-equicorp-primary/10 p-6 rounded-2xl animate-fade-in shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">Are you facing -</h2>
            <h3 className="text-xl font-semibold mb-4">{activeIssue.title}</h3>
            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
              {/* Uncomment this and replace the img tag when you have actual videos */}
              <video
                ref={el => videoRefs.current[activeIssue.id] = el}
                controls
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster={activeIssue.previewImg}
              >
                <source src={activeIssue.videoUrl} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
            <p className="text-muted-foreground">{activeIssue.description}</p>
            <div className="mt-4">
              <p className="font-medium">"{activeIssue.tagline}"</p>
            </div>
          </div>

          {/* Solutions Scroll */}
          <div className="animate-fade-in" style={{animationDelay: "200ms"}}>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">Solutions</h3>
              <Separator className="flex-1" />
            </div>
            <ScrollArea className="solution-scroll h-[400px] rounded-md border p-4 shadow-inner">
              <div className="space-y-6 pr-4">
                {activeIssue.solutions.map((solution, i) => (
                  <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 150}ms`}}>
                    <h4 className="text-lg font-medium text-equicorp-primary mb-2">{solution.title}</h4>
                    <p className="text-muted-foreground">{solution.description}</p>
                    {i < activeIssue.solutions.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <h4 className="text-lg font-medium mb-4">How EquiCorp can help</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="gap-2 hover:bg-equicorp-primary/20 transition-colors">
                      <HelpCircle className="h-4 w-4" />
                      Get Guidance
                    </Button>
                    <Button variant="outline" className="gap-2 hover:bg-equicorp-primary/20 transition-colors">
                      <Mail className="h-4 w-4" />
                      Email Support
                    </Button>
                    <Button variant="outline" className="gap-2 hover:bg-equicorp-primary/20 transition-colors">
                      <Phone className="h-4 w-4" />
                      Call Helpline
                    </Button>
                    <Button variant="outline" className="gap-2 hover:bg-equicorp-primary/20 transition-colors">
                      <Share2 className="h-4 w-4" />
                      Share Resources
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
}
