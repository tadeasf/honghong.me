import type { Metadata } from 'next'

import AboutMe from '@/components/home/about-me'
import GetInTouch from '@/components/home/get-in-touch'
import Hero from '@/components/home/hero'
import LatestArticles from '@/components/home/latest-articles'
import SelectedProjects from '@/components/home/selected-projects'
import { SITE_URL } from '@/lib/constants'
import { type BlogMetadata, getAllPages, type ProjectMetadata } from '@/lib/mdx'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL
  }
}

const HomePage = () => {
  const posts = getAllPages<BlogMetadata>('blog')
  const latestPosts = posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 2)

  const projects = getAllPages<ProjectMetadata>('projects')

  return (
    <>
      <Hero />
      <SelectedProjects projects={projects} />
      <AboutMe />
      <LatestArticles posts={latestPosts} />
      <GetInTouch />
    </>
  )
}

export default HomePage
