import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Professional junk removal and waste management services across Dubai. We handle everything from furniture
            removal to construction debris cleanup.
            <br />
            From <strong>apartment junk removal</strong> to <strong>commercial trash removal</strong> and{" "}
            <strong>office junk removal dubai</strong>, our team helps you get things cleared quickly and responsibly.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />
    </>
  );
}

