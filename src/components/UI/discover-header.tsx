"use client"
import React from 'react'
import ImageCard from './image-card'
import { useMediaQuery } from 'usehooks-ts'

type DiscoverHeaderProps = {
    title: string;
    description: string;
    fullImageUrl: string;
    blurHash: string;
}

export default function DiscoverHeader({ title,
    description,
    fullImageUrl,
    blurHash }: DiscoverHeaderProps) {
    const largerThanSm = useMediaQuery('(min-width: 600px)')
    return (
        <header className="relative flex hero-aspect   w-full  items-center justify-center overflow-hidden bg-slate-300 ">
            <div className="absolute left-0 top-0 h-full w-full brightness-75 ">
                {fullImageUrl && (
                    <ImageCard
                        blurHash={blurHash}
                        imageUrl={fullImageUrl}
                    />
                )}
            </div>
            <div className="z-10 flex w-full max-w-[70.5rem] items-center justify-start px-4 *:text-white ">
                <div className="flex h-1/3 w-1/2 flex-col gap-4">
                    <h1 className="  text-2xl font-bold md:text-3xl  lg:text-4xl">
                        {title}
                    </h1>
                    {largerThanSm ? (
                        <p className="text-pretty text-xs md:text-sm lg:text-lg ">
                            {description}
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    )
}
