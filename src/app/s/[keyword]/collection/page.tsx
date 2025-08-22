import unsplashApi from '@/api/api';
import CollectionCard from '@/components/UI/collection-card';
import React from 'react'

type SearchPageProps = {
  params: {
    keyword?: string;
  };
}

export default async function CollectionPage({ params }: SearchPageProps) {
  const { keyword } = await params;
  const collectionResults = await unsplashApi({
    url: 'search/collections',
    options: `query=${keyword}&per_page=20`
  });
 
  return (
    <main className="responsive-grid">
      {collectionResults.results.map((collectionInfo: any) => (
        <CollectionCard
          sourceOne={`${collectionInfo.preview_photos[0].urls.small}q=50`}
          sourceTwo={`${collectionInfo.preview_photos[1]?.urls.thumb}q=50`}
          sourceThree={`${collectionInfo.preview_photos[2]?.urls.thumb}q=50`}
          title={collectionInfo.title}
          collectionSize={collectionInfo.total_photos}
          user={collectionInfo.user.name}
        />
      ))}

    </main>
  )
}
