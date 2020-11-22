export default {
  defaultLocale: {
    id: 1,
    code: 'en',
  },
  auth: {
    liveTimeAccessTokenSec: 15 * 60 * 60,
    liveTimeRefreshTokenMc: 7 * 24 * 60 * 60 * 1000,
  },
  defaultLimit: 30,
  defaultOffset: 0,
  filesStorageUrl: 'http://api-parts-store.webstap.ru/',
  filesDirectory: {
    products: 'images/products/',
    users: 'images/users/',
    brands: 'images/brands/',
    categories: 'images/categories/',
  },
  currency: {
    defaultCurrencyCode: 'USD',
    ratesUrl: 'https://openexchangerates.org/api/latest.json',
    appId: 'dfc59e9c3db14452b8514949b7f6cb44',
  },
};
