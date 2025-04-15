import {getResponse, getResponsePromise} from '../helpers/getResponse';
import {
  getBanners,
  getMainMenu,
  getNewsListAvanced,
  getNewsListSection,
  getNewsListZone,
  getNewsListZoneSection,
  getRanking,
  getvideoListAdvanced,
} from '../services';

const getEdicionesData = async (section: string) => {
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
    getNewsListZoneSection({
      zone: 'destacadas',
      onmainpage: 'section',
      size: 5,
      section: section,
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:802,h:449,t:2;w:412,h:231,t:2;',
    }),
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
    // banners
    getBanners({
      template: 'Home',
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

    // Pais
    getNewsListSection({
      section: 'politica,economia,seguridad,sociedad',
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
    }),

    // Provincias
    getNewsListAvanced({
      query: `section.zone:(no_mostrar) AND seccion:(${section})`,
      size: 5,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:342,h:193,t:2;',
    }),

    // Opinion
    getNewsListAvanced({
      query: `claves:("opinion+${section}")`,
      section: 'columnistasnacionales',
      size: 5,
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

    // Deportes
    getNewsListSection({
      section: 'deportes',
      size: 5,
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
      query: `claves:("Edicion+${section}")`,
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
      ranking:
        'https://dev-saas.cms-medios.com/export/sites/lahora/ranking.json',
    }),

    // Opinion
    getNewsListSection({
      section: 'columnistasnacionales',
      size: 7,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
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
    // banners
    banners: getResponse(responseHome[9])?.data || [],
    // sesiones
    recomendados: getResponse(responseHome[10])?.data || [],
    noPerder: getResponse(responseHome[11])?.data || [],
    pais: getResponse(responseHome[12])?.data || [],
    provincias: getResponse(responseHome[13])?.data || [],
    opinion: getResponse(responseHome[14])?.data || [],
    mundo: getResponse(responseHome[15])?.data || [],
    deportes: getResponse(responseHome[16])?.data || [],
    caricaturas: getResponse(responseHome[17])?.data || [],
    edicion: getResponse(responseHome[18])?.data || [],
    editorial: getResponse(responseHome[19])?.data || [],
    ranking: getResponse(responseHome[20])?.data || [],
    opinionNacional: getResponse(responseHome[21])?.data || [],
  };
};

export default getEdicionesData;
