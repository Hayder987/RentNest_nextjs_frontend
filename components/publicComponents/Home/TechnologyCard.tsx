import Image, { StaticImageData } from "next/image";

interface TechnologyCardProps {
  name: string;
  logo: StaticImageData;
}

const TechnologyCard = ({
  name,
  logo,
}: TechnologyCardProps) => {
  return (
    <div className="group mx-3 flex h-28 w-52 items-center justify-center rounded-3xl border bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <Image
        src={logo}
        alt={name}
        className="h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
      />
    </div>
  );
};

export default TechnologyCard;