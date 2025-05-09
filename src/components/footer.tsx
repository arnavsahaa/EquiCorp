
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-nature-green">Contact Information</h3>
            <p className="text-muted-foreground">Manipal University Jaipur</p>
            <a href="mailto:arnavbprd@gmail.com" className="text-nature-green hover:text-nature-forest hover:underline underline-animation">
              arnavbprd@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
