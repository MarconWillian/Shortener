import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://shrtfly.com/api?api={{TOKEN}}&url={{LINK}}&format=text',
    mask: 'https://shrtfly.com/st?api={{TOKEN}}&url={{LINK}}'
  },
  maskBase64: false
});
