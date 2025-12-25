import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceAssistant from "@/components/VoiceAssistant";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C-CONNECT - Solutions Techniques, Réseaux et Sécurité",
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
      </body>
    </html>
  );
}
