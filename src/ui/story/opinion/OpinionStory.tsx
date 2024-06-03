import Link from 'next/link'
import Image from 'next/image'

import styles from './OpinionStory.module.css'

import { type Story } from '@/lib/api'
import { ReadTime } from '@/ui/time/ReadTime/ReadTime'

type OpinionStoryProps = {
  story: Story
}

function OpinionStory({ story }: OpinionStoryProps) {
  return (
    <article className={styles.story}>
      <div>
        <p className={styles.author}>{story.author.name}</p>
        <Link href={`/stories/${story.slug}`}>
          <h3 className={styles.heading}>{story.title}</h3>
        </Link>
        <ReadTime>2 MIN READ</ReadTime>
      </div>
      <Image
        src={story.author.avatar.src}
        alt={story.author.avatar.alt}
        width={48}
        height={48}
      />
    </article>
  )
}

export { OpinionStory }
