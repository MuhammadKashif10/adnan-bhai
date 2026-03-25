/* eslint-disable react/no-unknown-property */
"use client";

import dynamic from "next/dynamic";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/data/services";
import junkHero from "@/assets/hero-junk-provided.png";

const Swiper = dynamic(() => import("swiper/react").then((m) => m.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((m) => m.SwiperSlide), { ssr: false });

// Use the provided image across hero slides (fade effect preserved).
const slides = [junkHero, junkHero, junkHero];

const HeroSection = () => (
  <section className="relative h-[85vh] min-h-[500px] max-h-[800px]">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="absolute inset-0 w-full h-full"
    >
      {slides.map((src, i) => (
        <SwiperSlide key={i} className="h-full">
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Junk removal service in Dubai - slide ${i + 1}`}
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Dark overlay over the hero background */}
    <div className="absolute inset-0 bg-black/55 z-10" />

    <div className="absolute inset-0 z-20 flex items-center">
      <div className="container-main">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-4">
            #1 Junk Removal Service in Dubai
          </h1>
          <p className="text-secondary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
            Professional garbage removal, waste collection, and junk hauling across all areas of Dubai. Fast, affordable, and eco-friendly waste management service.
            <br />
            Need <strong>junk pickup dubai</strong> or <strong>junk haul away</strong>? We provide <strong>rubbish removal service</strong> and{" "}
            <strong>trash removal service</strong> with a reliable <strong>garbage collection service</strong> for <strong>waste removal dubai</strong> and{" "}
            <strong>waste collection dubai</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:bg-primary-dark transition-colors"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground text-secondary-foreground px-6 py-3 rounded-lg font-heading font-bold text-base hover:bg-secondary-foreground/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
