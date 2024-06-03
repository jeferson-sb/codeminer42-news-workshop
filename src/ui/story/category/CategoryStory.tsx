import Link from 'next/link'
import Image from 'next/image'
import styles from './CategoryStory.module.css'

import { type Story } from '@/lib/api'
import { ReadTime } from '@/ui/time/ReadTime/ReadTime'

type CategoryStoryProps = {
  story: Story
}

function CategoryMainStory({ story }: CategoryStoryProps) {
  return (
    <article className={styles.story}>
      <div className={styles.details}>
        <Link href={`/stories/${story.slug}`}>
          <h3 className={styles.heading}>{story.title}</h3>
        </Link>
        <p>{story.abstract}</p>
        <ReadTime size="normal">4 MIN READ</ReadTime>
      </div>
      <Image
        src={story.poster.src}
        alt={story.poster.alt}
        width={300}
        height={300}
      />
    </article>
  )
}

function CategoryStory({ story }: CategoryStoryProps) {
  return (
    <article className={styles.categoryStory}>
      <Image
        src={story.poster.src}
        alt={story.poster.alt}
        width={210}
        height={130}
      />
      <Link href={`/stories/${story.slug}`}>
        <h4>{story.title}</h4>
      </Link>
      <p>{story.abstract}</p>
      <ReadTime>4 MIN READ</ReadTime>
    </article>
  )
}

export { CategoryStory, CategoryMainStory }
