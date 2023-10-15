import ExportedImage from "next-image-export-optimizer";

type MarketingCardTextProps = {
  title: string;
  description: string;
};

type MarketingCardProps = {
  title: string;
  description: string;
  imgURL: string;
  reverse?: boolean;
};

function MarketingCardText({ title, description }: MarketingCardTextProps) {
  return (
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h2 className="title-font leading-tight sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {title}
      </h2>
      <h3 className="mb-8 leading-relaxed max-w-xl">{description}</h3>
    </div>
  );
}

export default function MarketingCard({
  title,
  description,
  imgURL,
  reverse,
}: MarketingCardProps) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {!reverse && (
          <MarketingCardText title={title} description={description} />
        )}
        <div className="md:w-1/2 w-5/6 mb-10 md:mb-0">
          <a href={imgURL} target="_blank">
            <ExportedImage
              className="object-cover object-center rounded bordered"
              alt="hero"
              src={imgURL}
              width={620}
              height={400}
            />
          </a>
        </div>
        {reverse && (
          <MarketingCardText title={title} description={description} />
        )}
      </div>
    </section>
  );
}
