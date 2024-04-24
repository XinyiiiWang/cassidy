import React from "react";
import ProjectPicture from "./ProjectPicture";
import CircularImageGalleryStyle from './CircularImageGallery.module.css';

type CircularImageGalleryProps = {
    images: { name: string; alt: string }[];
  };

export function CircularImageGallery({ images }: CircularImageGalleryProps) {
    return (
      <div className={CircularImageGalleryStyle.circle}>
        {images.map((img, index) => (
          <ProjectPicture key={index} imageName={img.name} alt={img.alt} />
        ))}
      </div>
    );
  }