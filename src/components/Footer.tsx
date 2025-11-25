import { Shield, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-lg font-bold">SafeSpace Africa</span>
            </div>
            <p className="text-sm text-white/80 max-w-md">
              Advanced digital safety assessment powered by community.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-white/80 transition-colors hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety-tools" className="text-sm text-white/80 transition-colors hover:text-white">
                  Safety Tools
                </Link>
              </li>
              <li>
                <Link to="/digital-literacy" className="text-sm text-white/80 transition-colors hover:text-white">
                  Digital Literacy Hub
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-white/80 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-sm text-white/80 transition-colors hover:text-white">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-white/80 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/christine.kwamboka.39904" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/christinemirimba/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/Tinnah_Mirimba?t=nZPhrf1oB28G1s6LyyrssA&s=09" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/christine-mirimba-51202a26b/" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} SafeSpace Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
