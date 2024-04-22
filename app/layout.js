import "./globals.css";

import MainNavigation from "@/components/navigation/MainNavigation";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AlertModal from "@/components/AlertModal";
import { Suspense } from "react";

export const metadata = {
  title: "Welcome to Yan's Tile Setting Services",
  description: "Welcome to Yan's Tile Setting Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-w-[320px]">
         <MainNavigation />
        
        {children}
        <Suspense fallback={<div>Loading...</div>}>
          <AlertModal />  
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
