import {FC} from 'react';
import Image from '../image';
import {Preview} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';
interface ImageNews2Props {
  preview: Preview;
  rounded?: boolean
}

export const ImageNews2: FC<ImageNews2Props> = (props) => {
  let desc = '';
  if (props.preview.description) {
    desc = props.preview.description;
  }
  if (props.preview.copyright) {
    desc = `${desc} ${props.preview.copyright}`;
  }
  if (props.preview.photographer) {
    desc = `${desc} ${props.preview.photographer}`;
  }
  return (
    <div className={styles.content}>
      <Image preview={props.preview} isLarge rounded={props.rounded}/>
      {desc && <div className={styles.description}>{desc}</div>}
    </div>
  );
};
