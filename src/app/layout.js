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

export const metadata = {
  title: "Steth MBBS Overseas | Trusted Abroad Medical Consultants",
  description: "Secure your MBBS admission in Russia, Uzbekistan, Georgia & Armenia with Steth MBBS Overseas. 100% Visa success and NMC approved universities.",
  keywords: ["MBBS abroad", "Study MBBS in Russia", "Medical consultancy India", "Steth MBBS", "MBBS Overseas", "MBBS in Kyrgyzstan", "MBBS in Uzbekistan", "MBBS in Georgia", "MBBS in Armenia"],

  openGraph: {
    title: "Steth MBBS Overseas",
    description: "Your gateway to global medical education.",
    url: 'https://stetheducation.com',
    siteName: 'Steth MBBS Overseas',
    images: [
      {
        url: "/logo without text.PNG", // Make sure this is in your /public folder
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/icon.PNG', // This points to public/icon.png if you put it there
    apple: '/icon.PNG', // For iPhones
  },
};

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
