
import NewsArticle from '../modules/news.articule.server';
import BreadCrumbs from '../modules/breadcrumbs.server';
import NewsList from '../modules/news.list.server';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export default function Schemas({
  newsData,
  newsRelated,
}: {
  newsData: NewListResponseData;
  newsRelated: NewListResponseData[];
}) {
  return (
    <>
      <NewsArticle newsData={newsData} />
      <BreadCrumbs newsData={newsData} />
      <NewsList newsRelated={newsRelated} />
    </>
  );
}
