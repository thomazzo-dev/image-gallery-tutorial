import React from "react";
import ImageCard from "./image-card";

type ThumbNailProps = {
  sourceOne: string;
  sourceTwo?: string;
  sourceThree?: string;
};

const ThumbNail: React.FC<ThumbNailProps> = ({
  sourceOne,
  sourceTwo,
  sourceThree,
}) => {
  return (
    <section className="group-hover:brightness-75 fade-animation grid grid-cols-7 grid-rows-2 gap-x-[1px] gap-y-[1px] w-full aspect-[3/2] rounded-xl overflow-hidden *:rounded-none">
      <div className="flex justify-center items-center col-span-5 row-span-2 bg-slate-400">
        <ImageCard imageUrl={sourceOne} skeleton={true} />
      </div>
      <div className="flex justify-center items-center col-span-2 row-span-1 bg-slate-400">
        {sourceTwo ? (
          <ImageCard imageUrl={sourceTwo} skeleton={true} />
        ) : (
          <svg
            width="36"
            height="36"
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
      </div>
      <div className="flex justify-center items-center col-span-2 row-span-1 bg-slate-400">
        {sourceThree ? (
          <ImageCard imageUrl={sourceThree} skeleton={true} />
        ) : (
          <svg
            width="36"
            height="36"
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
      </div>
    </section>
  );
};

export default ThumbNail;