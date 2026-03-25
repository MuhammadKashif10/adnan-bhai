import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/hero-1.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container-main text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Dubai's leading junk removal and waste management company since 2015.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2015, Dubai Junk Removal started with a single truck and a mission to provide fast, affordable,
              and eco-friendly junk removal in Dubai. Today, we're one of the most trusted waste management services in
              the UAE, serving thousands of residential and commercial clients every year.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team of trained professionals handles everything from furniture removal to construction debris
              cleanup. We believe in responsible waste management in Dubai — recycling and donating items whenever
              possible to minimize landfill impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a single item picked up or a complete property clearance, our garbage removal service is
              designed to make junk removal dubai hassle-free for you.
              <br />
              Need <strong>Garden waste removal dubai</strong>? We can handle branches, leaves, and green waste responsibly.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative h-80">
            <Image
              src={hero1}
              alt="Our junk removal team in Dubai"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ahmed Hassan", role: "Founder & CEO" },
              { name: "Sarah Al-Maktoum", role: "Operations Manager" },
              { name: "Mohammed Khan", role: "Fleet Supervisor" },
              { name: "Priya Sharma", role: "Customer Relations" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-2xl text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <ContactForm />
    </>
  );
}

