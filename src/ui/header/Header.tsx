import Link from 'next/link'
import styles from './Header.module.css'

import { Brand } from '@/ui/primitives/brand/Brand'
import { Divider } from '@/ui/primitives/divider/Divider'
import { Menu } from './menu/Menu'
import { TopNav } from './topnav/TopNav'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <TopNav />
        <div className={styles.highlight}>
          <Link href="/">
            <Brand />
          </Link>
        </div>
        <Menu />
        <Divider spacing={4} thickness={2} />
      </nav>
    </header>
  )
}

export { Header }
