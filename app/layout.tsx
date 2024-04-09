import type { Metadata } from "next";
import Image from 'next/image';
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "2wei",
  description: "Welcome to 2wei's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Layout>{children}</Layout>
    </html>
  );
}
