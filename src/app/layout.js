import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Configure the Body Font


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Steth MBBS Overseas | Trusted Abroad Medical Consultants",
//   description: "Secure your MBBS admission in Russia, Uzbekistan, Georgia & Egypt with Steth MBBS Overseas. 100% Visa success and NMC approved universities.",
//   keywords: ["MBBS abroad", "Study MBBS in Russia", "Medical consultancy India", "Steth MBBS"],
//   openGraph: {
//     title: "Steth MBBS Overseas",
//     description: "Your gateway to global medical excellence.",
//     images: ["/og-image.jpg"], // Create a nice preview image for WhatsApp/Facebook sharing
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <WhatsAppButton/>
        <Footer />
        </body>

    </html>
  );
}
