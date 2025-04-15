'use client'; // Axios Api
// import BlockNews1 from '@/app/_components/blocks/block-news-1';
import {getEnvironmentUrlFront} from '@/app/_setup/helpers/getEnviromentUrl';
import {
  NewListResponse,
  NewListResponseData,
} from '@/app/_setup/types/new-list-response';
import axios from 'axios';
import {FC, ReactNode, useCallback, useEffect, useState} from 'react';

type Props = {
  section: string;
  currentNews: NewListResponseData;
  banner?: ReactNode;
};

export const MasNoticias: FC<Props> = ({section, currentNews, banner}) => {
  console.log(banner);
  const [news, setNews] = useState<NewListResponse>();
  console.log(news);
  const getNews = useCallback(async () => {
    try {
      const response = await axios.get<NewListResponse>(
        `${getEnvironmentUrlFront()}/hit/5.0/1/news-list-section`,
        {
          params: {
            size: 6,
            newstype: 'news,listas,liveblog',
            section,
            imagesizes: 'w:343,h:193,t:2',
            publication: 27,
          },
          headers: {
            'Content-Type': 'application/json',
            'x-api-token': 'wj5oeACJStV3exBvodMa',
          },
        }
      );
      console.log(response);
      setNews({
        ...response.data,
        data: response.data.data.filter(
          (item) => item.info.link.internal !== currentNews.info.link.internal
        ).slice(0, 5) || [],
      });
    } catch (e) {
      console.log(e);
      setNews(undefined);
    }
  }, [section, currentNews]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return <div>placeholder</div>;
  // return (
  //   news?.data &&
  //   news.data.length > 0 && (
  //     <BlockNews1 news={news.data} title="Más Noticias" showSubtitle rounded banner={banner}/>
  //   )
  // );
};
