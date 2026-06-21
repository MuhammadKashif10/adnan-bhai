import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import { PHONE_TEL, WHATSAPP_URL, services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-3">
            Our Junk Removal Services in Dubai
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            From <strong>furniture removal Dubai</strong> and <strong>appliance disposal Dubai</strong> to{" "}
            <strong>garden waste removal Dubai</strong> and construction debris cleanup — our{" "}
            <strong>same day junk removal Dubai</strong> team handles every type of{" "}
            <strong>junk pickup Dubai</strong> and <strong>junk collection Dubai</strong> job, big or small.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialSlider />
      <ContactForm />

      {/* CTA section */}
      <section className="section-padding bg-muted">
        <div className="container-main max-w-4xl text-center">
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-md border border-border">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Dubai's Most Trusted Waste Management Service
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Searching for <strong>junk removal near me</strong> or the best{" "}
              <strong>junk removal Dubai</strong> has to offer? As a leading{" "}
              <strong>Dubai junk removal</strong> company, our reliable{" "}
              <strong>junk removal service Dubai</strong> covers every neighbourhood. Whether you need{" "}
              <strong>junk pickup Dubai</strong>, <strong>junk collection Dubai</strong>,{" "}
              <strong>general junk collection Dubai</strong>, or <strong>same day junk removal Dubai</strong>, our
              team is ready to help. We handle <strong>garbage removal Dubai</strong>,{" "}
              <strong>garbage collection Dubai</strong>, <strong>waste collection Dubai</strong> and professional{" "}
              <strong>junk hauling Dubai</strong> for homes, offices, and construction sites.
              <br />
              Our <strong>junk removal services Dubai</strong> also include{" "}
              <strong>furniture removal Dubai</strong>, <strong>appliance disposal Dubai</strong>,{" "}
              <strong>garden waste removal Dubai</strong>, <strong>garden waste removal</strong> and{" "}
              <strong>office clearance Dubai</strong>. When you just want to{" "}
              <strong>take my junk Dubai</strong>, <strong>remove my junk Dubai</strong>, or need a fast{" "}
              <strong>junk clean up Dubai</strong>, contact us today for affordable,{" "}
              <strong>junk removal services Dubai</strong> you can trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:bg-primary-dark transition-colors"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:opacity-90 transition-opacity"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dubai Junk Removal",
            description: "Professional junk removal and waste management service in Dubai",
            url: "https://dubaijunkremoval.com",
            telephone: PHONE_TEL,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            areaServed: "Dubai",
            serviceType: ["Junk Removal", "Waste Management", "Garbage Collection"],
          }),
        }}
      />
    </>
  );
}

