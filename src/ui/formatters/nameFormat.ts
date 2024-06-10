export const formatToLocaleRegion = (
  region: string,
  options?: Intl.DisplayNamesOptions,
  locale = 'en-US'
) => new Intl.DisplayNames(locale, { type: 'region', ...options }).of(region)
