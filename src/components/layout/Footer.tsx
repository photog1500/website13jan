import React from 'react';
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-2xl font-bold">Latch Orchards</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              AL #833    Cultivating heirloom varieties and preserving the tradition of the family orchard since 2024.   
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61578202290021" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/#orchard" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/varieties/apples" className="hover:text-white transition-colors">Apple Varieties</Link></li>
              <li><Link to="/nursery" className="hover:text-white transition-colors">Nursery Stock</Link></li>
              <li><Link to="/ripe-calendar" className="hover:text-white transition-colors">Season Calendar</Link></li>
              <li><Link to="/recipes" className="hover:text-white transition-colors">Recipes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  41660 Davis Duck Rd<br />
                  Bay Minette, AL 36507
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:251-301-8057" className="hover:text-white">251-301-8057</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="font-medium text-white">May - January</p>
              <p className="text-xs opacity-70">Off Season by Appt only</p>
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2 mt-3">
                <span>Hours</span>
                <span>9a - 6p</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span>Wed - Sun in season</span>
                <span>9a - Sunset</span>
              </div>
              <p className="text-xs italic opacity-70 mt-4">
                *Hours subject to weather and availability. Please call ahead.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Latch Orchards. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
