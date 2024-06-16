import { Fragment } from 'react'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

import styles from './section.module.css'
import { ColumnStory } from '@/ui/story/column/ColumnStory'
import { Divider } from '@/ui/primitives/divider/Divider'
import api, { Story } from '@/lib/api'

export default function NewsSection({}) {
  const stories = [] as Story[]
  const section = 'Template'

  return (
    <div className={styles.list}>
      <time>Last updated</time>
      <h2 className={styles.pageTitle}>{section}</h2>
      {stories.map((story, i, arr) => (
        <Fragment key={story.id}>
          <ColumnStory story={story} />
          {i !== arr.length - 1 && <Divider spacing={10} tone={0.3} />}
        </Fragment>
      ))}
    </div>
  )
}
