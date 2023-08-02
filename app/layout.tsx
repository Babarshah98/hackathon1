import "./globals.css";
import { Maven_Pro } from "next/font/google";

const inter = Maven_Pro({ subsets: ["latin"],
weight:['400','500','600','700'] });

import Navbar from "../app/components/Navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-16">
        {children}
        </main>
      </body>
    </html>
  );
}