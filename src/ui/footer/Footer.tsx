import { Brand } from '@/ui/primitives/brand/Brand'
import { Divider } from '@/ui/primitives/divider/Divider'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <Divider tone={0.2} thickness={5} />
      <Divider tone={0.2} spacing={3} />
      <footer className={styles.footer}>
        <Brand as="p" sz="small" />
        <small>@2021 Codeminer42. All Rights Reserved.</small>
      </footer>
    </>
  )
}

export { Footer }
