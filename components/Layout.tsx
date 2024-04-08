import type { Metadata } from "next";
import Image from 'next/image';
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute top-0 left-0 z-[-1] h-full w-full">
            <Image
              src="/cassidy/background.png"
              alt="Background Image"
              fill
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
          <Sidebar />
          <div className="relative z-10 flex h-screen items-center justify-center">
            {children}
          </div>
        </div>
      );
}