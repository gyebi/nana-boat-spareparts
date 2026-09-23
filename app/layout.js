import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { baseMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><WhatsAppButton /></body></html>;
}
