import unsplashApi from '@/api/api';
import React from 'react'

type UserCardProps = {
  profileImage: string;
  name: string;
  username: string;
}

type UserPageProps = {
  params: {
    keyword?: string;
  };
}

const UserCard = ({ profileImage, name, username }: UserCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row aspect-[3/2] sm:aspect-[3] w-full  items-center justify-center sm:justify-start gap-4 rounded-xl border p-3">
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src={`${profileImage}`} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="overflow-hidden text-clip text-lg   font-semibold capitalize text-base-content md:text-xl  ">
          {name}
        </h1>

        <p className="overflow-hidden text-ellipsis text-sm capitalize text-base-300">
          {username}
        </p>
      </div>
    </div>
  )
}

export default async function UserPage({ params }: UserPageProps) {
  const { keyword } = await params;
  const { results } = await unsplashApi({
    url: 'search/users',
    options: `query=${keyword}&per_page=20`
  });
  return (
    <section className="responsive-grid my-4">
      {results.map((user: any) => (
        <UserCard
          key={user.id}
          profileImage={user.profile_image.medium}
          name={user.name}
          username={user.username}
        />
      ))}
    </section>
  )
}
