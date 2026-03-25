import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/data/services";

const StickyButtons = () => (
  <>
    {/* Mobile: Call button on the left */}
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>

    {/* Mobile: WhatsApp button on the right */}
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  </>
);

export default StickyButtons;
