export async function getMessages(locale: string) {
  switch (locale) {
    case 'en':
      return (await import('@/locales/en/common.json')).default;
    case 'es':
      return (await import('@/locales/es/common.json')).default;
    case 'fr':
      return (await import('@/locales/fr/common.json')).default;
    default:
      throw new Error(`Locale not supported: ${locale}`);
  }
}
