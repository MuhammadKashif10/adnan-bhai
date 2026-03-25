import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(() => import("./TestimonialSliderImpl").then((m) => m.default), {
  ssr: false,
});

export default TestimonialSlider;
