import {FreeZoneResponse} from '@/app/_setup/types/services';
import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
  data: FreeZoneResponse[];
};

export const ContactInfoServer: FC<Props> = (props) => {
  const {data} = props;
  return (
    <section className={styles.content}>
      {data.map((item, index) => (
        <div
          className='contactInfoContent'
          key={index}
          dangerouslySetInnerHTML={{
            __html: item.body.rendered,
          }}
        />
      ))}
    </section>
  );
};
