import { getWhatsAppLink } from "@/lib/whatsapp";
import { FacebookIcon, WhatsAppIcon } from "@/components/Icons";

export default function ShareActions({ title, url }) {
  const encodedUrl = encodeURIComponent(url);
  return <div className="share-actions" aria-label="Share this product"><span>Share this part</span><a href={getWhatsAppLink(`Hello, take a look at this sample product: ${title}\n${url}`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon aria-hidden="true" /> WhatsApp</a><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer"><FacebookIcon aria-hidden="true" /> Facebook</a></div>;
}
