import Image from 'next/image'
import Link from 'next/link'

import styles from './SecondaryStory.module.css'

import { type Story } from '@/lib/api'
import { ReadTime } from '@/ui/time/ReadTime/ReadTime'

type SecondaryStoryProps = {
  story: Story
}

function SecondaryStory({ story }: SecondaryStoryProps) {
  return (
    <article className={styles.story}>
      <Image
        src={story.poster.src}
        width={140}
        height={140}
        alt={story.poster.alt}
      />
      <Link href={`/stories/${story.slug}`}>
        <h3 className={styles.heading}>{story.title}</h3>
      </Link>
      <p className={styles.abstract}>{story.abstract}</p>
      <ReadTime>2 MIN READ</ReadTime>
    </article>
  )
}

export { SecondaryStory }
