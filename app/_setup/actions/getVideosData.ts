import {config} from '../config/client';
import {getMainMenu, getvideoListAdvanced} from '../services';
import {getResponse} from '../helpers/getResponse';


const getVideosData = async (page: number) => {
  const responseHome = await Promise.allSettled([
    getMainMenu({
      publication: config.publication,
      path: '/.config/sidebar.html',
    }),
    getMainMenu({
      publication: config.publication,
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
    getvideoListAdvanced({
      size: process.env.VIDEOS_OPTION === 'op1' ? 3 : 1,
      imagesizes: 'w:585,h:369,t:2;w:271,h:153,t:2',
      query: 'Category:(destacadoseccion)',
    }),
    getvideoListAdvanced({
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      imagesizes: 'w:585,h:369,t:2;w:271,h:153,t:2',
      query: 'Category:(videohome OR destacadoseccion OR seccion)',
      page: page,
    }),
  ]);

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    videoHead: getResponse(responseHome[5])?.data ?? [],
    videoList: getResponse(responseHome[6])?.data ?? [],
  };
};

export default getVideosData;
