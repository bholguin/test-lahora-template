
import {getResponse, getResponsePromise} from '../helpers/getResponse';
import {
  getBanners,
  getBlockSass,
  getMainBlockData,
  getMainMenu,
  getNewsListAvanced,
  getNewsListSection,
  getNewsListZone,
  getRanking,
  getvideoListAdvanced,
} from '../services';

const getHomeData = async () => {
  const responseHome = await Promise.allSettled([
    // menu
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
    getNewsListZone({
      zone: 'alertaheader',
      size: 1,
      newstype: 'news,listas,liveblog',
      exclude:
        'config,keywords,authors,preview,gallery,related,relatedexternal,external,hascontent,customfields',
    }),
    // seccion principal
    getMainBlockData({template: 'Destacado'}),
    // listado de noticias
    getNewsListZone({
      zone: 'destacadas',
      size: 6,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:802,h:449,t:2;w:412,h:231,t:2;',
    }),
    // seccion videos
    getvideoListAdvanced({
      size: 5,
      imagesizes: 'w:585,h:369,t:2;w:271,h:153,t:2',
      query: 'Category:(videohome)',
    }),
    // block sass
    getBlockSass({template: 'Home_1'}),
    getBlockSass({template: 'Home_2'}),
    getBlockSass({template: 'Home_3'}),
    getBlockSass({template: 'Home_4'}),
    getBlockSass({template: 'Home_5'}),
    getBlockSass({template: 'Home_6'}),
    getBlockSass({template: 'Home_7'}),
    getBlockSass({template: 'Home_8'}),
    getBlockSass({template: 'Home_9'}),
    getBlockSass({template: 'Home_10'}),
    getBlockSass({template: 'Home_11'}),
    // banners
    getBanners({
      template: 'Home',
    }),

    // servicios
    getNewsListSection({
      section: 'servicios',
      size: 3,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // La Hora recomienda
    getNewsListZone({
      zone: 'brandedcontent',
      size: 10,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // No te lo pierdas
    getNewsListZone({
      zone: 'evergreen',
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // Noticias
    getNewsListSection({
      section: 'politica,economia,seguridad',
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
    }),

    // Provincias
    getNewsListSection({
      section: 'loja,losrios,tungurahua,zamora,esmeraldas,imbaburacarchi,santodomingo',
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // Quito
    getNewsListSection({
      section: 'quito',
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:581,h:367,t:2;w:273,h:154,t:2;',
    }),

    // Opinion
    getNewsListSection({
      section: 'columnistasnacionales',
      size: 7,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
    }),

    // Mundo
    getNewsListSection({
      section: 'mundo',
      size: 3,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // Caricaturas
    getNewsListSection({
      section: 'caricatura',
      size: 3,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:320,h:169,t:1,c:ffffff',
    }),
    // Edición del día
    getNewsListAvanced({
      query: 'claves:("Edicion+Nacional")',
      size: 1,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:318,h:446,t:1,c:ffffff',
    }),

    // Editorial
    getNewsListSection({
      section: 'editorial',
      size: 1,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
    }),
    // Ranking
    getRanking({
      size: 5,
      imagesizes: 'w:86,h:90,t:2',
      ranking: 'https://dev-saas.cms-medios.com/export/sites/lahora/ranking.json',
    }),
  ]);

  return {
    sidebar: getResponse(responseHome[0])?.data || [],
    menu: getResponse(responseHome[1])?.data || [],
    footer: getResponse(responseHome[2])?.data || [],
    freeZone: getResponse(responseHome[3])?.data || [],
    cintillo: getResponse(responseHome[4])?.data || [],
    alertZone: getResponse(responseHome[5]) || undefined,

    // block
    mainBlock: getResponsePromise(responseHome[6]),
    block1: getResponse(responseHome[7])?.data || [],
    videoBlock: getResponse(responseHome[8])?.data || [],
    blockSass1: getResponsePromise(responseHome[9]),
    blockSass2: getResponsePromise(responseHome[10]),
    blockSass3: getResponsePromise(responseHome[11]),
    blockSass4: getResponsePromise(responseHome[12]),
    blockSass5: getResponsePromise(responseHome[13]),
    blockSass6: getResponsePromise(responseHome[14]),
    blockSass7: getResponsePromise(responseHome[15]),
    blockSass8: getResponsePromise(responseHome[16]),
    blockSass9: getResponsePromise(responseHome[17]),
    blockSass10: getResponsePromise(responseHome[18]),
    blockSass11: getResponsePromise(responseHome[19]),
    // banners
    banners: getResponse(responseHome[20])?.data || [],
    // sesiones
    servicios: getResponse(responseHome[21])?.data || [],
    recomendados: getResponse(responseHome[22])?.data || [],
    noPerder: getResponse(responseHome[23])?.data || [],
    noticias: getResponse(responseHome[24])?.data || [],
    provincias: getResponse(responseHome[25])?.data || [],
    quito: getResponse(responseHome[26])?.data || [],
    opinion: getResponse(responseHome[27])?.data || [],
    mundo: getResponse(responseHome[28])?.data || [],
    caricaturas: getResponse(responseHome[29])?.data || [],
    edicion: getResponse(responseHome[30])?.data || [],
    editorial: getResponse(responseHome[31])?.data || [],
    ranking: getResponse(responseHome[32])?.data || [],
  };
};

export default getHomeData;
