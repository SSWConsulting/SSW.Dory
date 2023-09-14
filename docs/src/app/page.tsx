import Image from "next/image";
import MarketingCard from "./marketingCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="bggrey w-full h-24 p-4 flex justify-center">
        <Image
          src="/sswdory-logo.png"
          alt="SSW Dory Logo"
          width={300}
          height={40}
          priority
        />
      </nav>
      <div className="container mx-auto">
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font leading-tight sm:text-4xl text-3xl mb-10 font-medium text-gray-900">
                Check out our Github
              </h1>
            </div>
            <a href="https://github.com/SSWConsulting/SSW.Dory" target="_blank">
              <Image
                src="/github-mark.svg"
                alt="Invertocat Logo"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </section>

        <MarketingCard
          title="Powered by Microsoft Power Automate"
          description="A low-code solution for easy set-up"
          imgURL="/dory-architecture-diagram.svg"
        ></MarketingCard>
      </div>
    </main>
  );
}
