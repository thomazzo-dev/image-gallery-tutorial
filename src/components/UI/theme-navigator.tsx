"use client";

import { Topic } from '@/types/api';
import { scrollToTop } from '@/utils/util-functions';
import Link from 'next/link';
import React from 'react';


type TnProps = {
    topics?: Topic[];
};

export default function ThemeNavigator({ topics }: TnProps) {

    return (
        <div className="sticky top-14 z-30 flex h-14 w-full items-center gap-2 px-3 bg-white shadow-sm">
            <Link href="/" onClick={scrollToTop}>
                <div className="fade-animation group flex items-center justify-center rounded-full border border-base-300 px-3 py-1 hover:bg-neutral">
                    <p className="fade-animation text-nowrap text-sm group-hover:text-white lg:text-base">
                        featured
                    </p>
                </div>
            </Link>
            {topics?.map((topic) => (
                <Link key={topic.id} href={`/discover/${topic.id}`} onClick={scrollToTop}>
                    <div className="fade-animation group flex items-center justify-center rounded-full border border-base-300 px-3 py-1 hover:bg-neutral">
                        <p className="fade-animation text-nowrap text-sm group-hover:text-white lg:text-base">
                            {topic.title}
                        </p>
                    </div>
                </Link>
            ))}


        </div>
    )
}



