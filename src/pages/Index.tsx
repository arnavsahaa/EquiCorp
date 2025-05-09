
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import { Features } from "@/components/features";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import { useEffect } from "react";

const Index = () => {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <VideoGallery />
        <Features />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
