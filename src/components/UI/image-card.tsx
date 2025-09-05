"use client";

import React, {  useEffect, useRef,useState } from "react";
import { Blurhash } from "react-blurhash";

type ImageCardProps = {
  blurHash?: string;
  imageUrl?: string;
  skeleton?: boolean;
};

 


const ImageCard: React.FC<ImageCardProps> = ({
  blurHash,
  imageUrl,
  skeleton,
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 1. 컴포넌트가 마운트된 후에 이 코드가 실행됩니다.
    // 2. imgRef.current를 통해 실제 DOM 요소에 접근합니다.
    const currentImg = imgRef.current;

    // 3. 이미지가 이미 로드되었는지 확인합니다.
    // complete 속성은 브라우저가 이미지를 완전히 다운로드했는지 여부를 알려줍니다.
    if (currentImg && currentImg.complete) {
      setIsImageLoading(false);
      console.log('Image from cache, so immediately loaded.');
    } else if (currentImg) {
      // 4. 이미 로드되지 않았다면, 'onload' 이벤트 리스너를 추가합니다.
      // 이 리스너는 이미지가 로딩을 완료했을 때 실행됩니다.
      currentImg.onload = () => {
        setIsImageLoading(false);
        console.log('Image finished loading from network.');
      };
    }

    // 5. 클린업(cleanup) 함수: 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      if (currentImg) {
        currentImg.onload = null;
      }
    };
  }, [imageUrl]); // imageUrl이 변경될 때마다 useEffect를 다시 실행합니다.


  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          ref={imgRef}
          alt="image"
          style={{
            width: `${isImageLoading ? 0 : "100%"}`,
            height: `${isImageLoading ? 0 : "100%"}`,
            objectFit: "cover",
          }}
        />
      ) : (
        <svg
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm.58 16.401-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686L18.33 19.4ZM17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75Zm-2.498 2a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z"
            fill="#ffffff"
          />
        </svg>
      )}
      {isImageLoading && blurHash && (
        <Blurhash hash={blurHash} width={"100%"} height={"100%"} punch={1} />
      )}
      {isImageLoading && skeleton && (
        <div className="skeleton h-full w-full rounded-none bg-base-200"></div>
      )}
    </>
  );
};
export default ImageCard;