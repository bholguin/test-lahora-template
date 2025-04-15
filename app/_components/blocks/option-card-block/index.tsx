import {FC, ReactNode} from 'react';
import Section from '../../client-components/section';
import {OpinionCard2} from '../../client-components/cards/opinio-card-2';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import styles from './styles.module.css';

interface OptionCardBlockProps {
  title: ReactNode;
  banner?: ReactNode;
  titleUrl?: string;
  halfPageBanner?: ReactNode;
  block: Array<NewListResponseData>;
}

export const OptionCardBlock: FC<OptionCardBlockProps> = (props) => {
  return (
    <Section title={props.title} titleUrl={props.titleUrl} isOpinion>
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
                <div className={styles.boxPosition} style={{order: index}}

                  key={`description-block-2-odd-${index}`}
                >
                  <OpinionCard2 data={item} />
                </div>
              ))}
          </div>
          <div className={styles.contentFlex}>
            {props.block
              .filter((_item, index) => index % 2 === 0)
              .map((item, index) => (
                <div className={styles.boxPosition} style={{order: index}}
                  key={`description-block-2-${index}`}
                >
                  <OpinionCard2 data={item} />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.bannerContent}>{props.halfPageBanner}</div>
      </div>
    </Section>
  );
};
