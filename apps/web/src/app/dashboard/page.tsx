import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import { flags } from '@/lib/constants'

import Items from './items'

const title = 'Dashboard'
const description =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions. I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.'

type DashboardPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: DashboardPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: '/dashboard'
    },
    openGraph: {
      ...previousOpenGraph,
      url: '/dashboard',
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const DashboardPage = () => {
  return (
    <>
      <PageTitle
        title='Dashboard'
        description='This is my personal dashboard, built with Next.js API routes deployed as
        serverless functions. I use this dashboard to track various metrics
        across platforms like YouTube, GitHub, and more.'
      />
      {flags.stats ? <Items /> : null}
    </>
  )
}

export default DashboardPage
