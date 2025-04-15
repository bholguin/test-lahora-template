import {FC} from 'react';
import {RigthSide1} from './blocks/left-side-1';
import {RigthSide2} from './blocks/left-side-2';
import {ItemList, NewListResponseData} from '@/app/_setup/types/new-list-response';
import {BannerResponse} from '@/app/_setup/types/services';

type Props = {
  option: 'op1' | 'op2';
  news: Array<NewListResponseData>;
  banners: Array<BannerResponse>;
  newsRelatedResponses?: Array<Array<NewListResponseData> | undefined>;
  itemList: Array<ItemList>
  pageProps: { slug: string; news: string };
};

export const SectionRigthNewsComponent: FC<Props> = (props) => {
  switch (props.option) {
  case 'op1':
    return <RigthSide1 />;
  case 'op2':
    return (
      <RigthSide2
        news={props.news[0]}
        banners={props.banners}
        newsRelatedResponses={props.newsRelatedResponses}
        itemList={props.itemList}
        pageProps={props.pageProps}
      />
    );
  default:
    return <></>;
  }
};
