import Link from 'next/link'
import Image from 'next/image'

import styles from './ColumnStory.module.css'

import { type Story } from '@/lib/api'

import { formatToLocaleRegion } from '@/ui/formatters/nameFormat'
import { formatToLocaleDateStyle } from '@/ui/formatters/dateFormat'

type ColumnStoryProps = {
  story: Story
}

function ColumnStory({ story }: ColumnStoryProps) {
  return (
    <article className={styles.story}>
      <time>{formatToLocaleDateStyle(new Date(story.date))}</time>
      <div>
        <span className={styles.region}>
          {formatToLocaleRegion(story.region)}
        </span>
        <Link href={`/stories/${story.slug}`}>
          <h3>{story.title}</h3>
        </Link>
        <p className={styles.abstract}>{story.abstract}</p>
        <span>by {story.author.name}</span>
      </div>
      <Image
        src={story.poster.src}
        alt={story.poster.alt}
        width={210}
        height={140}
      />
    </article>
  )
}

export { ColumnStory }
