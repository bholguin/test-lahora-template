import {FC} from 'react';
import {ImageNews} from '../../client-components/image-news-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export const MainBlock2: FC<NewListResponseData> = (props) => {
  return <ImageNews {...props} />;
};
