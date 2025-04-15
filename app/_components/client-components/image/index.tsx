
import {FC} from 'react';
import {Preview} from '@/app/_setup/types/new-list-response';
import ImageOnline from './image-online';

export interface ImageProps {
  preview: Preview;
  isVideo?: boolean;
  rounded?: boolean;
  isLarge?: boolean;
  hasShadow?: boolean;
  BackDropAuxHeigthMobile?: string;
}

const Image: FC<ImageProps> = (props) => {
  return <ImageOnline {...props} />;
};

export default Image;
