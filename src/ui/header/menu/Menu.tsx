import Link from 'next/link'
import styles from './Menu.module.css'

function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/section/world">World</Link>
      </li>
      <li>
        <Link href="/section/politics">Politics</Link>
      </li>
      <li>
        <Link href="/section/sports">Sports</Link>
      </li>
      <li>
        <Link href="/section/business">Business</Link>
      </li>
      <li>
        <Link href="/section/tech">Tech</Link>
      </li>
      <li>
        <Link href="/section/science">Science</Link>
      </li>
      <li>
        <Link href="/section/games">Games</Link>
      </li>
      <li>
        <Link href="/section/health">Health</Link>
      </li>
      <li>
        <Link href="/section/weather">Weather</Link>
      </li>
    </ul>
  )
}

export { Menu }
