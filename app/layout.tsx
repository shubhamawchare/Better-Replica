import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export const metadata = {
  title: "Better.com Replica",
  description: "A simplified, modern replica of Better.com with mortgage calculator, start flow, and about page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
