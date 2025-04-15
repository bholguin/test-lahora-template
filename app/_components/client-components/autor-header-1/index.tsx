import {FC} from 'react';
import {AutorInfo} from '@/app/_setup/types/services';
import {AutorIcon} from '@/app/_assets/icons/Autor';
import styles from './styles.module.css';
import {FaceBook} from '@/app/_assets/icons/FaceBook';
import {Instagram} from '@/app/_assets/icons/Instagram';
import {X} from '@/app/_assets/icons/X';
import {LinkedIn} from '@/app/_assets/icons/LinkedIn';

type Props = {
  autor: AutorInfo;
};

export const AutorHeader1: FC<Props> = (props) => {
  const {autor} = props;
  return (
    <section className={styles.content}>
      <div className={styles.contentInfo}>
        {autor.info.image ? (
          <img
            alt=""
            className={styles.imageStyled}
            src={`${process.env.NEXT_PUBLIC_API_HOST}${autor.info.image.sizes[0].url}`}
          />
        ) : (
          <div className={styles.contentIconStyled}>
            <AutorIcon />
          </div>
        )}

        <h1 className={styles.name}>{autor.info.fullname}</h1>
        {autor.addtional.USER_SHOWEMAIL && (
          <p className={styles.email}>{autor.info.email}</p>
        )}
        {autor.addtional.USER_SHOWBIO && (
          <p className={styles.description}>{autor.addtional.USER_MIBIO}</p>
        )}
        <div className={styles.contenSocialNetwork}>
          {autor.addtional.USER_USERFB && (
            <a href={autor.addtional.USER_USERFB} target="_blank">
              <FaceBook className={styles.socialIcon} />
            </a>
          )}
          {autor.addtional.USER_USERIG && (
            <a href={autor.addtional.USER_USERIG} target="_blank">
              <Instagram className={styles.socialIcon} />
            </a>
          )}
          {autor.addtional.USER_USERTWT && (
            <a href={autor.addtional.USER_USERTWT} target="_blank">
              <X className={styles.socialIcon} />
            </a>
          )}
          {autor.addtional.USER_USERLIN && (
            <a href={autor.addtional.USER_USERLIN} target="_blank">
              <LinkedIn className={styles.socialIcon} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
