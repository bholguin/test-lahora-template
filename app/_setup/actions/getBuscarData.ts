import {getResponse, getResponsePromise} from '../helpers/getResponse';
import {getMainMenu, searchData} from '../services';

const getBuscarData = async (query: string) => {
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
    query && searchData({
      newstype: 'news,listas,liveblog',
      search: query,
      imagesizes: 'w:343,h:193,t:2',
      mode: 'advanced',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      size: 20,
    }),
  ]);

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    searchData: getResponsePromise(responseHome[5]),
  };
};


export default getBuscarData;
