import { ouoIo } from '../src/index';

describe('OUO.io Shortener', () => {
  it('can generate mask link', async () => {
    const link = 'https://7-up.net/embed-ih21389uah9a.html';

    const ouoShort = ouoIo({ apiKey: 'keyTest' });

    const shortened = ouoShort.mask(link);

    expect(shortened.valid).toEqual(true);
    expect(shortened.link).toEqual(
      'https://ouo.io/qs/keyTest?s=https://7-up.net/embed-ih21389uah9a.html'
    );
  });

  it('can generate token with link', async () => {
    const link = 'https://7-up.net/embed-ih21389uah9a.html';

    const ouoShort = ouoIo({ apiKey: 'TYvpHJGW' });

    const shortened = await ouoShort.short(link);

    expect(shortened.valid).toEqual(true);
    expect(shortened.link).toEqual('https://ouo.io/UcPf3IH');
  });
});
