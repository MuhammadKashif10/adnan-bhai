import { Clock, Recycle, DollarSign, Shield } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Same-Day Service", desc: "Book today, we pick up today. Fast junk removal when you need it most." },
  { icon: Recycle, title: "Eco-Friendly Disposal", desc: "We recycle and donate whenever possible. Responsible waste management in Dubai." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent, competitive rates. No hidden fees for our garbage removal service." },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed waste removal services you can trust across Dubai." },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container-main">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-3">
        Why Choose Our Junk Removal Dubai Service?
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Trusted by thousands of residents and businesses for professional waste collection and garbage removal in Dubai.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
