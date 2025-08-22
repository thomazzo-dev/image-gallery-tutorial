import MasonryLayout from '@/components/layout/masonry-layout'
import React from 'react'
import unsplashApi from '@/api/api'

type SearchPageProps = {
  params: {
        keyword?: string;
    };
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { keyword } = await params;
  const photoResults = await unsplashApi({
    url: 'search/photos',
    options: `query=${keyword}&per_page=20`
  }); 
  return (
    <MasonryLayout masonryItems={photoResults.results} />
  )
}
