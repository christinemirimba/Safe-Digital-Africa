import { Shield, Mail, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SafeSpace Africa</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Empowering women and girls across Africa with digital literacy, safety tools, and community support. 
              Supporting 16 Days of Activism Against Gender-Based Violence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@safespaceafrica.org</span>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground mb-1">Emergency Hotline:</p>
                <p className="font-semibold text-accent">+254 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafeSpace Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
