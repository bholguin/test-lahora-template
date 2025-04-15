import {FC} from 'react';
import {VideoBlock1} from '../../blocks/block-video-1';
import {VideoBlock2} from '../../blocks/block-video-2';
import {VideoResponseData} from '@/app/_setup/types/services';

type Props = {
  option: string;
  data: Array<VideoResponseData>;
};

export const VideoSection: FC<Props> = (props) => {
  switch (props.option) {
  case 'op1':
    return <VideoBlock1 videos={props.data}/>;
  case 'op2':
    return <VideoBlock2 video={props.data[0]}/>;
  default:
    return <></>;
  }
};
