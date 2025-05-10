
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, HelpCircle, Mail, Share2, User, Users, Flag, Bell } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Define the updated video issues data with discrimination cases (Glass Ceiling removed)
const issues = [
  {
    id: 1,
    title: "Occupational Segregation",
    description: "Jobs stereotyped as 'men\\'s work' or 'women\\'s work,' limiting access to high-paying fields.",
    tagline: "Why can't I be an engineer too?",
    videoUrl: "/videos/occupational_segregation.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Occupational+Segregation",
    icon: <Users className="w-8 h-8 text-nature-terracotta" />,
    detailedDescription: "Certain jobs are stereotyped as \"men's work\" or \"women's work,\" limiting women's access to high-paying, traditionally male-dominated fields like tech or engineering.",
    solutions: [
      {
        title: "Challenge stereotypes",
        description: "Question assumptions about which genders are suited for particular roles or fields."
      },
      {
        title: "Seek training opportunities",
        description: "Pursue education and skill development in non-traditional fields for your gender."
      },
      {
        title: "Find industry-specific communities",
        description: "Join groups that support underrepresented genders in your desired field."
      },
      {
        title: "Request bias training",
        description: "Advocate for workplace training that addresses unconscious bias in hiring and assignments."
      },
      {
        title: "Highlight diverse role models",
        description: "Share stories of people who have succeeded in breaking occupational barriers."
      }
    ]
  },
  {
    id: 2,
    title: "Maternity Discrimination",
    description: "Pregnant women or new mothers denied opportunities due to assumptions about commitment.",
    tagline: "Motherhood shouldn't cost me my career.",
    videoUrl: "/videos/maternity_discrimination.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Maternity+Discrimination",
    icon: <Bell className="w-8 h-8 text-nature-terracotta" />,
    detailedDescription: "Pregnant women or new mothers may be denied promotions, fired, or not hired due to assumptions about their availability or commitment.",
    solutions: [
      {
        title: "Know your legal rights",
        description: "Familiarize yourself with laws protecting pregnant women and new parents in the workplace."
      },
      {
        title: "Plan your leave carefully",
        description: "Create a detailed transition plan for your responsibilities during parental leave."
      },
      {
        title: "Document discriminatory actions",
        description: "Keep records of any changes in treatment or opportunities after pregnancy announcement."
      },
      {
        title: "Propose flexible arrangements",
        description: "Suggest work arrangements that accommodate parenting while maintaining productivity."
      },
      {
        title: "Connect with parent networks",
        description: "Join groups of working parents who can provide support and guidance."
      }
    ]
  },
  {
    id: 3,
    title: "Retaliation for Speaking Out",
    description: "Women who report discrimination may face backlash, isolation, or career setbacks.",
    tagline: "The price of truth shouldn't be your job.",
    videoUrl: "/videos/retaliation.mp4",
    previewImg: "https://placehold.co/600x400/purple/white?text=Retaliation",
    icon: <Flag className="w-8 h-8 text-nature-terracotta" />,
    detailedDescription: "Women who report discrimination or harassment may face backlash, isolation, or career setbacks.",
    solutions: [
      {
        title: "Document everything",
        description: "Keep detailed records of incidents, reports made, and any subsequent changes in treatment."
      },
      {
        title: "Know retaliation signs",
        description: "Learn to recognize subtle forms of retaliation such as exclusion or increased scrutiny."
      },
      {
        title: "Secure allies",
        description: "Identify supportive colleagues who can validate your experiences and provide witness."
      },
      {
        title: "Understand reporting options",
        description: "Research internal and external channels for reporting discrimination and retaliation."
      },
      {
        title: "Preserve work product",
        description: "Maintain copies of your work and positive feedback to counter performance criticism."
      }
    ]
  }
];

