import ExportedImage from "next-image-export-optimizer";

type MarketingCardImageProps = {
  imgURL: string;
};

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
    <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
      <h2 className="title-font leading-tight sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {title}
      </h2>
      <h3 className="leading-relaxed max-w-xl">{description}</h3>
    </div>
  );
}

function MarketingCardImage({ imgURL }: MarketingCardImageProps) {
  return (
      <a href={imgURL} target="_blank">
        <ExportedImage
          className="object-cover object-center rounded bordered"
          alt="hero"
          src={imgURL}
          width={620}
          height={400}
        />
      </a>
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
      <div className="container mx-auto my-10 flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="mr-8 md:w-1/2 md:mb-0">
          {reverse ? (
            <MarketingCardImage imgURL={imgURL} />
          ) : (
            <MarketingCardText title={title} description={description} />
          )}
        </div>
        <div className="md:w-1/2 w-5/6 md:mb-0">
          {reverse ? (
            <MarketingCardText title={title} description={description} />
          ) : (
            <MarketingCardImage imgURL={imgURL} />
          )}
        </div>
      </div>
    </section>
  );
}
