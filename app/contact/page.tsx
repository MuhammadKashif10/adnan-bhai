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
                { icon: Mail, label: "Email", value: "junkpickupdubai10@gmail.com", href: "mailto:junkpickupdubai10@gmail.com" },
                { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates" },
                { icon: Clock, label: "Hours", value: "Monday to Sunday : 07:00 AM to 11:00 PM" },
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

          <div className="bg-accent rounded-2xl p-8 md:p-10 flex flex-col justify-center text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Ready to Book? Get a Free Quote
            </h2>
            <p className="text-muted-foreground mb-8">
              Call us or message us on WhatsApp and we&apos;ll respond within 30 minutes during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:bg-primary-dark transition-colors"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

