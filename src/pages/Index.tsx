
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
  
  // Add scroll animations to elements with enhanced performance
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Only trigger animation when element is in viewport
        if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
          el.classList.add('animate-fade-in');
        }
      });
    };
    
    // Use requestAnimationFrame for smoother scrolling performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          animateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    animateOnScroll(); // Run once on component mount
    
    return () => window.removeEventListener('scroll', onScroll);
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
