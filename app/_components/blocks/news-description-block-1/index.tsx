/* eslint-disable camelcase */
import {FC} from 'react';
import NewsDescription from '../../client-components/news-description';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';

export interface NewDescriptionBlockProps {
  showImg?: boolean;
  block: Array<NewListResponseData>;
  fontSizeTitle?: string;
  lineHeightTitle?: string;
  fontSizeTitleMobile?: string;
  lineHeightTitleMobile?: string;
}

export const NewDescriptionBlock: FC<NewDescriptionBlockProps> = (props) => {
  const {showImg = false} = props;
  return (
    <section className={styles.content}>
      {props.block.map(async (item, index) => (
        <div className={styles.contentNew} key={`description-block-${index}`}>
          {showImg && (
            <div className={styles.imageBox}>
              <div className={styles.numberTag}>{index + 1}</div>
              <img
                alt={item.main.title.home}
                src={
                  Array.isArray(item.preview.sizes) ?
                    await getImageUrl(item.preview.sizes[0].url):
                    undefined
                }
              />
            </div>
          )}
          <NewsDescription
            {...item}
            fontSizeTitle={props.fontSizeTitle}
            lineHeightTitle={props.lineHeightTitle}
            fontSizeTitleMobile={props.fontSizeTitleMobile}
            lineHeightTitleMobile={props.lineHeightTitleMobile}
          />
        </div>
      ))}
    </section>
  );
};
