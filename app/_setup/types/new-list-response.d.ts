export interface Author {
  firstname: string;
  lastname: string;
  fullname: string;
  image: Preview;
  name: string;
  internaluser: boolean;
}

export interface SizeImage {
  url: string;
  width: number;
  height: number;
}

export interface Preview {
  sizes: Array<SizeImage>;
  original?: {
    url: string;
  };
  description: string | false;
  copyright?: string | false;
  photographer?: string | false;
}

export interface Config {
  zonehome: string | undefined;
  priorityhome: string;
  zonesection: string;
  prioritysection: string;
  homepreview: string;
  showcomments: boolean;
  showtime: boolean;
  showauthor: boolean;
  showuppertitle: boolean;
  showsubtitle: boolean;
  showads: boolean;
}

export interface Info {
  type?: string
  section?: {
    name: string;
    slug: string;
    url: string;
  };
  link: {
    url?: string;
    target?: string;
    canonical?: boolean;
    internal?: string;
  };
  date: {
    date: string;
    created: number;
    modified: number;
    firstpublish: number;
    lastpublish: number;
  };
}

export interface Tag {
  approved: boolean;
  name: string;
  id: string;
  info: boolean;
}

export type ItemList = {
  list: {
    integrated: boolean;
    items: Array<{
      index: number;
      title: string;
      body: {
        rendered: string;
        striped: string;
      };
      categories: boolean;
      image: Preview;
      videos: boolean;
      related: string;
      date: number;
    }>;
  };
};

export type NewListResponseData = {
  info: Info;
  config?: Config;
  main: {
    title: {
      home: string;
      section: string;
      article: string;
    };
    subtitle: {
      rendered: string;
      striped: string;
    };
    tags: {
      name: string;
      slug: string;
      url: string;
      approved: boolean;
      id: string;
    }[];
  };
  body?: {
    rendered: string;
    striped: string;
  };
  authors: Array<Author>;
  preview: Preview;
  keywords?: { tags: Array<Tag>; hiddentags: boolean; person: boolean };
};

export interface Entity {
  color: string;
  description: string;
  idPage: number;
  idTipoEdicion: number;
  idZone: number;
  name: string;
  new: boolean;
  order: number;
  orderDefault: string;
  sizeDefault: number;
  visibility: boolean;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface NewListResponse {
  success: boolean;
  site: string;
  publication: string;
  entity: Entity;
  data: Array<NewListResponseData>;
}
