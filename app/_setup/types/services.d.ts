import {NewListResponse} from './new-list-response';

type EmailParams = {
  sendto: string;
  from: string;
  host: string;
  subject: string;
  body: string;
};

type Params = {
  publication?: number;
  exclude?: string;
  newstype?: string;
  size?: number;
  page?: number;
  imagesizes?: string;
  order?: string;
  template?: string;
  path?: string;
  query?: string;
  zone?: string;
  tagid?: string;
  tagtype?: number;
  section?: string;
  user?: string;
  search?: string;
  mode?: string;
  ranking?: string;
  onmainpage?: string;
};

export interface MenuResponse {
  description: string;
  alt: string;
  image: boolean;
  link: string;
  target: string;
  parameters: boolean;
  subitem: false | Array<MenuResponse>;
  external: boolean;
}

export interface BlockSaasResponse {
  key: string;
  block: 'No Mostrar' | 'Zona Tag' | 'Zona Seccion';
  size: string;
  value: string;
  title: string;
  link: string;
}

export interface BannerResponse {
  key: string;
  value: string;
  show: boolean;
}

export interface BlockSaasResponseData {
  blockSass: Array<BlockSaasResponse>;
  news?: NewListResponse | undefined;
}

export interface Outstanding {
  key: string;
  value: string;
  config: string;
}

interface ImageProps {
  copyright: boolean;
  description: string | false;
  photographer: boolean;
  sizes: Array<{
    scale: string;
    url: string;
    width: number;
    height: number;
  }>;
  original: {
    height: number;
    width: number;
    url: string;
  };
}
export interface AutorInfo {
  info: {
    id: string;
    name: string;
    nickname: string;
    firstname: string;
    lastname: string;
    fullname: string;
    email: string;
    image: ImageProps;
    country: string;
    birthdate: string;
    gender: string;
    address: string;
    telephone: string;
    cellphone: string;
  };
  addtional: {
    USER_VIEW_NEWS: string;
    USER_USERIG: string;
    USER_USERFB: string;
    USER_MIBIO: string;
    USER_COUNTRY: string;
    USER_PICTURE: string;
    APODO: string;
    USER_SHOWEMAIL: boolean;
    USER_TWOFACTOR_DEADLINE: string;
    USER_MISITIO: string;
    USER_SHOWBIO: boolean;
    USER_MODULEALERTS_20220120: string;
    USER_USERLIN: string;
    USER_USERTWT: string;
    USER_VIEW_PINS: string;
  };
}

export interface VideoResponseData {
  config: {
    autoplay: boolean;
    mute: boolean;
  };
  info: {
    type: string;
    size: boolean;
    path: string;
    bitrate: boolean;
    creator: string;
    date: {
      created: number;
      modified: number;
    };
    duration: {
      rendered: string;
      striped: number;
    };
    link: {
      canonical: boolean;
      internal: string;
      target: string;
      url: string;
    };
  };
  main: {
    agency: boolean;
    author: boolean;
    categories: string;
    code: string;
    description: string;
    tags: string;
    title: string;
    image: ImageProps;
  };
}

export interface BannerResponse {
  key: string;
  value: string;
  show: boolean;
}

export interface FreeZoneResponse {
  info: {
    title: string;
    description: string;
    keywords: string;
  };
  body: {
    rendered: string;
    striped: string;
  };
}
