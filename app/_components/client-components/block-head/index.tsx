import {FC} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

export interface BlockHeadProps {
  mainNew: NewListResponseData;
  goTo?: {
    url: string;
    description: string;
  };
}

export const BlockHead: FC<BlockHeadProps> = (props) => {
  return (
    <div className={styles.content}>
      <a
        className={styles.title}
        href={props?.mainNew?.info?.link?.url}
        target={props?.mainNew?.info?.link?.target}
      >
        {props?.mainNew?.main?.title.home}
      </a>
      {props?.mainNew?.main?.subtitle?.rendered && (
        <p className={styles.subtitle}>
          {props?.mainNew?.main?.subtitle?.striped}
        </p>
      )}
      {props.goTo && (
        <a href={props.goTo.url} className={styles.linkStyled}>
          {props.goTo.description}
        </a>
      )}
    </div>
  );
};
