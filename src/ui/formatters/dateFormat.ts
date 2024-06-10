export const formatToLocaleDateStyle = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
  locale = 'en-US'
) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    ...options,
  }).format(date)
