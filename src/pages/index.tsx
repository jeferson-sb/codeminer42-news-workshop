import Head from 'next/head'
import { GetStaticProps, GetStaticPropsResult } from 'next'

import { MainGrid } from '@/ui/mainGrid/MainGrid'
import api, { StoriesResponse } from '@/lib/api'

type HomeProps = {
  stories: StoriesResponse
}

export default function Home({ stories }: HomeProps) {
  return (
    <>
      <Head>
        <title>The Codeminer42</title>
        <meta
          name="description"
          content="The Codeminer - News about everything related to Software Engineering and its surroundings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MainGrid stories={stories} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ stories: StoriesResponse }>
> => {
  const stories = await api.stories()

  return {
    props: {
      stories,
    },
  }
}
