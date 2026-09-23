import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsAppButton() {
  return <a className="floating-contact" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nana Boateng Auto Parts on WhatsApp"><WhatsAppIcon aria-hidden="true" /></a>;
}
