"use client";
import React from 'react'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1
};


export default function MasonryContainer({ children }: { children: React.ReactNode }) {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">{children}
        </Masonry>
    )
}
