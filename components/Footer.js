import Link from "next/link";
import { Brand } from "@/components/Header";

export default function Footer() {
  return <footer><div className="container footer-content"><Brand /><div className="footer-links"><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div><p>© {new Date().getFullYear()} Nana Boateng Auto Parts · IS ME Enterprise</p></div></footer>;
}
