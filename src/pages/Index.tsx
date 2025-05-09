
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import { Features } from "@/components/features";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Add scroll animations to elements
  useEffect(() => {
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="scroll-smooth pt-4"> {/* Added padding-top to accommodate larger header */}
        <Hero />
        <div className="scroll-animate">
          <VideoGallery />
        </div>
        <div className="scroll-animate">
          <Features />
        </div>
        <div className="scroll-animate">
          <Resources />
        </div>
        <div className="scroll-animate">
          <Contact />
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default Index;
