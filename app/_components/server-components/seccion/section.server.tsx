import {FC, Fragment} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {LayoutNewsComponent} from '../../client-components/content/layout-news-content';
import {NewsContent} from '../../client-components/content/news-content';
import {NextPrev} from '../../client-components/next-prev';
import {BannerResponse} from '@/app/_setup/types/services';
import BannerAdvertising from '../../client-components/banner-advertising';
import {SectionCardServerComponent} from './section.card.server';
import styles from './styles.module.css';

type Props = {
  option: string;
  slug: string;
  currentPage: number;
  data: Array<NewListResponseData>;
  banners?: BannerResponse[];
  ranking: Array<NewListResponseData>;
  PAGINATION_MAX_PAGES: number
  NEWS_PER_SECTION: number
};

export const SectionServerComponent: FC<Props> = (props) => {
  const {data, currentPage, banners, slug, ranking} = props;
  const indexes = [3, 8, 13];
  const bannerPosition: any = {
    3: 1,
    8: 2,
    13: 3,
  };

  switch (props.option) {
  case 'op1':
    return (
      <LayoutNewsComponent
        ranking={ranking}
        banner={
          <BannerAdvertising banners={banners ?? []} name="halfpage_1" />
        }
      >
        <section className={styles.content}>
          <NewsContent
            className={styles.newsContentSection}
            paginatorComponent={
              <NextPrev
                currentPage={currentPage}
                maxPages={props.PAGINATION_MAX_PAGES}
                showNext={!(data.length < props.NEWS_PER_SECTION)}
              />
            }
          >
            {Array.isArray(data) &&
                data?.map((item, index) => (
                  <Fragment key={index}>
                    {indexes.includes(index + 1) && (
                      <div className={styles.itemContent}>
                        <BannerAdvertising
                          banners={banners ?? []}
                          name={`rectangle_${bannerPosition[index + 1]}`}
                        />
                      </div>
                    )}
                    <SectionCardServerComponent
                      key={index}
                      item={item}
                      option={slug}
                    />
                  </Fragment>
                ))}
          </NewsContent>
        </section>
      </LayoutNewsComponent>
    );
  case 'op2':
    return (
      <NewsContent
        paginatorComponent={
          <NextPrev
            currentPage={currentPage}
            maxPages={props.PAGINATION_MAX_PAGES}
            showNext={!(data.length < props.NEWS_PER_SECTION)}
          />
        }
      >
        {Array.isArray(data) &&
            data?.map((item, index) => (
              <Fragment key={index}>
                {indexes.includes(index + 1) && (
                  <div className={styles.itemContent}>
                    <BannerAdvertising
                      banners={banners ?? []}
                      name="rectangle_1"
                    />
                  </div>
                )}
                <SectionCardServerComponent
                  key={index}
                  item={item}
                  option={slug}
                />
              </Fragment>
            ))}
      </NewsContent>
    );
  default:
    return <></>;
  }
};
