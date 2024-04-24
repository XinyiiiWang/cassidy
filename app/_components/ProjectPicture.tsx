import Image from "next/image";
import React from "react";
import CircularImageGalleryStyle from './CircularImageGallery.module.css';

type ProjectPictureProps = {
  imageName: string;
  alt: string;
};

export default function ProjectPicture({ imageName, alt }: ProjectPictureProps) {
  return (
    <div className={CircularImageGalleryStyle.imageContainer}>
      <Image
        src={`cassidyportfolio/project/${imageName}`}
        alt={alt}
        width={150}
        height={90}
      />
    </div>
  );
}