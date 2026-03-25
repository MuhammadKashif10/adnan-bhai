import ContactForm from "@/components/ContactForm";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL } from "@/data/services";

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch for a free quote. We respond within 30 minutes during business hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: PHONE_NUMBER, href: `tel:${PHONE_TEL}` },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP_URL },
                { icon: Mail, label: "Email", value: "info@dubaijunkremoval.com", href: "mailto:info@dubaijunkremoval.com" },
                { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates" },
                { icon: Clock, label: "Hours", value: "Saturday – Thursday: 7 AM – 9 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

