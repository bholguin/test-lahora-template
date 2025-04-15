export type Metadata = {
  title: string;
  description: string;
  sections?: Array<Metadata>;
};

export type Logo = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type Config = {
  apiUrl: string;
  siteUrl: string;
  apiPath: string;
  publication: number;
  newsType: string;
  tagType: number;
  name: string;
  headerLogo: Logo;
  squareLogo: Logo;
  useNextLink: boolean;
  timezone: number;
  externalCss: string;
  socialBlockLogo: Logo;
  lang: string;
  landscapeLogo: Logo;
  twitterSummaryCard: Logo;
  whatsapp?: string;
  googlenews?: string;
};

type Network = {
  title: string;
  slug: string;
  url: string;
  label: string;
  show: boolean
}

export type Socials = {
  [x: string]: Network;
};
