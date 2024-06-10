import { formatToLocaleDateStyle } from '../formatters/dateFormat'

const now = new Date()
const datetime = now.toISOString()
const today = formatToLocaleDateStyle(now, { dateStyle: 'full' })

function TodayDatetime() {
  return (
    <time dateTime={datetime} suppressHydrationWarning>
      {today}
    </time>
  )
}

export { TodayDatetime }
