import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle scrolling to hash on home page
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (isHome && id) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Orchard", href: "/#orchard" },
    { name: "Heirloom Fruit", href: "/#fruit" },
    { name: "Citrus", href: "/citrus" },
    { name: "Nursery", href: "/nursery" },
    { name: "Season & Hours", href: "/#visit" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={(e) => scrollToSection(e, "/")}>
          
          <span className={cn(
            "font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            Latch Orchards
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-sm font-medium hover:text-accent transition-colors",
                isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant={isScrolled ? "default" : "secondary"}
            className={cn(
              "font-serif",
              !isScrolled && "bg-white text-primary hover:bg-white/90"
            )}
            asChild
          >
             <Link to="/#visit" onClick={(e) => scrollToSection(e, "/#visit")}>Visit Us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => {
                  scrollToSection(e, link.href);
                  setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full font-serif mt-2" asChild>
            <Link to="/#visit" onClick={(e) => {
                scrollToSection(e, "/#visit");
                setMobileMenuOpen(false);
            }}>Plan Your Visit</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
