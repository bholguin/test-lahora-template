export interface NewsResponse {
  success: boolean;
  site: string;
  publication: string;
  data: DataNews[];
}

export interface DataNews {
  info: Info;
  config: Config;
  main: Main;
  body: Subtitle;
  preview: Preview;
  gallery: boolean;
  related: Related;
  relatedexternal: Relatedexternal;
  list: boolean;
  videos: boolean;
  audios: boolean;
  social: Social;
  external: External;
  hascontent: Hascontent;
  customfields: boolean;
  pixel: string;
  authors: Author[];
}

export interface Hascontent {
  hasgalleryvideosflash: boolean;
  hasgalleryvideosyoutube: boolean;
  hasgalleryvideosembedded: boolean;
  hasgalleryimages: boolean;
  hasaudios: boolean;
  hasfiles: boolean;
  hasembeddedimage: boolean;
  hasembeddedvideoyoutube: boolean;
  hasembeddedvideolink: boolean;
  hasembeddedvideoembedded: boolean;
  hasembeddedvideogallery: boolean;
  hasembeddedvideolist: boolean;
  hasembeddedimagegallery: boolean;
  hasembeddedaudio: boolean;
  hasembeddedaudiogallery: boolean;
  hasembeddedaudiolist: boolean;
  hasembeddedpinterest: boolean;
  hasembeddedvine: boolean;
  hasembeddedinstagram: boolean;
  hasembeddedtwitter: boolean;
  hasembeddedfacebook: boolean;
  hasembeddedembedded: boolean;
  hasembeddedpoll: boolean;
  hasembeddedstorify: boolean;
  hasembeddedflickr: boolean;
  hasembeddedimagecomparator: boolean;
  hasembeddedyoutube: boolean;
  hasembeddediframe: boolean;
  hasembeddedevent: boolean;
  hasembeddedrelatednews: boolean;
  hasembeddedjwplayer: boolean;
  hasembeddedbrid: boolean;
}

interface External {
  httpstream: boolean;
  iframe: boolean;
}

interface Social {
  title: boolean;
  description: boolean;
  images: boolean;
  tags: boolean;
}

interface Relatedexternal {
  news: boolean;
}

interface Related {
  automatic: boolean;
  news: News[];
}

interface News {
  path: string;
  inhome: boolean;
}

interface Preview {
  sizes: Original[];
  original: Original;
  copyright: boolean;
  description: boolean;
  photographer: boolean;
}

interface Original {
  scale: string;
  url: string;
  width: number;
  height: number;
}

interface Main {
  title: Title;
  uppertitle: boolean;
  subtitle: Subtitle;
  summary: boolean;
  tags: Tag[];
  hiddentags: string;
  person: boolean;
  categories: boolean;
  sources: boolean;
}

interface Author {
  internaluser: boolean;
  name: string;
  firstname: string;
  lastname: string;
  fullname: string;
  image: Image;
}

interface Image {
  sizes: Size[];
}

interface Size {
  size: string;
  url: string;
  width: number;
  height: number;
}

interface Tag {
  approved: boolean;
  name: string;
  id: string;
}

interface Subtitle {
  rendered: string;
  striped: string;
}

interface Title {
  home: string;
  section: string;
  article: string;
}

interface Config {
  zonehome: string;
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

interface Info {
  publication: string;
  site: string;
  type: string;
  creator: string;
  section: Section;
  date: Date;
  link: Link;
  advanced: Advanced;
}

interface Advanced {
  tagarticle: string;
  cintillo: boolean;
  color: string;
  imagearticle: string;
  imagehomeorientation: string;
  imagesectionorientation: string;
  elementhome: string;
  elementarticle: string;
}

interface Link {
  url: string;
  canonical: string;
  internal: string;
  target: string;
  redirect: boolean;
}

interface Date {
  date: string;
  created: number;
  modified: number;
  firstpublish: number;
  lastpublish: number;
}

interface Section {
  name: string;
  slug: string;
  url: string;
}
