type Shortened = {
  valid: boolean;
  linkShorted: string;
};

export type Shortener = {
  short(link: string): Promise<Shortened>;
  mask(link: string): Shortened;
};
