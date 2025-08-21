import unsplashApi from '@/api/api'
import DiscoverHeader from '@/components/UI/discover-header';
import React from 'react'


interface DiscoverPageProps {
  params: {
    topicId?: string;
  };
}

export default async function DiscoverPage({ params }: DiscoverPageProps) {
  const { topicId } = await params;
  console.log("topicId", topicId);
  const topic = await unsplashApi({ url: `topics/${topicId}` });
  const topicPhotos = await unsplashApi({ url: `topics/${topicId}/photos`, options: "per_page=20" });
  if (topicId) {
    return (
      <div className="column-layout ">
        <DiscoverHeader title={topic.title} description={topic.description} fullImageUrl={topic.cover_photo.urls.full} blurHash={topic.cover_photo.blur_hash} />
      </div>

    )
  }
}
