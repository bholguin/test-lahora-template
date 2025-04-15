import {FC} from 'react';
import NewsDescription, {
  NewsDescriptionProps,
} from '../../client-components/news-description';
import styles from './styles.module.css';

type Props = {
  showTitle?: boolean;
} & NewsDescriptionProps;

export const EditorialBlock: FC<Props> = (props) => {
  const {showTitle = true} = props;
  return (
    <div className={styles.content}>
      {showTitle && <p className={styles.title}>Editorial</p>}
      <NewsDescription
        {...props}
        info={{
          ...props.info,
          section: {
            name: '',
            slug: '',
            url: '',
          },
        }}
      />
    </div>
  );
};
