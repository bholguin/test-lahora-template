/* eslint-disable import/max-dependencies */
import BlockNews1 from '../../../_components/blocks/block-news-1';
import BlockNews2 from '../../../_components/blocks/block-news-2';
import BlockVideos1 from '../../../_components/blocks/block-videos-1';
import {NewsDescriptionBlock2} from '../../../_components/blocks/news-description-block-2';
import {SectionCardCarousel} from '../../../_components/blocks/section-card-carousel';
import {ContentLayout1} from '../../../_components/client-components/content-layout-1';
import {FooterComponent} from '../../../_components/server-components/common/footer.server';
import HeaderComponent from '../../../_components/server-components/common/header.server';
import {MainSectionComponent} from '../../../_components/server-components/home/main.section.server';
import BlockNews3 from '../../../_components/blocks/block-news-3';
import {SubscribeWhatsAppColumn} from '../../../_components/client-components/suscribed/subscribe-whatsapp';
import {OptionCardBlock} from '../../../_components/blocks/option-card-block';
import {ShowSection} from '../../../_components/client-components/show-section';
import {MiddleSection} from '../../../_components/client-components/middle-section';
import {SectionBlockCarousel} from '../../../_components/blocks/section-block-carousel';
import BlockNews4 from '../../../_components/blocks/main-block-4';
import {EditorialBlock} from '../../../_components/blocks/editorial-block-1';
import {SectionCard5} from '../../../_components/client-components/cards/section-card-5';
import BannerAdvertising from '../../../_components/client-components/banner-advertising';
import BannerAdvertisingMiddle from '../../client-components/banner-advertising-middle';
import {Readest} from '../../client-components/readest';
import Schemas from '../schemas/pages/default';
import {
  BannerResponse,
  BlockSaasResponse,
  MenuResponse,
  Outstanding,
  VideoResponseData,
} from '@/app/_setup/types/services';
import {
  NewListResponse,
  NewListResponseData,
} from '@/app/_setup/types/new-list-response';
import {socials, SocialNetworks} from '@/app/_setup/config/client';

export const revalidate = 0;

type BlockSassType =
  | {
      blockSass: BlockSaasResponse[];
      news: NewListResponse;
    }
  | {
      blockSass: BlockSaasResponse[];
      news?: undefined;
    }
  | null;

type Props = {
  menu: MenuResponse[];
  sidebar: MenuResponse[];
  freeZone: MenuResponse[];
  cintillo: MenuResponse[];
  alertZone: NewListResponse | undefined;
  mainBlock:
    | {
        section: Outstanding[];
        news: NewListResponse;
      }
    | {
        section: Outstanding[];
        news?: undefined;
      }
    | null;
  videoBlock: VideoResponseData[];
  blockSass1: BlockSassType;
  blockSass2: BlockSassType;
  blockSass3: BlockSassType;
  blockSass4: BlockSassType;
  blockSass5: BlockSassType;
  blockSass6: BlockSassType;
  blockSass7: BlockSassType;
  blockSass8: BlockSassType;
  blockSass9: BlockSassType;
  blockSass10: BlockSassType;
  blockSass11: BlockSassType;
  banners: BannerResponse[];
  servicios: NewListResponseData[];
  noPerder: NewListResponseData[];
  noticias: NewListResponseData[];
  provincias: NewListResponseData[];
  recomendados: NewListResponseData[];
  quito: NewListResponseData[];
  opinion: NewListResponseData[];
  mundo: NewListResponseData[];
  caricaturas: NewListResponseData[];
  edicion: NewListResponseData[];
  editorial: NewListResponseData[];
  footer: MenuResponse[];
  ranking: NewListResponseData[];
};

