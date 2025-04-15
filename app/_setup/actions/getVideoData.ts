import {config} from '../config/client';
import {getMainMenu, getvideoListAdvanced, getVideos} from '../services';
import {getResponse} from '../helpers/getResponse';


const getVideoData = async (path: string) => {
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
    getVideos({
      imagesizes: 'w:585,h:369,t:2;w:271,h:153,t:2',
      path: path,
    }),
    getvideoListAdvanced({
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      imagesizes: 'w:1129,h:559,t:2;w:271,h:153,t:2',
      query: 'Category:(videohome OR destacadoseccion OR seccion)',
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

export default getVideoData;
