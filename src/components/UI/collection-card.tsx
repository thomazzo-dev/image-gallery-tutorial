"use client";

import ThumbNail from "./thumb-nail";
import React from 'react'



type CollectionProps = {
    title: string;
    collectionSize: number;
    user: string;
    sourceOne: string;
    sourceTwo: string;
    sourceThree: string;
};


export default function CollectionCard({ title, collectionSize, user, sourceOne, sourceTwo, sourceThree }: CollectionProps) {
    return (
        <section className="flex flex-col justify-start gap-2 items-center w-full  aspect-square  group  ">
            <ThumbNail
                sourceOne={sourceOne}
                sourceTwo={sourceTwo}
                sourceThree={sourceThree}
            />
            <section className="w-full flex flex-col justify-start items-start gap-3 overflow-hidden">
                <h1 className="font-semibold capitalize text-nowrap text-clip text-neutral text-xl">
                    {title}
                </h1>

                <section className="flex justify-start items-center gap-2 text-base-content *:text-sm capitalize">
                    <p>{collectionSize}</p>
                    <p>Photos</p>
                    <p className="text-xs"> &bull;</p>
                    <p>Curated by</p>
                    <p className="text-[8px] text-clip	">{user}</p>
                </section>

            </section>
        </section> 
  )
}
