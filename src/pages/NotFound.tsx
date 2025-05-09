
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-background to-equicorp-light/20 dark:to-equicorp-dark/20">
        <div className="text-center max-w-md">
          <div className="inline-block rounded-full bg-equicorp-primary/10 p-3 mb-4">
            <div className="text-6xl font-bold text-equicorp-primary">404</div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button asChild>
            <a href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
