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
            From furniture removal to construction debris cleanup — our waste removal services cover every type of junk
            collection in Dubai.
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
              Looking for reliable <strong>junk removal near me</strong>? Our comprehensive{" "}
              <strong>garbage removal service</strong> covers all of Dubai. Whether you need{" "}
              <strong>dubai waste collection</strong>, <strong>waste management in Dubai</strong>, or complete{" "}
              <strong>junk removal dubai</strong> solutions, we're here to help. Our team specializes in{" "}
              <strong>collecting garbage</strong>, <strong>removal junk services</strong> and all types of{" "}
              <strong>waste removal services</strong>. We <strong>collect junk</strong> from homes, offices, and{" "}
              construction sites across every area in Dubai. Contact us today for fast, affordable{" "}
              <strong>garbage removal dubai</strong> service.
              <br />
              When you need <strong>Get rid of my junk</strong>, <strong>Remove my junk</strong>, or <strong>Take my junk</strong>, choose{" "}
              <strong>Junk removals dubai</strong> for a fast <strong>Junk clean up</strong>.
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

