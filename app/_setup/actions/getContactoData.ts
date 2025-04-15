import {getResponse} from '../helpers/getResponse';
import {getMainMenu, getPages} from '../services';

const getLayoutData = async () => {
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
    getPages({
      path: '/pages/contacto.html',
    }),
    getMainMenu({
      path: '/.config/cintillo.html',
    }),
  ]);

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    contactInfo: getResponse(responseHome[4]),
    cintillo: getResponse(responseHome[5])?.data ?? [],
  };
};

export default getLayoutData;
