import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Petlelo",
  description: "World Best Pet Services",
  icons: "/logo/petlelo1.jpg", // ✅ Correct favicon path
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Manually add the favicon */}
        <link rel="icon" href="/logo/petlelo1.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/petlelo1.jpg" />
      </head>
      <body className="body">
        <Navbar />
        {children}
        <Footer />
        <div className="fixed bottom-24 right-5 z-50 p-4">
          <a href="tel:+919220779891" aria-label="Call Us">
            <IoCall size={44} className="text-blue-500 hover:text-blue-600" />
          </a>
        </div>
        <div className="fixed bottom-5 right-5 z-50 bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors">
          <a
            href="https://wa.me/+919220779891"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp size={40} />
            <span className="sr-only">Chat with us on WhatsApp</span>
          </a>
        </div>
      </body>
    </html>
  );
}

