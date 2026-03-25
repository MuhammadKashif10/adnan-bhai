import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL, serviceAreas } from "@/data/services";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-main py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-bold text-xl mb-4">
            <span className="text-primary">Dubai</span> Junk Removal
          </h3>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Dubai's trusted junk removal and waste management service. Fast, affordable, and eco-friendly garbage removal across all areas of Dubai.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/areas", label: "Service Areas" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link href={link.to} className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-primary transition-colors">
                {PHONE_NUMBER}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>junkpickupdubai10@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Dubai, United Arab Emirates</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Service Areas</h4>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            {serviceAreas.slice(0, 12).join(" • ")} and{" "}
            <Link href="/areas" className="text-primary hover:underline">more areas →</Link>
          </p>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-sm text-secondary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Dubai Junk Removal. All rights reserved. | Junk Removal Dubai | Waste Management in Dubai</p>
      </div>
    </div>
  </footer>
);

export default Footer;
