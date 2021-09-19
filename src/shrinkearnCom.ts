import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://shrinkearn.com/api?api={{TOKEN}}&url={{LINK}}&format=text',
    mask: 'https://shrinkearn.com/st?api={{TOKEN}}&url={{LINK}}'
  },
  maskBase64: false
});
