import Image from "next/image";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "@/components/Icons";
import { getWhatsAppLink, whatsappNumber } from "@/lib/whatsapp";

function Brand() {
  return <Link className="brand" href="/" aria-label="Nana Boateng Auto Parts home"><span className="brand-mark"><Image src="/icon.png" alt="" width={42} height={42} priority /></span><span className="brand-copy"><b>Nana Boateng</b><small>Auto Parts</small></span></Link>;
}

export default function Header() {
  const whatsappLink = getWhatsAppLink();
  return <header className="site-header"><div className="container nav"><Brand /><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/products">Our parts</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></nav><a className="header-contact" href={whatsappLink} target="_blank" rel="noopener noreferrer"><span><PhoneIcon aria-hidden="true" /> Need a part?</span><b>+{whatsappNumber}</b></a><details className="mobile-nav"><summary aria-label="Open navigation"><MenuIcon aria-hidden="true" /> Menu</summary><div><Link href="/">Home</Link><Link href="/products">Our parts</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div></details></div></header>;
}

export { Brand };
