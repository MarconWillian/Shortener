import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: `https://ouo.io/api/{{TOKEN}}?s={{LINK}}`,
    mask: `https://ouo.io/qs/{{TOKEN}}?s={{LINK}}`
  },
  maskBase64: false
});
