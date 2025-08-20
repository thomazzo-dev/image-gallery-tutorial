import React from 'react'
import ThemeNavigator from '@/components/UI/theme-navigator'
import unsplashApi from '@/api/api'

const getTopics = unsplashApi({
    url: 'topics',
})

export default async function layout({ children }: { children: React.ReactNode }) {
    const topics = await getTopics;
    return (
        <>
            <ThemeNavigator topics={topics} />
            {children}
        </>
    )
}
