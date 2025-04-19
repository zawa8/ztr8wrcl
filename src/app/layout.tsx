import type { Metadata } from "next";
import "./globals.css";
import { hindienglosoftw8asc } from "@/components/lifonts/localfonts";
//import 
export const metadata: Metadata = {
  title: "zawa8",
  description: "transliterates phonetical languages",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${hindienglosoftw8asc.className} min-h-screen bg-background antialiased`}> {children} </body>
    </html>
  );
}
