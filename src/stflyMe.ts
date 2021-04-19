import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://stfly.me/api',
    mask: 'https://stfly.me/qs'
  },
  maskBase64: false
});
