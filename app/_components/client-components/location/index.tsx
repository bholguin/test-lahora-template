import {Place} from '@/app/_assets/icons/Place';
import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
    place: string
}

export const Location: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <Place />
      <p className={styles.location}>{props.place}</p>
    </div>
  );
};
