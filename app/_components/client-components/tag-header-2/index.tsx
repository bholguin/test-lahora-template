import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
  tag: string;
  description: string;
};

export const TagHeader2: FC<Props> = (props) => {
  return (
    <section className={styles.content}>
      <div className={styles.contentInfo}>
        <h1 className={styles.name}>{props.tag}</h1>
        {props.description && <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        />}
      </div>
    </section>
  );
};
