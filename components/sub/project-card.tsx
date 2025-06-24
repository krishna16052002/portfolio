import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col w-full max-w-[400px] min-h-[420px] bg-[#0a0127]">
      <div className="w-full aspect-[16/9] overflow-hidden bg-black flex-shrink-0">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative p-4 flex flex-col flex-1">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 line-clamp-3 overflow-hidden min-h-[72px]">{description}</p>
      </div>
    </div>
  );
};
