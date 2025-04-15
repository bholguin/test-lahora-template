import {config} from '../config/client';
import {
  getAutorInfo,
  getBanners,
  getMainMenu,
  getNews,
  getNewsItemsList,
  getNewsListZone,
  getRanking,
} from '../services';
import {getResponse} from '../helpers/getResponse';
import {notFound} from 'next/navigation';
import {AutorInfo} from '../types/services';
import extractRealtedNews from '../helpers/extractRealtedNews';
import {AxiosResponse} from 'axios';
import {NewListResponseData} from '../types/new-list-response';

const getNewsData = async (path: string) => {
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
    getNewsListZone({
      publication: config.publication,
      zone: 'alertaheader',
      size: 1,
      newstype: 'news,listas,liveblog',
      exclude:
        'config,keywords,authors,preview,gallery,related,relatedexternal,external,hascontent,customfields',
    }),
    getNews({
      imagesizes: 'w:801,h:424,t:2;w:412,h:231,t:2;',
      path: path,
    }),
    getBanners({
      template: 'Nota',
    }),
    // Ranking
    getRanking({
      size: 5,
      imagesizes: 'w:86,h:90,t:2',
      ranking:
        'https://dev-saas.cms-medios.com/export/sites/lahora/ranking.json',
    }),
    getNewsItemsList({
      path: path,
      imagesizes: 'w:801,h:423,t:2;w:412,h:231,t:2;',
    }),
  ]);

  const news = getResponse(responseHome[6])?.data;

  if (!news) {
    throw notFound();
  }

  // informacion del autor
  let autor: AutorInfo[] = [];
  if (news[0].config?.showauthor && news[0].authors[0].internaluser) {
    const res = await getAutorInfo({
      user: news[0].authors[0].name,
      exclude: 'groups',
      imagesizes: 'w:150,h:150,t:2',
    });

    autor = res.data.data;
  }

  // related newsm, extrae los paths
  const relatedNews = extractRealtedNews(news[0].body?.rendered ?? '');

  // Arreglo de promesas de las news
  const relatedNewsPromises: Array<
    Promise<AxiosResponse<{ data: Array<NewListResponseData> }>>
  > = [];

  // Llena el arreglo con las diferentes promesas
  relatedNews.forEach((item) => {
    item.forEach(async (path) => {
      relatedNewsPromises.push(
        getNews({
          path: path.replaceAll('|', '/'),
          imagesizes: 'w:212,h:142,t:2;w:86,h:90,t:2',
          exclude: 'config,keywords,authors,body,related,relatedexternal,social,external,hascontent,customfields,pixel',
        })
      );
    });
  });

  // Ejecuta el fetch de las noticias
  const newsRelatedRequest = await Promise.allSettled([...relatedNewsPromises]);

  const newsRelatedResponses = newsRelatedRequest.map((item) =>
    getResponse(item)?.data
  );

  return {
    sidebar: getResponse(responseHome[0])?.data ?? [],
    menu: getResponse(responseHome[1])?.data ?? [],
    footer: getResponse(responseHome[2])?.data ?? [],
    freeZone: getResponse(responseHome[3])?.data ?? [],
    cintillo: getResponse(responseHome[4])?.data ?? [],
    alertZone: getResponse(responseHome[5]),
    news: news ?? [],
    // autor
    autor: autor,
    // banners
    banners: getResponse(responseHome[7])?.data ?? [],
    ranking: getResponse(responseHome[8])?.data ?? [],
    newsRelatedResponses,
    itemList: getResponse(responseHome[9])?.data ?? [],
  };
};

export default getNewsData;
