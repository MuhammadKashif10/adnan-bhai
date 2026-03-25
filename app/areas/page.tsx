import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreas } from "@/data/services";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";

export default function AreasPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Our Service Areas in Dubai</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Our junk removal services cover all major areas in Dubai. Call us or WhatsApp for a free estimate!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href="/services"
                className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all text-sm font-medium text-foreground hover:text-primary group"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />
    </>
  );
}

