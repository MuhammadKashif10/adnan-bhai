import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";

const ServiceCard = ({ service }: { service: Service }) => (
  <Link
    href={`/services/${service.slug}`}
    className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="overflow-hidden h-52 relative">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDesc}</p>
      <span className="inline-block mt-3 text-primary font-heading font-semibold text-sm group-hover:underline">
        Learn More →
      </span>
    </div>
  </Link>
);

export default ServiceCard;
