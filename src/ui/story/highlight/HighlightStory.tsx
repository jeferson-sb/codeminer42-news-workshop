import Link from 'next/link'
import Image from 'next/image'

import styles from './HighlightStory.module.css'

import { type Story } from '@/lib/api'
import { ReadTime } from '@/ui/time/ReadTime/ReadTime'

type HighlightStoryProps = {
  story: Story
}

function HighlightStory({ story }: HighlightStoryProps) {
  return (
    <article className={styles.story}>
      <Link href={`/stories/${story.slug}`}>
        <Image
          src={story.poster.src}
          alt={story.poster.alt}
          width={500}
          height={300}
        />
        <h2 className={styles.heading}>{story.title}</h2>
      </Link>
      <p className={styles.abstract}>{story.abstract}</p>
      <ReadTime size="normal">4 MIN READ</ReadTime>
    </article>
  )
}

export { HighlightStory }
