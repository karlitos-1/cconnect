import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceAssistant from "@/components/VoiceAssistant";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C-CONNECT",
  description:
    "C-CONNECT, expert en solutions techniques à Pointe-Noire, Congo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <VoiceAssistant />
        <Analytics />
      </body>
    </html>
  );
}
