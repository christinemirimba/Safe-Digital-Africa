import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ResourcesDropdown } from "./ResourcesDropdown";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Safety Tools", path: "/safety-tools" },
  { name: "Digital Literacy Hub", path: "/digital-literacy" },
  { name: "How It Works", path: "/how-it-works" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <path d="M16 2 L28 8 L28 14 C28 22 20 30 16 30 C12 30 4 22 4 14 L4 8 Z" fill="hsl(var(--primary))"/>
            <path d="M18 12 C18 12 20 14 20 16 C20 18 22 20 22 22 C22 24 20 24 20 24 C20 24 18 22 18 20 C18 18 16 18 16 20 C16 22 14 24 14 24 C14 24 12 22 12 20 C12 18 14 16 14 14 C14 12 16 12 16 12 C16 12 18 12 18 12 Z" fill="white"/>
          </svg>
          <span className="text-xl font-bold text-foreground">SafeSpace Africa</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ResourcesDropdown />
          <div className="ml-4 border-l border-border pl-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-background md:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Resources</p>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">About SafeSpace Africa</Button>
                </Link>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">FAQ</Button>
                </Link>
                <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Settings</Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Contact Us</Button>
                </Link>
                <Link to="/privacy" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Privacy Policy</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
