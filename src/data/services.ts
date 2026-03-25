import type { StaticImageData } from "next/image";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceAppliances from "@/assets/service-appliances.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceGeneral from "@/assets/service-general.jpg";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  image: StaticImageData;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Furniture Removal",
    slug: "furniture-removal",
    shortDesc: "Old sofas, beds, tables, chairs — we haul away any unwanted furniture quickly and responsibly.",
    description: "Need to get rid of bulky furniture in Dubai? Our professional furniture removal service handles sofas, beds, wardrobes, tables, chairs, and more. We provide same-day junk removal for residential and commercial properties across Dubai. Our team ensures eco-friendly disposal and recycling whenever possible.",
    image: serviceFurniture,
    keywords: ["furniture removal dubai", "old furniture disposal", "junk removal service"],
  },
  {
    id: "2",
    title: "Appliance Disposal",
    slug: "appliance-disposal",
    shortDesc: "Safe removal and disposal of old washing machines, fridges, ACs, and all household appliances.",
    description: "Getting rid of old appliances? Our appliance disposal service in Dubai handles refrigerators, washing machines, dryers, air conditioners, microwaves, and all other household or commercial appliances. We ensure environmentally responsible disposal and recycling of electronic waste.",
    image: serviceAppliances,
    keywords: ["appliance disposal dubai", "e-waste removal", "garbage removal service"],
  },
  {
    id: "3",
    title: "Construction Debris Removal",
    slug: "construction-debris-removal",
    shortDesc: "Post-renovation cleanup — rubble, concrete, tiles, and construction waste cleared fast.",
    description: "After renovation or construction, let us handle the debris. Our construction waste removal service in Dubai clears rubble, concrete, tiles, wood, drywall, and all construction materials. We provide skip bins and full-service cleanup for residential and commercial renovation projects.",
    image: serviceConstruction,
    keywords: ["construction debris removal", "waste removal services", "dubai waste collection"],
  },
  {
    id: "4",
    title: "Office Clearance",
    slug: "office-clearance",
    shortDesc: "Complete office furniture and equipment removal for relocations, closures, or upgrades.",
    description: "Moving offices or closing down? Our office clearance service in Dubai handles desks, chairs, filing cabinets, IT equipment, and all office furniture. We offer flexible scheduling to minimize disruption to your business operations, including weekend and after-hours service.",
    image: serviceOffice,
    keywords: ["office clearance dubai", "commercial junk removal", "waste management service"],
  },
  {
    id: "5",
    title: "Garden Waste Removal",
    slug: "garden-waste-removal",
    shortDesc: "Tree branches, leaves, soil, and green waste collected and disposed of properly.",
    description: "Keep your outdoor spaces clean with our garden waste removal service in Dubai. We collect and dispose of tree branches, leaves, grass clippings, soil, plant pots, and all types of green waste. Perfect for post-landscaping cleanup or regular garden maintenance.",
    image: serviceGarden,
    keywords: ["garden waste removal", "green waste disposal", "collecting garbage"],
  },
  {
    id: "6",
    title: "General Junk Collection",
    slug: "general-junk-collection",
    shortDesc: "All-purpose junk removal — from garage cleanouts to full property clearances.",
    description: "Our general junk collection service in Dubai is your all-in-one solution for removing unwanted items. From garage cleanouts to estate clearances, we handle household junk, boxes, bags, and miscellaneous items. Fast, affordable, and reliable junk removal near you.",
    image: serviceGeneral,
    keywords: ["junk removal near me", "collect junk", "removal junk services"],
  },
];

export const serviceAreas = [
  "Dubai Hills", "Al Barsha South", "JLT", "Discovery Garden", "Emirates Hills",
  "Marina Dubai", "Palm Jumeirah", "Jumeirah 2", "Jumeirah Beach", "Internet City",
  "Jebel Ali Freezone", "Al Furjan", "Dubai Investment Park", "Dubai Investment City",
  "Sports City", "Motor City", "JVC", "Arabian Ranches 1", "Arabian Ranches 2",
  "Arabian Ranches 3", "Town Square", "Damac Hills", "Damac Hills 2", "Remraam",
  "Nad Al Sheba", "Jumeirah Village Circle", "The Springs", "The Meadows",
  "Jumeirah Park", "Dubai South Logistics District", "Dubai South Residential District",
  "Jumeirah Golf Estates", "Mudon", "Dubai Land Residence Complex", "Ras Al Khor",
  "Dubai Creek Harbour", "Al Mizhar", "Business Bay", "Downtown Dubai",
];

export const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    text: "Excellent junk removal service! They cleared our entire apartment in under 2 hours. Very professional and affordable. Highly recommend for anyone in Dubai.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    text: "Used their furniture removal service when moving. The team was punctual, careful, and took everything away without a hassle. Best waste management service in Dubai!",
    rating: 5,
  },
  {
    name: "Raj Patel",
    text: "Called them for construction debris removal after our villa renovation. They brought the right equipment and left the place spotless. Great garbage removal service.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    text: "Reliable and efficient garden waste removal. They come on time every week and keep our compound clean. The best junk removal near me I've found in Dubai.",
    rating: 4,
  },
  {
    name: "James Wilson",
    text: "Our office clearance was handled perfectly. They worked over the weekend so we could start fresh on Monday. Professional waste removal services all around.",
    rating: 5,
  },
];

// Display number (used in UI); normalize to E.164 for tel: / wa.me links.
export const PHONE_NUMBER = "056 725 6386";
export const PHONE_TEL = "+971567256386";

// WhatsApp deep link (wa.me expects country code without '+', no spaces).
export const WHATSAPP_URL = "https://wa.me/971567256386";
