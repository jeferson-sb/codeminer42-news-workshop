import { Fragment } from 'react'
import styles from './MainGrid.module.css'

import { Divider } from '@/ui/primitives/divider/Divider'
import { HighlightStory } from '@/ui/story/highlight/HighlightStory'
import { SecondaryStory } from '@/ui/story/secondary/SecondaryStory'
import { OpinionStory } from '@/ui/story/opinion/OpinionStory'
import {
  CategoryStory,
  CategoryMainStory,
} from '@/ui/story/category/CategoryStory'
import { Story } from '@/lib/api'

type MainGridProps = {
  stories: {
    todayHighlight: Story
    secondaries: Story[]
    opinions: Story[]
    categorized: Record<string, Story[]>
  }
}

function MainGrid({ stories }: MainGridProps) {
  return (
    <div id="main-content" className={styles.grid}>
      <section className={styles.storySection}>
        <HighlightStory story={stories.todayHighlight} />
        <Divider orientation="vertical" tone={0.3} />
      </section>
      <section className={styles.secondaryStories}>
        <div className={styles.storyList}>
          <div className={styles.secondaryStory}>
            {stories.secondaries.map((story, i, arr) => (
              <Fragment key={story.id}>
                <SecondaryStory story={story} />
                {i !== arr.length - 1 && <Divider spacing={10} tone={0.3} />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.opinionStories}>
        <div className={styles.storyList}>
          <p className={styles.category}>Opinion</p>
          <div className={styles.opinionStory}>
            {stories.opinions.map((story, i, arr) => (
              <Fragment key={story.id}>
                <OpinionStory story={story} />
                {i !== arr.length - 1 && <Divider spacing={10} tone={0.3} />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <Divider spacing={8} tone={0.3} />

      {Object.keys(stories.categorized).map((category, i, arr) => (
        <Fragment key={i}>
          <section key={category} className={styles.content}>
            <p className={styles.category}>{category}</p>
            <CategoryMainStory story={stories.categorized[category][0]} />
            <div className={styles.relatedStories}>
              {stories.categorized[category].slice(1).map((story, i, arr) => (
                <Fragment key={story.id}>
                  <CategoryStory key={story.id} story={story} />
                  {i !== arr.length - 1 && (
                    <Divider orientation="vertical" tone={0.3} />
                  )}
                </Fragment>
              ))}
            </div>
          </section>
          {i !== arr.length - 1 && <Divider tone={0.3} />}
        </Fragment>
      ))}
    </div>
  )
}

export { MainGrid }
