import {FC} from 'react';
import styles from './styles.module.css';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';

type Props = {
  tag: string;
  description: string;
  img: string;
};

export const TagHeader1: FC<Props> = async (props) => {
  const image = props.img ? await getImageUrl(props.img) : '';
  return (
    <section className={styles.content}>
      <div className={styles.contentInfo}>
        {props.img && <img className={styles.imageStyled} src={image} />}
        <h1 className={styles.name}>{props.tag}</h1>
        {props.description && (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: props.description,
            }}
          />
        )}
      </div>
    </section>
  );
};
