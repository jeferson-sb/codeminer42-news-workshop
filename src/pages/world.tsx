import { Fragment } from 'react'
import { type GetServerSideProps } from 'next'

import styles from './world.module.css'
import { Divider } from '@/ui/primitives/divider/Divider'
import api, { Story } from '@/lib/api'
import { ColumnStory } from '@/ui/story/column/ColumnStory'

// News /world?region=BR
// News /world?latest=true

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const region = query?.region

  const response = await api.stories()

  const allCategories = Object.values(response.categorized).flat()

  const allStories = [
    response.todayHighlight,
    ...response.secondaries,
    ...allCategories,
  ].sort((storyA, storyB) => {
    if (storyA.region === storyB.region) return 0
    if (storyA.region === region) return -1
    return 1
  })

  return {
    props: {
      allStories,
    },
  }
}

export default function World({ allStories }: WorldProps) {
  return (
    <div className={styles.list}>
      <h2 className={styles.pageTtile}>World</h2>

      {allStories.map((story, i, arr) => (
        <Fragment key={story.id}>
          <ColumnStory story={story} />
          {i !== arr.length - 1 && <Divider spacing={10} tone={0.3} />}
        </Fragment>
      ))}
    </div>
  )
}

type WorldProps = {
  allStories: Story[]
}
