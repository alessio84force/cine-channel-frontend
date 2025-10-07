// next.config.cjs
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  reactStrictMode: true,
  swcMinify: true,
  // rimuovere/aggiungere altre opzioni se serve
});