export function VideoGallery() {
  const [activeIssue, setActiveIssue] = useState(issues[0]);
  const [activeTab, setActiveTab] = useState("video");
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [isPlaying, setIsPlaying] = useState(false);
  
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

  const handleNextIssue = () => {
    const currentIndex = issues.findIndex(issue => issue.id === activeIssue.id);
    const nextIndex = (currentIndex + 1) % issues.length;
    handleIssueSelect(issues[nextIndex]);
  };

  const handlePrevIssue = () => {
    const currentIndex = issues.findIndex(issue => issue.id === activeIssue.id);
    const prevIndex = (currentIndex - 1 + issues.length) % issues.length;
    handleIssueSelect(issues[prevIndex]);
  };
  
  // Add play/pause detection to set isPlaying state
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };
  
  const handleVideoPause = () => {
    setIsPlaying(false);
  };
  
  // Autoplay the first video on component mount
  useEffect(() => {
    const firstVideo = videoRefs.current[activeIssue.id];
    if (firstVideo) {
      firstVideo.play().catch(e => console.log("Initial video play prevented:", e));
      
      // Add event listeners for play/pause
      firstVideo.addEventListener('play', handleVideoPlay);
      firstVideo.addEventListener('pause', handleVideoPause);
      
      return () => {
        firstVideo.removeEventListener('play', handleVideoPlay);
        firstVideo.removeEventListener('pause', handleVideoPause);
      };
    }
  }, []);
  
  // Add event listeners when active issue changes
  useEffect(() => {
    const video = videoRefs.current[activeIssue.id];
    if (video) {
      video.addEventListener('play', handleVideoPlay);
      video.addEventListener('pause', handleVideoPause);
      
      return () => {
        video.removeEventListener('play', handleVideoPlay);
        video.removeEventListener('pause', handleVideoPause);
      };
    }
  }, [activeIssue]);
  
  return (
    <section id="issues" className="py-16 bg-gradient-to-b from-background to-nature-sand/30 dark:to-nature-forest/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient animate-fade-in">Workplace Discrimination Issues</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "100ms"}}>
          EquiCorp works to expose and solve these common workplace discrimination issues that affect careers and well-being.
        </p>

        {/* Are You Facing Section - Redesigned with glass morphism and center alignment */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-black/20 rounded-2xl p-8 shadow-xl animate-fade-in mb-16 max-w-4xl mx-auto overflow-hidden relative text-center">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-nature-terracotta/20 to-nature-green/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="p-3 rounded-full bg-gradient-to-br from-nature-terracotta/30 to-nature-green/30 backdrop-blur-md">
                {activeIssue.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Are you facing</h2>
                <h3 className="text-xl font-semibold text-nature-terracotta">{activeIssue.title}?</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{activeIssue.description}</p>
            <p className="font-medium italic text-nature-terracotta text-sm mb-6">"{activeIssue.tagline}"</p>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="solutions">Solutions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="video" className="pt-2">
                {/* Video Display */}
                <div className="aspect-video w-full max-w-2xl mx-auto bg-muted rounded-lg overflow-hidden transition-all duration-500 shadow-lg">
                  <video
                    ref={el => videoRefs.current[activeIssue.id] = el}
                    controls
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isPlaying ? 'scale-[1.02]' : ''
                    }`}
                    poster={activeIssue.previewImg}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                  >
                    <source src={activeIssue.videoUrl} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              </TabsContent>
              
              <TabsContent value="solutions" className="pt-2">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-4 text-nature-green">How to address {activeIssue.title}</h4>
                  <div className="space-y-4">
                    {activeIssue.solutions.map((solution, i) => (
                      <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 100}ms`}}>
                        <h5 className="font-medium mb-1 flex items-center gap-2 justify-center">
                          <span className="text-xs bg-nature-green/20 text-nature-green px-2 py-0.5 rounded-full">{i+1}</span>
                          {solution.title}
                        </h5>
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full hover:bg-nature-green/20 transition-colors"
                onClick={handlePrevIssue}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous Issue
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full hover:bg-nature-green/20 transition-colors"
                onClick={handleNextIssue}
              >
                Next Issue
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Modern Issue Card Carousel with smaller, more interactive tiles */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Browse All Issues</h3>
          
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-4 justify-center px-4">
              {issues.map((issue) => (
                <Card 
                  key={issue.id} 
                  className={`cursor-pointer transition-all duration-300 w-64 h-[280px] overflow-hidden relative group ${
                    activeIssue.id === issue.id 
                      ? 'ring-2 ring-nature-terracotta shadow-lg shadow-nature-terracotta/10 translate-y-[-5px]' 
                      : 'hover:translate-y-[-5px] border-transparent hover:shadow-md'
                  } animate-fade-in bg-gradient-to-br from-white/5 to-nature-terracotta/5 backdrop-blur-sm flex flex-col`}
                  style={{animationDelay: `${issue.id * 100}ms`}}
                  onClick={() => handleIssueSelect(issue)}
                >
                  {/* Hover overlay with shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300" style={{ backgroundSize: "200% 100%" }}></div>
                  
                  <CardContent className="p-4 flex-1 relative z-10">
                    {/* Icon and title with subtle animation */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-full bg-nature-terracotta/20 group-hover:animate-pulse-slow">
                        <div className="group-hover:animate-bounce-subtle">
                          {issue.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm group-hover:text-nature-terracotta transition-colors duration-300">
                        {issue.title}
                      </h3>
                    </div>
                    
                    {/* Video thumbnail with overlay effect */}
                    <div className="aspect-video mb-3 rounded-md overflow-hidden group-hover:ring-1 ring-white/30 transition-all">
                      <div className="relative w-full h-full">
                        <video
                          poster={issue.previewImg}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                        >
                          <source src={issue.videoUrl} type="video/mp4" />
                        </video>
                        
                        {/* Play indicator overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <ChevronRight className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tagline with ellipsis for overflow */}
                    <p className="text-xs text-muted-foreground italic line-clamp-2 mb-2">"{issue.tagline}"</p>
                  </CardContent>
                  
                  <CardFooter className="p-3 pt-0">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs hover:bg-nature-terracotta/10 hover:text-nature-terracotta group-hover:bg-nature-terracotta/5 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIssueSelect(issue);
                        setActiveTab("solutions");
                      }}
                    >
                      <span>Read More</span>
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Display detailed description for the selected issue - with enhanced design */}
          <div className="mt-10 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-nature-terracotta/10 to-transparent blur-xl"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-nature-green/10 to-transparent blur-xl"></div>
              
              <div className="relative z-10">
                <h4 className="font-semibold mb-3 text-nature-terracotta flex items-center justify-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-nature-terracotta/20 flex items-center justify-center text-xs">
                    {activeIssue.id}
                  </span>
                  {activeIssue.title} - In Detail
                </h4>
                <p className="text-muted-foreground">{activeIssue.detailedDescription}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Resources Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts has developed comprehensive guides and resources to help you navigate workplace discrimination issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="gap-2 bg-nature-terracotta hover:bg-nature-rust">
              <HelpCircle className="h-4 w-4" />
              Get Guidance
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
