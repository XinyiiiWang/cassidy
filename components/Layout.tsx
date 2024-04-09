import type { Metadata } from "next";
import Image from 'next/image';
import Sidebar from "@/components/Sidebar";
import backgroundImg from "@/public/background.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute top-0 left-0 z-[-1] h-full w-full">
            <Image
              src={backgroundImg}
              alt="Background Image"
              fill
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
          <div className="ml-4 md:ml-8 lg:ml-16">
            <Sidebar />
          </div>
          <div className="relative z-10 flex h-screen items-center justify-center">
            {children}
          </div>
        </div>
      );
}
