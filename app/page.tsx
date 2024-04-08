import Image from "next/image";

export default function Home() {
  return (
    <main className="background-image">
        <Image
          src="/cassidy/background.png"
          alt="Background Image"
          width={1180}
          height={370}
          priority
        />
    </main>
  );
}
