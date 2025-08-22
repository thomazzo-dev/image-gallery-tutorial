import React from 'react'
import SearchSegment from '@/components/UI/search-segment';

interface SeachPageProps {
    children: React.ReactNode;
    params: {
        keyword?: string;
    };
}


export default async function SearchLayout({ children, params }:SeachPageProps) {
    const { keyword } = await params;
    return (
        < >
            <SearchSegment keyword={`${keyword}`}/>
            <div className="mb-32 flex w-full flex-col items-center justify-start">
                <header className="flex h-20 w-full max-w-[70.5rem] items-center justify-start px-4">
                    <p className="text-lg font-semibold capitalize sm:text-xl md:text-2xl">
                        {keyword}
                    </p>
                </header>
                {children}
            </div>
        </ >
    )
}
