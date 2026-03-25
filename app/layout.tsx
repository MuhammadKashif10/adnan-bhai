import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import Providers from "./providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Junk Removal Dubai",
  description: "Professional junk removal and waste management services in Dubai.",
  alternates: {
    canonical: "https://dubaijunkremoval.com",
  },
  icons: {
    icon: "/placeholder.svg",
    shortcut: "/placeholder.svg",
    apple: "/placeholder.svg",
  },
  openGraph: {
    title: "Junk Removal Dubai",
    description: "Professional junk removal and waste management services in Dubai.",
    type: "website",
    url: "https://dubaijunkremoval.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Dubai",
    description: "Professional junk removal and waste management services in Dubai.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyButtons />
          </div>
        </Providers>
      </body>
    </html>
  );
}

