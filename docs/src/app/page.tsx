import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="bggrey w-full h-24 p-4 flex justify-center">
        <Image
          src="/sswdory-logo.png"
          alt="Next.js Logo"
          width={300}
          height={40}
          priority
        />
      </nav>
    </main>
  );
}
