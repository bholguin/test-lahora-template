import {notFound} from 'next/navigation';
import {getResponse} from '../helpers/getResponse';
import {getMainMenu, getPages} from '../services';

const getPoliticasData = async (path: string) => {
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
    getPages({
      path: `/pages/${path}`,
    }),
  ]);

  if (!getResponse(responseHome[4])?.data) {
    throw notFound();
  }

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    information: getResponse(responseHome[5])?.data,
  };
};


export default getPoliticasData;
