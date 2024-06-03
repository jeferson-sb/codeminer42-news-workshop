import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'

import styles from './story.module.css'
import { Divider } from '@/ui/primitives/divider/Divider'
import { news } from '..'

export default function StoryPost() {
  const story = news.todayHighlight

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{story.title}</h1>
      <div className={styles.author}>
        By <span>{story.author.name}</span>
      </div>
      <Divider tone={0.3} spacing={16} />
      <figure className={styles.breakout}>
        <Image
          src={story.poster.src || 'https://picsum.photos/1600/600'}
          width={1000}
          height={600}
          alt={story.poster.alt}
        />
        <figcaption>Photo by Anonymous</figcaption>
      </figure>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
        animi accusantium! Consequuntur quidem, nam expedita odit minus
        architecto ea est?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda
        eaque excepturi ratione architecto iusto voluptates minima. Consequatur
        iste error similique fuga molestias, doloremque aperiam officia dolorum
        dolorem quos libero incidunt eum esse vel dolore nesciunt sapiente sint,
        praesentium ea atque unde ratione molestiae veritatis laboriosam! Hic
        sint est inventore quisquam autem exercitationem corporis! Dicta non
        quia labore cumque quidem.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam tempora
        cupiditate nostrum. Doloremque repellendus voluptatem vel,
        necessitatibus earum repellat sequi natus reprehenderit in veritatis
        dicta aut quisquam inventore aliquam temporibus libero impedit
        aspernatur. Quis quo mollitia impedit rerum enim inventore!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam tempora
        cupiditate nostrum. Doloremque repellendus voluptatem vel,
        necessitatibus earum repellat sequi natus reprehenderit in veritatis
        dicta aut quisquam inventore aliquam temporibus libero impedit
        aspernatur. Quis quo mollitia impedit rerum enim inventore!
      </p>
    </div>
  )
}

// TODO: Exercise 2
