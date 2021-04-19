import axios from 'axios';
import { SimpleConfigs } from '../models/keyInput';
import { Shortener } from '../models/shortener';

type ModelOneInput = {
  baseUrls: {
    mask: string;
    short: string;
  };
  maskBase64: boolean;
};

export type ModelOneResponse = {
  ({ apiKey }: SimpleConfigs): {
    short(
      link: string
    ): Promise<{
      valid: boolean;
      linkShorted: string;
    }>;
    mask(
      link: string
    ): {
      valid: boolean;
      linkShorted: string;
    };
  };
};

export default ({
  baseUrls,
  maskBase64 = false
}: ModelOneInput): ModelOneResponse => {
  return ({ apiKey }: SimpleConfigs): Shortener => {
    const key = apiKey;

    return {
      async short(link) {
        const { data: linkShorted } = await axios.get(
          `${baseUrls.short}/${key}?s=${link}`
        );

        return {
          linkShorted,
          valid: true
        };
      },
      mask(link) {
        if (maskBase64) {
          console.log('Base64');
        }

        return {
          linkShorted: `${baseUrls.mask}/${key}?s=${link}`,
          valid: true
        };
      }
    };
  };
};
