"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, BUSINESS_CONFIG } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // 🔧 MOBILE FIX: Prevent scroll jump dengan timeout
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = offsetTop - 80; // Offset untuk navbar height

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const whatsappLink = generateWhatsAppLink();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-white/50 to-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 font-poppins font-bold text-lg md:text-xl">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-sm md:text-base">LM</span>
            </div>
            <span className="text-foreground">Laundry Modern</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => handleNavClick(link.href)} className="text-foreground font-medium hover:text-primary transition-colors duration-200 text-sm">
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-200">Pesan Sekarang</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 py-4">
              {NAV_LINKS.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)} className="text-left text-foreground font-medium hover:text-primary transition-colors">
                  {link.label}
                </button>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Pesan Sekarang</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
