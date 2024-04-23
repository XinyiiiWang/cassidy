import type { Metadata } from "next";
import Image from 'next/image';
import "./globals.css";
import Sidebar from "@/app/_components/Sidebar";
import backgroundImg from "@/public/background.png";
import ProjectPicture from '@/app/_components/ProjectPicture';


export const metadata: Metadata = {
  title: "2wei",
  description: "Welcome to 2wei's portfolio.",
};

// Import the image file names
const imageNames = ['11.png'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 z-10 h-screen w-1/4">
          <Sidebar />
        </div>
        <div className="absolute top-0 left-1/4 z-20 flex h-screen items-center justify-center w-3/4">
          {imageNames.map((imageName, index) => (
            <ProjectPicture
              key={index}
              imageName={imageName}
              alt={`Image ${index + 1}`}
            />
          ))}
          {children}
        </div>
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
      </div>
    </html>
  );
}
