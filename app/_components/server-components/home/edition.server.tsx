/* eslint-disable import/max-dependencies */
import BlockNews1 from '../../../_components/blocks/block-news-1';
import BlockNews3 from '../../../_components/blocks/block-news-3';
import BlockVideos1 from '../../../_components/blocks/block-videos-1';
import {EditorialBlock} from '../../../_components/blocks/editorial-block-1';
import BlockNews4 from '../../../_components/blocks/main-block-4';
import {NewsDescriptionBlock2} from '../../../_components/blocks/news-description-block-2';
import {OptionCardBlock} from '../../../_components/blocks/option-card-block';
import {SectionBlockCarousel} from '../../../_components/blocks/section-block-carousel';
import BannerAdvertising from '../../../_components/client-components/banner-advertising';
import {SectionCard5} from '../../../_components/client-components/cards/section-card-5';
import {ContentLayout1} from '../../../_components/client-components/content-layout-1';
import {Location} from '../../../_components/client-components/location';
import {MiddleSection} from '../../../_components/client-components/middle-section';
import {ShowSection} from '../../../_components/client-components/show-section';
import {SubscribeWhatsAppColumn} from '../../../_components/client-components/suscribed/subscribe-whatsapp';
import HeaderComponent from '../../../_components/server-components/common/header.server';
import {FooterComponent} from '../../../_components/server-components/common/footer.server';
import BannerAdvertisingMiddle from '../../client-components/banner-advertising-middle';
import {Readest} from '../../client-components/readest';
import getEdicionesData from '@/app/_setup/actions/getEdicionesData';
import {MainBlock1} from '../../blocks/main-block-1';
import {EDITION_OPTIONS} from '@/app/_setup/config/client/editions';
import {notFound} from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default async function Ediciones(props: Props) {
  const edicionOption = EDITION_OPTIONS.find((item) => item.slug === props.params.slug);
  if (!edicionOption) {
    throw notFound();
  }
  const {
    menu,
    sidebar,
    cintillo,
    freeZone,
    alertZone,
    mainBlock,
    videoBlock,
    banners,
    noPerder,
    pais,
    provincias,
    recomendados,
    opinion,
    mundo,
    caricaturas,
    edicion,
    editorial,
    footer,
    ranking,
    deportes,
    opinionNacional,
  } = await getEdicionesData(props.params.slug);

  const mainNews = mainBlock?.data.data || [];

  return (
    <>
      {/*      <FormatScripts
        headscripts={
          banners.find((item) => item.key === 'headscripts')?.value ?? ''
        }
        bodybefore={
          banners.find((item) => item.key === 'bodybefore')?.value ?? ''
        }
      /> */}
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        cintillo={cintillo}
        tapeTitle="Ediciones"
        alertZone={alertZone ?? undefined}
      >
        <ContentLayout1>
          <div style={{marginBottom: '14px'}}>
            <Location place={edicionOption.title} />
          </div>
          <ShowSection show={!!mainBlock && mainBlock.data.data.length > 0}>
            <MainBlock1
              {...mainNews[0]}
              rounded
              fontSizeTitle="34px"
              lineHeightTitle="42px"
              hasShadow
              variant="primary"
              isLarge
              isTitle
              block={mainNews.slice(1)}
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={1} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion provincias*/}
          <ShowSection show={!!provincias && provincias.length> 0}>
            <BlockNews3
              news={provincias}
              title={`Más noticias de\n${edicionOption.title}`}
              bannerArray={[
                <BannerAdvertising key={0} banners={banners} name="rectangle_1" />,
              ]}
              halfPageBanner={<Readest ranking={ranking} title="Ranking" />}
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={2} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion pais*/}
          <ShowSection show={!!pais && pais.length > 0}>
            <NewsDescriptionBlock2
              title="País"
              block={pais}
              banner={
                <BannerAdvertising banners={banners} name="rectangle_2" />
              }
              halfPageBanner={
                <BannerAdvertising banners={banners} name="halfpage_1" />
              }
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={3} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de Opinion Columnistas Regionales*/}
          <ShowSection show={!!opinion && opinion.length > 0}>
            <OptionCardBlock
              block={opinion}
              title={'Columnistas Regionales'}
              banner={
                <BannerAdvertising banners={banners} name="rectangle_3" />
              }
              halfPageBanner={
                <>
                  <BannerAdvertising banners={banners} name="halfpage_2" />
                </>
              }
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={4} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de Opinion Columnistas Nacionales*/}
          <ShowSection show={!!opinionNacional && opinionNacional.length > 0}>
            <OptionCardBlock
              block={opinionNacional}
              title={'Columnistas Nacionales'}
              banner={
                <BannerAdvertising banners={banners} name="rectangle_4" />
              }
              halfPageBanner={
                <>
                  {editorial && (
                    <EditorialBlock {...editorial[0]} showSubtitle />
                  )}
                  <BannerAdvertising banners={banners} name="rectangle_5" />
                  {edicion && <SectionCard5 {...edicion[0]} />}
                </>
              }
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={5} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de caricaturas*/}
          <ShowSection show={!!caricaturas && caricaturas.length > 0}>
            <BlockNews4 news={caricaturas} title="Caricatura" />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={6} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion deportes*/}
          <ShowSection show={!!deportes && deportes.length > 0}>
            <SectionBlockCarousel title="Deportes" block={deportes} />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={7} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de videos*/}
          <ShowSection show={!!videoBlock && videoBlock.length > 0}>
            <BlockVideos1
              mainVideo={videoBlock[0]}
              videos={videoBlock.slice(1)}
              title="Videos"
              rounded
              isVideo
              goTo={{
                description: 'Ver Más Videos',
                url: '/videos',
              }}
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={8} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion la hora recomienda manual*/}
          <ShowSection show={!!recomendados && recomendados.length > 0}>
            <SectionBlockCarousel
              title="La Hora Recomienda"
              block={recomendados}
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={9} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion no te lo pierdas*/}
          <ShowSection show={!!noPerder && noPerder.length > 0}>
            <BlockNews3
              news={noPerder}
              title="No te lo pierdas"
              bannerArray={[
                <BannerAdvertising key={0} banners={banners} name="rectangle_6" />,
              ]}
              halfPageBanner={
                <SubscribeWhatsAppColumn whatsappLink="" terms="" />
              }
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={10} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion mundo automatico*/}
          <ShowSection show={!!mundo && mundo.length > 0}>
            <BlockNews1 news={mundo} title="Mundo" showSubtitle rounded />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={11} />
            </MiddleSection>
          </ShowSection>
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent freeZone={freeZone} menu={footer} />
    </>
  );
}
