import getNewsData from '@/app/_setup/actions/getNewsData';
import {getTypeOfNews} from './hook';
import NewsComponent from '@/app/_components/server-components/news/news.component.server';

export type Props = {
  params: { slug: string; news: string };
};

const News = async (props: Props) => {
  const path = getTypeOfNews(props);
  const result = await getNewsData(path);

  return (
    <NewsComponent
      {...result}
      pageProps={props.params}
      path={path}
    />
  );
};

export default News;
