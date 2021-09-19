import ModelOne from './service/ModelOne';

export default ModelOne({
  baseUrls: {
    short: 'https://clk.sh/api?api={{TOKEN}}&url={{LINK}}&format=text',
    mask: 'https://clk.sh/st?api={{TOKEN}}&url={{LINK}}'
  },
  maskBase64: false
});
