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
  const generateURI = ({
    api,
    link,
    token
  }: {
    api: string;
    link: string;
    token: string;
  }): string => {
    return api.replace(/{{([a-z_]+?)}}/gi, word => {
      if (word === '{{TOKEN}}') {
        return token;
      }
      if (word === '{{LINK}}') {
        return link;
      }
      return word;
    });
  };

  return ({ apiKey }: SimpleConfigs): Shortener => {
    const key = apiKey;

    return {
      async short(link) {
        const { data: linkShorted } = await axios.get(
          generateURI({ api: baseUrls.short, token: key, link })
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
          linkShorted: generateURI({ api: baseUrls.mask, token: key, link }),
          valid: true
        };
      }
    };
  };
};
