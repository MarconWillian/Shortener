import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://ouo.io/api',
    mask: 'https://ouo.io/qs'
  },
  maskBase64: false
});
