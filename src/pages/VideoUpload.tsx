
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VideoUpload } from "@/components/video-upload";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VideoUploadPage = () => {
  const handleVideoUpload = (file: File) => {
    console.log("Video file uploaded:", file);
    // Here you would typically do something with the file,
    // like storing its reference in state or sending it to a backend
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Upload Video</h1>
            <p className="text-muted-foreground">
              Upload your videos showcasing workplace discrimination issues to share your experience.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-black/20 rounded-2xl p-8 shadow-xl">
            <VideoUpload onVideoUpload={handleVideoUpload} />
          </div>
          
          <div className="mt-10">
            <Separator className="my-6" />
            
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">Video Guidelines</h3>
              <p className="text-muted-foreground mb-4">
                To ensure your video is approved and can help others, please follow these guidelines:
              </p>
              
              <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-xl mx-auto">
                <li>• Videos should be clear and concise (2-5 minutes recommended)</li>
                <li>• Focus on specific workplace discrimination issues</li>
                <li>• Respect privacy by not identifying individuals without consent</li>
                <li>• Avoid offensive language and maintain a constructive tone</li>
                <li>• Include potential solutions or recommendations when possible</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoUploadPage;
