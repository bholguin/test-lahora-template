import {FC} from 'react';
import styles from './styles.module.css';
import {AutorIcon} from '@/app/_assets/icons/Autor';

interface JournalistArticuleProps {
  journalist: string;
  aticle: string;
}

export const JournalistArticule: FC<JournalistArticuleProps> = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.avatarContent}>
        <div className={styles.avatarStyled}>
          <AutorIcon />
        </div>
        <p className={styles.journalistInfo}>{props.journalist}</p>
      </div>
      <p className={styles.article}>{props.aticle}</p>
    </div>
  );
};
