import { CSSProperties, PropsWithChildren } from 'react'
import styles from './ReadTime.module.css'

type ReadTimeProps = {
  size?: 'sm' | 'normal'
}

function ReadTime({ children, size = 'sm' }: PropsWithChildren<ReadTimeProps>) {
  const sizes = {
    sm: '0.5rem',
    normal: '0.75rem',
  }
  const customStyles = {
    '--size': sizes[size],
  }

  return (
    <small className={styles.readtime} style={customStyles as CSSProperties}>
      {children}
    </small>
  )
}

export { ReadTime }
