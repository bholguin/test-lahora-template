
import {notFound} from 'next/navigation';
import {getResponse} from '../helpers/getResponse';
import {getMainMenu, getNewsListTags} from '../services';

const getTagData = async (tagId: string, page: number) => {
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
    getNewsListTags({
      tagid: tagId,
      size: Number(process.env.NEWS_PER_SECTION) ?? 0,
      tagtype: Number(process.env.CLEINT_TAG_TYPE),
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:193,t:2',
      page: page,
    }),
  ]);

  if (!getResponse(responseHome[5])?.success) {
    throw notFound();
  }

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    listTags: getResponse(responseHome[5]),
  };
};


export default getTagData;
