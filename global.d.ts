import 'next-intl';

declare module 'next-intl' {
  interface IntlConfig {
    locales: ['en', 'es', 'fr'];
    messages: typeof import('./messages/en.json');
  }
}
