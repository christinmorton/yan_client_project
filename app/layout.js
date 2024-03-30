import "./globals.css";

import MainNavigation from "@/components/navigation/MainNavigation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AlertModal from "@/components/AlertModal";


export const metadata = {
  title: "Welcome to Yan's Tile Setting Services",
  description: "Welcome to Yan's Tile Setting Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <MainNavigation />
        {children}
        <AlertModal />
        <Footer />
      </body>
    </html>
  );
}
