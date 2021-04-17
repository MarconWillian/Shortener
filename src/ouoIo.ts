import axios from 'axios';

interface Shortened {
  valid: boolean;
  link: string;
}

export interface OuoIo {
  short(link: string): Promise<Shortened>;
  mask(link: string): Shortened;
}

interface OuoIoInput {
  apiKey?: string;
}

export default ({ apiKey }: OuoIoInput): OuoIo => {
  const key = apiKey || '';

  return {
    async short(link) {
      const { data: linkShorted } = await axios.get(
        `https://ouo.io/api/${key}?s=${link}`
      );

      return {
        link: linkShorted,
        valid: true
      };
    },
    mask(link) {
      return {
        link: `https://ouo.io/qs/${key}?s=${link}`,
        valid: true
      };
    }
  };
};
