/* eslint-disable import/max-dependencies */
import BannerAdvertising from '@/app/_components/client-components/banner-advertising';
import BannerAdvertisingMiddle from '@/app/_components/client-components/banner-advertising-middle';
import {LayoutNotesComponent} from '@/app/_components/client-components/content/layout-note-content';
import {JournalistArticule2} from '@/app/_components/client-components/journalist-articule-2';
import {TagSection} from '@/app/_components/client-components/tags-section';
import {FooterComponent} from '@/app/_components/server-components/common/footer.server';
import HeaderComponent from '@/app/_components/server-components/common/header.server';
import {HeaderSectionComponent} from '@/app/_components/server-components/news/header.section.server';
import {SectionRigthNewsComponent} from '@/app/_components/server-components/news/rigth.section.server';
import styles from './styles.module.css';
import Schemas from '@/app/_components/server-components/schemas/pages/article';
import {
  AutorInfo,
  BannerResponse,
  MenuResponse,
} from '@/app/_setup/types/services';
import {
  ItemList,
  NewListResponseData,
} from '@/app/_setup/types/new-list-response';
import {RelatedNews} from './components/noticias-relacionadas';
import {MasNoticias} from './components/mas-noticias';
import {ContentLayout2} from '../../client-components/content-layout-2';
import {LazyLoader} from './components/LazyLoader';
import Section from '../../client-components/section';
import BannerClient from './components/mas-noticias/BannerClient';

type Props = {
  menu: MenuResponse[];
  sidebar: MenuResponse[];
  footer: MenuResponse[];
  freeZone: MenuResponse[];
  cintillo: MenuResponse[];
  ranking: NewListResponseData[];
  banners: BannerResponse[];
  news: NewListResponseData[];
  autor: AutorInfo[];
  newsRelatedResponses: (NewListResponseData[] | undefined)[];
  itemList: ItemList[];
  pageProps: { slug: string; news: string };
  path: string;
};

const NewsComponent = async (props: Props) => {
  const {
    menu,
    sidebar,
    footer,
    freeZone,
    cintillo,
    ranking,
    banners,
    news,
    autor,
    newsRelatedResponses,
    itemList,
  } = props;

  return (
    <>
      <Schemas
        newsData={news[0]}
        newsRelated={newsRelatedResponses[0] ? newsRelatedResponses[0] : []}
      />
      {/*       <FormatScripts
        headscripts={
          banners.find((item) => item.key === 'headscripts')?.value ?? ''
        }
        bodybefore={
          banners.find((item) => item.key === 'bodybefore')?.value ?? ''
        }
      /> */}
      <HeaderComponent
        sidebar={sidebar}
        menu={menu}
        cintillo={cintillo}
        tapeTitle="Ediciones"
      >
        <ContentLayout2>
          <HeaderSectionComponent option={props.pageProps.slug} news={news} />
          <BannerAdvertisingMiddle banners={banners} index={1} />
          <LayoutNotesComponent
            pageProps={props.pageProps}
            itemList={props.itemList}
            ranking={ranking}
            bannerTop={
              <BannerAdvertising banners={banners ?? []} name="rectangle_1" />
            }
            banner={
              <BannerAdvertising banners={banners ?? []} name="halfpage_1" />
            }
            complement={
              <div>
                {autor.length > 0 && <JournalistArticule2 autor={autor[0]} />}
                <div className={styles.tagContent}>
                  <TagSection tags={news[0].keywords?.tags} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                  }}
                >
                  <Section title='Noticias Relacionadas'>
                    <LazyLoader>
                      <RelatedNews path={props.path} />
                    </LazyLoader>
                  </Section>
                  <Section title="Más Noticias">
                    <LazyLoader>
                      <MasNoticias
                        section={props.pageProps.slug}
                        currentNews={news[0]}
                        banner={
                          <BannerClient
                            banners={banners ?? []}
                            name="rectangle_1"
                          />
                        }
                      />
                    </LazyLoader>
                  </Section>
                </div>
              </div>
            }
          >
            <SectionRigthNewsComponent
              option="op2"
              news={news}
              banners={banners}
              newsRelatedResponses={newsRelatedResponses}
              itemList={itemList}
              pageProps={props.pageProps}
            />
          </LayoutNotesComponent>
        </ContentLayout2>
      </HeaderComponent>
      <FooterComponent menu={footer} freeZone={freeZone} />
    </>
  );
};

export default NewsComponent;
