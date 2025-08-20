import MasonryLayout from '@/components/layout/masonry-layout'
import React from 'react'
import imageUrl from "../../../public/assets/masonry image.png"
import unsplashApi from '@/api/api'

const getPhotos = unsplashApi({
    url: 'photos',options:`per_page=20`
})

export default async function Homepage() {
  const photoList = await getPhotos;
  return (
      <div className="column-layout">
        <header className="relative flex  w-full items-center justify-center overflow-hidden bg-slate-300 hero-aspect">
          <img
            src={imageUrl.src}
            className="absolute left-0 top-0 h-full w-full object-cover brightness-75"
            alt="hero image"
          />
          <div className="z-10 flex w-full max-w-[70.5rem] items-center justify-start px-4 *:text-white ">
            <div className="flex h-1/3 w-1/2 flex-col gap-4">
              <h1 className="font-bold text-2xl md:text-3xl  lg:text-4xl">
                Unsplash
              </h1>

              <p className="text-pretty  font-semibold text-xs sm:text-sm	 md:text-lg">
                The internet's source for visuals. Powered by creators
                everywhere.
              </p>
            </div>
          </div>
        </header>
        <MasonryLayout masonryItems={photoList}/>
      </div>  
  )
}
