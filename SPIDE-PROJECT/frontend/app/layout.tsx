import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageAutoTranslator from "@/components/LanguageAutoTranslator";

const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-eb-garamond",
  display: "swap"
});

export const metadata: Metadata = {
  title: "CivicFlow | Smart Municipal Portal",
  description: "Your gateway to transparent governance and high-efficiency e-services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ebGaramond.variable}`}>
        <LanguageProvider>
          <LanguageAutoTranslator />
          <div className="min-h-screen flex flex-col pb-20 md:pb-0">
            {children}
          </div>
          <MobileNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
