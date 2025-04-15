import {FC} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import Image from '../image';
import styles from './styles.module.css';


export const ImageNews: FC<NewListResponseData> = (props) => {
  const getAutorDescription = () => {
    if (props?.config?.showtime && props.config?.showauthor) {
      return `${props?.authors[0]?.fullname} - ${formatDate(props.info?.date?.modified)}`;
    } else if (props.config?.showauthor) {
      return props?.authors[0]?.fullname;
    } else if (props?.config?.showtime) {
      return formatDate(props.info?.date?.modified);
    }
  };

  return (
    <section className={styles.content}>
      <a
        href={props?.info?.link?.url}
        target={props?.info?.link?.target}
      >
        <Image
          preview={props.preview}
          isLarge
          BackDropAuxHeigthMobile='516px'
          rounded
        />
      </a>

      <div className={styles.contentNews}>
        <a className={styles.tag} href={props?.info?.section?.url}>
          {props?.info?.section?.name}
        </a>
        <a
          className={styles.linkTitle}
          href={props?.info?.link?.url}
          target={props?.info?.link?.target}
        >
          <h1 className={styles.titular}>{props?.main?.title?.home}</h1>
        </a>
        {(props?.config?.showtime && props.config?.showauthor) && (
          <>
            {props.authors[0]?.internaluser ? (
              <a
                href={`/autor/${props?.authors[0]?.name}`}
                className={styles.correspondent}
              >
                {getAutorDescription()}
              </a>
            ) : (
              <p className={styles.correspondentLink}>
                {getAutorDescription()}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};
