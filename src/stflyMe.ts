import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://stfly.me/api/{{TOKEN}}?s={{LINK}}',
    mask: 'https://stfly.me/qs/{{TOKEN}}?s={{LINK}}'
  },
  maskBase64: false
});
