import {getResponse} from '../helpers/getResponse';
import {getAutorInfo, getBanners, getMainMenu, getNewsListAutor} from '../services';

const getAutorData = async (autor: string, page: number) => {
  const responseHome = await Promise.allSettled([
    getMainMenu({
      path: '/.config/sidebar.html',
    }),
    getMainMenu({
      path: '/.config/menu.html',
    }),
    getMainMenu({
      path: '/.config/footer.html',
    }),
    getMainMenu({
      path: '/.config/pages.html',
    }),
    getMainMenu({
      path: '/.config/cintillo.html',
    }),
    getNewsListAutor({
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      user: autor,
      page: page,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:193,t:2',
    }),
    getAutorInfo({
      user: autor,
      exclude: 'groups',
      imagesizes: 'w:150,h:150,t:2',
    }),
    getBanners({
      template: 'Seccion',
    }),
  ]);

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    listAutor: getResponse(responseHome[5]),
    autor: getResponse(responseHome[6])?.data,
    banners: getResponse(responseHome[7])?.data ?? [],
  };
};


export default getAutorData;
