
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import { Features } from "@/components/features";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";

const Index = () => {
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
