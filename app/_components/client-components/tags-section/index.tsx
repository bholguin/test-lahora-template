import {FC} from 'react';
import {Tag} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface TagSectionProps {
  tags?: Array<Tag>;
}

export const TagSection: FC<TagSectionProps> = (props) => {
  const buildUrl = (tag: Tag) => {
    const url = tag.name.replace(/[^\w\s]/gi, '').replaceAll(' ', '-').toLowerCase();
    return `/tema/${url}-t${tag.id}`;
  };

  return (
    <section className={styles.content}>
      {Array.isArray(props.tags) && (
        <div className={styles.tags}>
          <p className={styles.tagStyled}>Tags:</p>
          {props.tags.map((item, index) => {
            return item.approved ? (
              <a key={index} href={buildUrl(item)}>
                <div
                  className={styles.chipStyled}
                  style={{textDecoration: 'underline'}}
                >
                  {item.name}
                </div>
              </a>
            ) : (
              <div className={styles.chipStyled}>
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
