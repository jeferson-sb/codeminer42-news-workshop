import styles from './Divider.module.css'

type DividerProps = {
  orientation?: 'vertical' | 'horizontal'
  spacing?: number
  thickness?: number
  tone?: number
}

function Divider({
  tone,
  spacing,
  thickness,
  orientation = 'horizontal',
}: DividerProps) {
  const customStyles = {
    '--thickness': thickness ? `${thickness}px` : undefined,
    '--spacing-y':
      typeof spacing === 'number' && orientation === 'horizontal'
        ? `${spacing}px`
        : undefined,
    '--spacing-x':
      typeof spacing === 'number' && orientation === 'vertical'
        ? `${spacing}px`
        : undefined,
    '--tone': tone,
  }

  return (
    <hr
      className={styles.divider}
      style={customStyles as React.CSSProperties}
      aria-orientation={orientation}
    />
  )
}

export { Divider, type DividerProps }
