import axios from 'axios';

interface Shortened {
  valid: boolean;
  link: string;
}

export interface StflyMe {
  short(link: string): Promise<Shortened>;
  mask(link: string): Shortened;
}

interface StflyMeInput {
  apiKey?: string;
}

export default ({ apiKey }: StflyMeInput): StflyMe => {
  const key = apiKey || '';

  return {
    async short(link) {
      const { data: linkShorted } = await axios.get(
        `https://stfly.me/api/${key}?s=${link}`
      );

      return {
        link: linkShorted,
        valid: true
      };
    },
    mask(link) {
      return {
        link: `https://stfly.me/qs/${key}?s=${link}`,
        valid: true
      };
    }
  };
};
