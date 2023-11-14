import ExportedImage from "next-image-export-optimizer";
import MarketingCard from "./marketingCard";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="bggrey w-full h-24 p-4 flex justify-center">
        <div className="w-full">
          <ExportedImage
            src="/sswdory-logo.png"
            alt="SSW Dory Logo"
            width={300}
            height={40}
            priority
          />
        </div>
      </nav>
      <div className="container mx-auto">
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font leading-tight sm:text-5xl text-4xl mb-10 font-semibold text-gray-900">
                Check out our Github
              </h1>
            </div>
            <a href="https://github.com/SSWConsulting/SSW.Dory" target="_blank">
              <ExportedImage
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
          title="Discover checked-out SharePoint pages"
          description="Connect SSW Dory to your SharePoint site and find any pages that have been left checked-out."
          imgURL="/old-sharepoint.png"
        />

        <MarketingCard
          title="Identify unmerged GitHub pull requests"
          description="SSW Dory uses the GitHub API to scan for any Pull Requests in your GitHub repositories that have been open for longer than a certain period of time e.g., one day."
          imgURL="/old-github.png"
          reverse={true}
        />

        <MarketingCard
          title="Automatically send out reminder emails"
          description="SSW Dory will send out emails to the relevent people who have left a SharePoint page checked-out or a GitHub PR open for too long."
          imgURL="/email-github.png"
        />

        <MarketingCard
          title="Monitor your company's workload"
          description="A dedicated SharePoint site can be set up for SSW Dory to write to. Access this site for a consolidated view of how each employee is tracking."
          imgURL="/sharepoint-list.png"
          reverse={true}
        />

        <MarketingCard
          title="Powered by Microsoft Power Automate"
          description="A low-code solution for easy set-up and configuration."
          imgURL="/dory-architecture-diagram.webp"
        />
      </div>
      <Footer />
    </main>
  );
}
