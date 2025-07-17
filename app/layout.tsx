import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Notification from "@/components/layout/Notification";

const outfit = Outfit({
  style: "normal",
});


export const metadata: Metadata = {
  title: "MeetOs",
  description: "App for create any meets in only one place", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} `}
      >
        {children}
        <Notification />
      </body>
    </html>
  );
}
