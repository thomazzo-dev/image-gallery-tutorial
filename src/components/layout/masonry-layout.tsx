"use client";
import MasonryContainer from "../UI/masonry-container"
import { getAspectRatio } from "@/utils/util-functions";
import ImageCard from "../UI/image-card"



export default function MasonryLayout({ masonryItems }: { masonryItems: any[] }) {
  return (
    <MasonryContainer>
      {masonryItems.map((photo, index) => (
        <div
          className="masonry-item"
          key={photo.id}
          style={{
            aspectRatio: getAspectRatio(photo.width, photo.height),
          }}>
          <ImageCard key={index} imageUrl={photo.urls.regular}
            blurHash={photo.blur_hash} />
        </div>

      ))}
    </MasonryContainer>
  )
}
