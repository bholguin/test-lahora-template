import {FC, ReactNode} from 'react';
import Section from '../../client-components/section';
import {SectionCard} from '../../client-components/cards/section-card-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface BlockNews1Props {
  title: ReactNode;
  news: Array<NewListResponseData>;
  share?: boolean;
  showSubtitle?: boolean;
  rounded?: boolean;
  bannerArray?: ReactNode[];
  halfPageBanner?: ReactNode;
}

const BlockNews3: FC<BlockNews1Props> = (props) => {
  const {news, title} = props;
  return (
    Array.isArray(news) && (
      <Section title={title}>
        <div className={styles.content}>
          <div className={styles.newsContent}>
            {props.bannerArray && props.bannerArray.map((banner, i)=>(
              <div className={styles.boxPosition} key={i} style={{order: 2 + (5 * i)}} >
                <div className={styles.bannerContentAux}>
                  <div
                    style={{
                      position: 'absolute',
                      height: '270px',
                      top: '0',
                    }}
                  >
                    {banner}
                  </div>
                </div>
              </div>
            ))}
            {news.map((item, index) => (
              <div className={styles.boxPosition} style={{order: index}} key={index}>
                <SectionCard
                  {...item}
                  rounded={props.rounded}
                  showSubtitle={props.showSubtitle}
                  share={props.share}
                />
              </div>
            ))}
          </div>
          <div className={styles.bannerContent}>{props.halfPageBanner}</div>
        </div>
      </Section>
    )
  );
};

export default BlockNews3;
