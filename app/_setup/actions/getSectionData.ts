import {getBanners, getMainMenu, getNewsListSection, getRanking} from '../services';
import {getResponse} from '../helpers/getResponse';
import {notFound} from 'next/navigation';

const getSectionData = async (section: string, page: number) => {
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
    getNewsListSection({
      section: section,
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: section === 'ediciones'? 'w:318,h:446,t:1,c:ffffff': 'w:343,h:193,t:2',
      page: page,
    }),
    // banners
    getBanners({
      template: 'Seccion',
    }),
    getRanking({
      size: 5,
      imagesizes: 'w:86,h:90,t:2',
      ranking: 'https://dev-saas.cms-medios.com/export/sites/lahora/ranking.json',
    }),
  ]);

  const listSection = getResponse(responseHome[5]);

  if (!listSection?.entity) {
    throw notFound();
  }

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    listSection: getResponse(responseHome[5]),
    currentPage: page,
    banners: getResponse(responseHome[6])?.data ?? [],
    ranking: getResponse(responseHome[7])?.data ?? [],
  };
};

export default getSectionData;
