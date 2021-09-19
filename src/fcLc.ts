import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://fc.lc/api?api={{TOKEN}}&url={{LINK}}&format=text',
    mask: 'https://fc.lc/st?api={{TOKEN}}&url={{LINK}}'
  },
  maskBase64: false
});
