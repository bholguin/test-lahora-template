
import {FC} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {cutString} from '@/app/_setup/helpers/cutString';
import {AutorIcon} from '@/app/_assets/icons/Autor';
import styles from './styles.module.css';
export interface OpinionCardProps {
  data: NewListResponseData;
}

export const OpinionCard1: FC<OpinionCardProps> = (props) => {
  const {data} = props;

  return (
    <div className={styles.content}>
      {Array.isArray(data.authors) && data?.authors[0]?.image ? (
        <img className={styles.imageStyled}
          src={`${process.env.NEXT_PUBLIC_API_HOST}${data?.authors[0]?.image}`}
          alt={data?.authors[0]?.fullname}
        />
      ) : (
        <div className={styles.contentIcon}>
          <AutorIcon />
        </div>
      )}
      <div className={styles.boxInformation}>
        <p className={styles.authorName}>{data?.authors[0]?.fullname}</p>
        <p className={styles.title}>{cutString(data?.main?.title?.home, 30)}</p>
        <p className={styles.comment}>
          {cutString(data?.main?.subtitle?.striped, 70)}
        </p>
        <p className={styles.dateText}>
          {dayjs(data.info.date.modified).locale('es').format('DD [De] MMMM')}
        </p>
      </div>
    </div>
  );
};