export default async function HomePage(props: Props) {
  const {
    menu,
    sidebar,
    freeZone,
    cintillo,
    alertZone,
    mainBlock,
    videoBlock,
    blockSass1,
    blockSass2,
    blockSass3,
    blockSass4,
    blockSass5,
    blockSass6,
    blockSass7,
    blockSass8,
    blockSass9,
    blockSass10,
    blockSass11,
    banners,
    servicios,
    noPerder,
    noticias,
    provincias,
    recomendados,
    quito,
    opinion,
    mundo,
    caricaturas,
    edicion,
    editorial,
    footer,
    ranking,
  } = props;

  const mb = mainBlock?.news?.data || [];
  const newsCondensedList = mb
    .concat(servicios)
    .concat(opinion)
    .concat(noPerder)
    .concat(noticias)
    .concat(provincias)
    .concat(recomendados)
    .concat(quito)
    .concat(mundo)
    .concat(caricaturas)
    .concat(edicion)
    .concat(editorial);

  return (
    <>
      <Schemas newsCondensedList={newsCondensedList} />
      {/*       <FormatScripts
        headscripts={
          banners.find((item) => item.key === 'headscripts')?.value ?? ''
        }
        bodybefore={
          banners.find((item) => item.key === 'bodybefore')?.value ?? ''
        }
      />
 */}
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        cintillo={cintillo}
        tapeTitle={cintillo?.length > 0 ? 'Ediciones': ''}
        socialIcons
        alertZone={alertZone ?? undefined}
      >
        <ContentLayout1>
          {/** primera seccion */}
          <ShowSection show={!!mainBlock}>
            <MainSectionComponent mainBlock={mainBlock} />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={1} />
              <SectionCardCarousel blockSass={blockSass1} />
            </MiddleSection>
          </ShowSection>

          {/** Seccion noticias*/}
          <ShowSection show={!!noticias && noticias.length > 0}>
            <NewsDescriptionBlock2
              title="Noticias"
              block={noticias}
              banner={
                <BannerAdvertising banners={banners} name="rectangle_1" />
              }
              halfPageBanner={
                <BannerAdvertising banners={banners} name="halfpage_1" />
              }
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={2} />
              <SectionCardCarousel blockSass={blockSass2} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de Opinion*/}
          <ShowSection show={!!opinion && opinion.length > 0}>
            <OptionCardBlock
              block={opinion}
              title="Opinión"
              banner={
                <BannerAdvertising banners={banners} name="rectangle_2" />
              }
              halfPageBanner={
                <>
                  {editorial && (
                    <EditorialBlock {...editorial[0]} showSubtitle />
                  )}
                  <BannerAdvertising banners={banners} name="rectangle_3" />
                  {edicion && <SectionCard5 {...edicion[0]} />}
                </>
              }
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={3} />
              <SectionCardCarousel blockSass={blockSass3} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de caricaturas*/}
          <ShowSection show={!!caricaturas && caricaturas.length > 0}>
            <BlockNews4 news={caricaturas} title="Caricatura" />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={4} />
              <SectionCardCarousel blockSass={blockSass4} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion de Quito*/}
          <ShowSection show={!!quito && quito.length > 0}>
            <BlockNews2
              mainNew={quito[0]}
              news={quito.slice(1)}
              title="Quito"
              titleUrl="/quito"
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={5} />
              <SectionCardCarousel blockSass={blockSass5} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion provincias*/}
          <ShowSection show={!!provincias && provincias.length > 0}>
            <BlockNews3
              news={provincias}
              title="Provincias"
              bannerArray={[
                <BannerAdvertising key={0} banners={banners} name="rectangle_4" />,
              ]}
              halfPageBanner={<Readest ranking={ranking} title="Ranking" />}
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={6} />
              <SectionCardCarousel blockSass={blockSass6} />
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
              titleUrl="/videos"
              goTo={{
                description: 'Ver Más Videos',
                url: '/videos',
              }}
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={7} />
              <SectionCardCarousel blockSass={blockSass7} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion mundo automatico*/}
          <ShowSection show={!!mundo && mundo.length > 0}>
            <BlockNews1
              news={mundo}
              title="Mundo"
              titleUrl="/seccion/mundo"
              showSubtitle
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={8} />
              <SectionCardCarousel blockSass={blockSass8} />
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
              <SectionCardCarousel blockSass={blockSass9} />
            </MiddleSection>
          </ShowSection>

          {/** Seccion de servicios*/}
          <ShowSection show={!!servicios && servicios.length > 0}>
            <BlockNews1
              news={servicios}
              title="Servicios"
              titleUrl="/seccion/servicios"
              showSubtitle
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={10} />
              <SectionCardCarousel blockSass={blockSass10} />
            </MiddleSection>
          </ShowSection>
          {/** Seccion no te lo pierdas*/}
          <ShowSection show={!!noPerder && noPerder.length > 0}>
            <BlockNews3
              news={noPerder}
              title="No te lo pierdas"
              bannerArray={[
                <BannerAdvertising key={0} banners={banners} name="rectangle_5" />,
              ]}
              halfPageBanner={
                socials[SocialNetworks.WhatsApp].show && (
                  <SubscribeWhatsAppColumn
                    whatsappLink={socials[SocialNetworks.WhatsApp].url}
                    terms=""
                  />
                )
              }
              rounded
            />
            <MiddleSection>
              <BannerAdvertisingMiddle banners={banners} index={11} />
              <SectionCardCarousel blockSass={blockSass11} />
            </MiddleSection>
          </ShowSection>
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent freeZone={freeZone} menu={footer} />
    </>
  );
}
