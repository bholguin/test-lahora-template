import {FC, Fragment} from 'react';
import {AutorHeader1} from '../../client-components/autor-header-1';
import {AutorHeader2} from '../../client-components/autor-header-2';
import {LayoutNewsComponent} from '../../client-components/content/layout-news-content';
import {NewsContent} from '../../client-components/content/news-content';
import {SectionCard} from '../../client-components/cards/section-card-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {AutorInfo, BannerResponse} from '@/app/_setup/types/services';
import {NextPrev} from '../../client-components/next-prev';
import BannerAdvertising from '../../client-components/banner-advertising';
import {ContentLayoutTema} from '../tema/content-layout-tema.server';

type Props = {
  option: string;
  autor: Array<AutorInfo>;
  data: Array<NewListResponseData>;
  page: number;
  banners?: BannerResponse[];
};

const AutorComponent: FC<Props> = (props) => {
  const {data, option, autor, page, banners} = props;
  const indexes = [5, 10, 15];

  const bannerPosition: any = {
    5: 1,
    10: 2,
    15: 3,
  };

  switch (option) {
  case 'op1':
    return (
      <>
        <ContentLayoutTema>
          <AutorHeader1 autor={autor[0]} />
          <LayoutNewsComponent banner={[]} ranking={[]}>
            <NewsContent
              paginatorComponent={
                <NextPrev
                  maxPages={Number(process.env.PAGINATION_MAX_PAGES)}
                  currentPage={Number(page)}
                  showNext={
                    !(
                      (data.length ?? 0) <
                        Number(process.env.NEWS_PER_SECTION)
                    )
                  }
                />
              }
            >
              {Array.isArray(data) &&
                  data?.map((item, index) => (
                    <Fragment key={index}>
                      {indexes.includes(index + 1) && (
                        <BannerAdvertising
                          banners={banners ?? []}
                          name={`rectangle_${bannerPosition[index + 1]}`}
                        />
                      )}
                      <SectionCard key={index} {...item} rounded />
                    </Fragment>
                  ))}
            </NewsContent>
          </LayoutNewsComponent>
        </ContentLayoutTema>
      </>
    );
  case 'op2':
    return (
      <>
        <ContentLayoutTema>
          <AutorHeader2 autor={autor[0]} />
          <br/>
          <br/>
          <NewsContent
            paginatorComponent={
              <NextPrev
                maxPages={Number(process.env.PAGINATION_MAX_PAGES)}
                currentPage={Number(page)}
                showNext={
                  !((data.length ?? 0) < Number(process.env.NEWS_PER_SECTION))
                }
              />
            }
          >
            {Array.isArray(data) &&
                data?.map((item, index) => (
                  <Fragment key={index}>
                    {indexes.includes(index + 1) && (
                      <BannerAdvertising
                        banners={banners ?? []}
                        name={`rectangle_${bannerPosition[index + 1]}`}
                      />
                    )}
                    <SectionCard key={index} {...item} rounded />
                  </Fragment>
                ))}
          </NewsContent>
        </ContentLayoutTema>
      </>
    );
  default:
    return <></>;
  }
};

export default AutorComponent;
