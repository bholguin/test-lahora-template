/* eslint-disable camelcase */

import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import {AutorIcon} from '@/app/_assets/icons/Autor';
import {cutString} from '@/app/_setup/helpers/cutString';
import {formatDate} from '@/app/_setup/helpers/dateFormat';
import styles from './styles.module.css';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';

interface OpinionCardProps {
  data: NewListResponseData;
}

export const OpinionCard2: FC<OpinionCardProps> = async (props) => {
  const {data} = props;

  const getAutorDescription = () => {
    if (data?.config?.showtime) {
      return `${formatDate(data.info?.date?.modified)}`;
    }
    return '';
  };

  const autorContent = <div className={styles.autorContent}>
    {Array.isArray(data?.authors) && data?.authors[0]?.image?.sizes?.length > 0 ? (
      <img
        className={styles.image}
        src={await getImageUrl(data?.authors[0]?.image?.sizes[0]?.url)}
        alt={data?.authors[0]?.fullname}
      />
    ) : (
      <div className={styles.contentIcon}>
        <AutorIcon />
      </div>
    )}
    <p className={styles.autorName}>{data?.authors[0]?.fullname}</p>
    <p className={styles.time}>{getAutorDescription()}</p>
  </div>;

  return (
    <div className={styles.content}>
      {data?.authors[0]?.internaluser ? (
        <a
          href={
            data.authors[0]?.internaluser ?
              `/autor/${data?.authors[0]?.name}` :
              '#'
          }
        >
          {autorContent}
        </a>
      ) :
        autorContent
      }

      <div className={styles.boxInformationContent}>
        <a className={styles.title}
          href={data?.info?.link?.url}
          target={data?.info?.link?.target}
        >
          {data?.main?.title?.home}
        </a>
        <p className={styles.comment}>
          {cutString(data?.main?.subtitle?.striped || '')}
        </p>
      </div>
    </div>
  );
};
