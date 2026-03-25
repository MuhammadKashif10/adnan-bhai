/* eslint-disable react/no-unknown-property */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { testimonials } from "@/data/services";

export default function TestimonialSliderImpl() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-main">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-10">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-card rounded-xl p-6 shadow-md h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground mt-4">— {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

