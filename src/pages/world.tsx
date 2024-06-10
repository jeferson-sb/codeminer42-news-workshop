import { Fragment } from 'react'

import styles from './world.module.css'
import { Divider } from '@/ui/primitives/divider/Divider'
import api, { Story } from '@/lib/api'
import { ColumnStory } from '@/ui/story/column/ColumnStory'

// Exercise

export default function World() {
  const stories = [] as Story[]

  return (
    <div className={styles.list}>
      <h2 className={styles.pageTtile}>World</h2>

      {stories.map((story, i, arr) => (
        <Fragment key={story.id}>
          <ColumnStory story={story} />
          {i !== arr.length - 1 && <Divider spacing={10} tone={0.3} />}
        </Fragment>
      ))}
    </div>
  )
}
