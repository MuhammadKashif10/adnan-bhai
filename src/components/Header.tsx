/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/data/services";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/areas", label: "Our Areas" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur shadow-sm">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-heading font-bold text-xl md:text-2xl text-secondary">
          <span className="text-primary">Dubai</span> Junk Removal
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`font-heading text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t animate-fade-in">
          <nav className="container-main py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-base font-medium py-2 ${
                  pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex-1 text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg font-heading font-semibold text-sm"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-lg font-heading font-semibold text-sm"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
