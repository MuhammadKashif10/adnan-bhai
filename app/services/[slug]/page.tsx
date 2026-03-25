"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { services, testimonials } from "@/data/services";
import Image from "next/image";

const Swiper = dynamic(() => import("swiper/react").then((m) => m.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((m) => m.SwiperSlide), { ssr: false });

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-heading text-3xl font-bold">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:underline mt-4 inline-block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const relatedTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
        <div className="container-main">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors mb-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">{service.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="rounded-xl overflow-hidden pb-10"
            >
              {[service.image].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="overflow-hidden group relative w-full h-72 md:h-96">
                    <Image
                      src={img}
                      alt={`${service.title} gallery`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">About This Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.description}
              {service.slug === "furniture-removal" && (
                <>
                  {" "}
                  Need <strong>Furniture disposal near me</strong> or a <strong>Bed removal service</strong>? We also handle{" "}
                  <strong>Junk furniture removal dubai</strong> for homes and offices.
                </>
              )}
              {service.slug === "appliance-disposal" && (
                <>
                  {" "}
                  We provide <strong>Electronics pickup dubai</strong> and an <strong>Appliance removal service</strong> for
                  refrigerators, ACs, washing machines, and more across Dubai.
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.keywords.map((kw) => (
                <span
                  key={kw}
                  className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold hover:bg-primary-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-accent">
        <div className="container-main">
          <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTestimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground mt-3">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

