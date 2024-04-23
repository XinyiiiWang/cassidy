import Image, { StaticImageData } from "next/image";

type ProjectPictureProps = {
  imageName: string;
  alt: string;
};

export default function ProjectPicture({ imageName, alt }: ProjectPictureProps) {
  const imagePath: string = `../assets/project/${imageName}`;

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={150}
      height={90}
    />
  );
}