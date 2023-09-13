import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Image
          src="/sswdory-logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </nav>
    </main>
  );
}
