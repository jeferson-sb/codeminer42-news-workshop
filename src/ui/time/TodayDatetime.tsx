function formatToFullDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)
}

const now = new Date()
const datetime = now.toISOString()
const today = formatToFullDate(now)

function TodayDatetime() {
  return (
    <time dateTime={datetime} suppressHydrationWarning>
      {today}
    </time>
  )
}

export { TodayDatetime }
