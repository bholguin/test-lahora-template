import {FC} from 'react';
import {SectionCard} from '../../_components/client-components/cards/section-card-1';
import {ContentLayout1} from '../../_components/client-components/content-layout-1';
import {NewsContent} from '../../_components/client-components/content/news-content';
import Section from '../../_components/client-components/section';
import {FooterComponent} from '../../_components/server-components/common/footer.server';
import HeaderComponent from '../../_components/server-components/common/header.server';
import {VideoSection} from '../../_components/server-components/videos/main.section.server';
import getVideosData from '../../_setup/actions/getVideosData';
import {becomeVideoObject} from '../../_setup/helpers/becomeVideoObject';
import {NextPrev} from '@/app/_components/client-components/next-prev';

type Props = {
  params: { slug: Array<string> };
};

const Videos: FC<Props> = async (props) => {
  const page = (props.params.slug && props.params.slug.length === 2) ? props.params.slug[1] : 1;

  const {menu, sidebar, freeZone, videoHead, videoList, cintillo, footer} =
    await getVideosData(Number(page));

  return (
    <>
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        {Number(page) === 1 && <VideoSection
          data={videoHead}
          option={process.env.VIDEOS_OPTION ?? ''}
        />}
        <ContentLayout1>
          <Section title={'Más Videos'}>
            <NewsContent
              grid={4}
              paginatorComponent={
                <NextPrev
                  currentPage={Number(page)}
                  maxPages={Number(process.env.PAGINATION_MAX_PAGES)}
                  showNext={!((videoList.length ?? 0) < Number(process.env.NEWS_PER_SECTION))}
                />
              }
            >
              {Array.isArray(videoList) &&
                videoList.map((item, index) => (
                  <SectionCard
                    {...becomeVideoObject(item)}
                    key={index}
                    isVideo
                    fontSizeTitle='18px'
                    lineHeightTitle='24px'
                  />
                ))}
            </NewsContent>
          </Section>
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent
        freeZone={freeZone}
        menu={footer}
      />
    </>
  );
};

export default Videos;
