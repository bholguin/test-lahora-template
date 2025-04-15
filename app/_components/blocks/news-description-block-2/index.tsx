import {FC, ReactNode} from 'react';
import NewsDescription, {
  NewsDescriptionProps,
} from '../../client-components/news-description';
import Section from '../../client-components/section';
import styles from './styles.module.css';
export interface NewsDescriptionBlock2Props {
  title: string;
  titleUrl?: string;
  banner?: ReactNode;
  halfPageBanner?: ReactNode;
  block: Array<NewsDescriptionProps>;
}
export const NewsDescriptionBlock2: FC<NewsDescriptionBlock2Props> = (
  props
) => {
  return (
    <Section title={props.title} titleUrl={props.titleUrl}>
      <div className={styles.content}>
        <div className={styles.newsContent}>
          <div className={styles.contentFlex}>
            <div className={styles.boxPosition} style={{order: 1}}>
              <div className={styles.bannerContentAux}>
                <div
                  style={{
                    position: 'absolute',
                    height: '270px',
                    top: '0',
                  }}
                >
                  {props.banner}
                </div>
              </div>
            </div>
            {props.block
              .filter((_item, index) => index % 2 !== 0)
              .map((item, index) => (
                <div
                  className={styles.boxPosition}
                  style={{order: index}}
                  key={`description-block-2-odd-${index}`}
                >
                  <NewsDescription showSubtitle {...item} />
                </div>
              ))}
          </div>
          <div className={styles.contentFlex}>
            {props.block
              .filter((_item, index) => index % 2 === 0)
              .map((item, index) => (
                <div
                  className={styles.boxPosition}
                  style={{order: index}}
                  key={`description-block-2-${index}`}
                >
                  <NewsDescription showSubtitle {...item} />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.bannerContent}>
          {props.halfPageBanner}
          {props.banner}
        </div>
      </div>
    </Section>
  );
};
