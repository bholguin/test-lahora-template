/* eslint-disable no-case-declarations */

import {axiosApi} from '../config/axios';
import {ItemList, NewListResponse, NewListResponseData} from '../types/new-list-response';
import {
  AutorInfo,
  BannerResponse,
  BlockSaasResponse,
  FreeZoneResponse,
  MenuResponse,
  Outstanding,
  VideoResponseData,
  Params,
  EmailParams,
} from '../types/services';

export const generateTokenOffline = async (browserId: string) => {
  if (process.env.NEXT_PUBLIC_IS_OFFLINE === 'true') {
    try {
      const response = await axiosApi.get('/auth', {
        params: {
          username: process.env.USERNAME_OFFLINE,
          password: process.env.PASSWORD_OFFLINE,
          browserid: browserId,
          publication: process.env.PUBLICATION_ID,
        },
      });
      return response.data.data[0].token;
    } catch (e: any) {
      console.log(e);
    }
  }
};

export const getMainMenu = (params: Params) => {
  return axiosApi.get<{ data: Array<MenuResponse> }>('/config/menu', {
    params: params,
  });
};

export const getNewsListZone = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-zone', {
    params: params,
  });
};

export const getNewsListZoneSection = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-zone-section', {
    params: params,
  });
};

export const getOutstandingBlock = (params: Params) => {
  return axiosApi.get<{
    data: Array<Outstanding>;
  }>('/config/blocks', {
    params: params,
  });
};

export const getNewsList = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list', {
    params: params,
  });
};

export const getNewsListTag = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-tag', {
    params: params,
  });
};

export const getNewsListSection = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-section', {
    params: params,
  });
};

export const getNewsListAvanced = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-advanced', {
    params: params,
  });
};


export const getNewsListTags = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-tag', {
    params: params,
  });
};

export const getNewsListAutor = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-author', {
    params: params,
  });
};

export const getNewsSearch = (params: Params) => {
  return axiosApi.get<NewListResponse>('/news-list-search', {
    params: params,
  });
};

export const getAutorInfo = (params: Params) => {
  return axiosApi.get<{data: Array<AutorInfo>}>('/authors', {
    params: params,
  });
};


export const getvideoListAdvanced = (params: Params) => {
  return axiosApi.get<{data: Array<VideoResponseData>}>('/videos-list-advanced', {
    params: params,
  });
};

export const getVideos = (params: Params) => {
  return axiosApi.get<{data: Array<VideoResponseData>}>('/videos', {
    params: params,
  });
};

export const getBanners = (params: Params) => {
  return axiosApi.get<{data: Array<BannerResponse>}>('/config/banners', {
    params: params,
  });
};

export const getPages = (params: Params) => {
  return axiosApi.get<{data: Array<FreeZoneResponse>}>('/config/pages', {
    params: params,
  });
};

export const getRanking = (params: Params) => {
  return axiosApi.get<{data: Array<NewListResponseData>}>('/news-list-ranking', {
    params: params,
  });
};

export const getNews = (params: Params) => {
  return axiosApi.get<{data: Array<NewListResponseData>}>('/news', {
    params: params,
  });
};

export const getNewsItemsList = (params: Params) => {
  return axiosApi.get<{data: Array<ItemList>}>('/news-items-list', {
    params: params,
  });
};

export const sendEmail = (data: EmailParams) => {
  return axiosApi.post<{data: Array<ItemList>}>('/send/email', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'JSESSIONID=21FDC2B9C2782893562BC53D52981A0B',
    },
  });
};


export const getMainBlockData = async (params: Params, section?: string) => {
  const mainSection = await getOutstandingBlock(params);

  const getNews = async (size: number) => {
    return await getNewsListZone({
      zone: 'destacadas',
      size: size,
      onmainpage: section ? 'section' : undefined,
      section: section,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:802,h:449,t:2;w:412,h:231,t:2;',
    });
  };

  const getAltoNews = async (size: number) => {
    return await getNewsListZone({
      zone: 'destacadas',
      size: size,
      onmainpage: section ? 'section' : undefined,
      section: section,
      newstype: 'news,listas,liveblog',
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:1185,h:613,t:2;w:380,h:548,t:2;',
    });
  };

  switch (mainSection.data.data[0].value) {
  case 'Destacado Diario':
    const response1 = await getNews(5);
    return {
      section: mainSection.data.data,
      news: response1.data,
    };
  case 'Destacado Alto Impacto':
    const response2 = await getAltoNews(1);
    return {
      section: mainSection.data.data,
      news: response2.data,
    };
  default:
    return {
      section: mainSection.data.data,
    };
  }
};

export const getBlockSass = async (params: Params) => {
  const blockSass = await axiosApi.get<{ data: Array<BlockSaasResponse> }>(
    '/config/blocks-saas',
    {
      params: params,
    }
  );

  const show = blockSass.data.data[0].block;

  switch (show) {
  case 'Zona Tag':
    const tag = await getNewsListTag({
      tagid: blockSass.data.data[0].value,
      tagtype: Number(process.env.CLEINT_TAG_TYPE),
      size: Number(blockSass.data.data[0].size),
      newstype: 'news,listas,liveblog',
      exclude:
          'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:185,t:2',
    });
    return {
      blockSass: blockSass.data.data,
      news: tag.data,
    };
  case 'Zona Seccion':
    const sections = await getNewsListSection({
      section: blockSass.data.data[0].value,
      size: Number(blockSass.data.data[0].size),
      newstype: 'news,listas,liveblog',
      exclude:
          'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:185,t:2',
    });
    return {
      blockSass: blockSass.data.data,
      news: sections.data,
    };
  default:
    return {
      blockSass: blockSass.data.data,
    };
  }
};


export const searchData = async (params: Params) => {
  const search = await getNewsSearch(params);

  if (search.data.data && search.data.data.length >0) {
    return {
      search,
    };
  } else {
    const lastNews = await getNewsList({
      size: 15,
      exclude: 'keywords,gallery,related,relatedexternal,external,customfields',
      imagesizes: 'w:343,h:193,t:2',
      newstype: 'news,listas,liveblog',
    });
    return {
      lastNews,
    };
  }
};
