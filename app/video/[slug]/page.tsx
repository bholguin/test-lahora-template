import {FC} from 'react';
import {SectionCard} from '../../_components/client-components/cards/section-card-1';
import {ContentLayout1} from '../../_components/client-components/content-layout-1';
import {NewsContent} from '../../_components/client-components/content/news-content';
import Section from '../../_components/client-components/section';
import {FooterComponent} from '../../_components/server-components/common/footer.server';
import HeaderComponent from '../../_components/server-components/common/header.server';
import getVideoData from '../../_setup/actions/getVideoData';
import {becomeVideoObject} from '../../_setup/helpers/becomeVideoObject';
import {VideoBlock3} from '@/app/_components/blocks/block-video-3';
import dayjs from 'dayjs';

type Props = {
  params: { slug: string };
};

const Videos: FC<Props> = async (props) => {
  const p = props.params.slug;
  const aux1 = p.split('-');
  const aux2 = aux1[aux1.length -1].split('.');
  const key = aux2[0];

  const op = key.substring(0, 2);
  const date = key.substring(2, 10);
  const id = key.substring(10, key.length);

  const selectOptionVideo = (op: string, id: string) => {
    switch (op) {
    case 'vy':
      return `/videos/video-youtube/${dayjs(date).format('YYYY/MM/DD')}/videoYouTube_${id}.lnk`;
    case 've':
      return `/videos/video-embedded/${dayjs(date).format('YYYY/MM/DD')}/videoEmbedded_${id}.lnk`;
    case 'vf':
      return `/videos/video-flash/${dayjs(date).format('YYYY/MM/DD')}/${aux1[0]}.${id}`;
    default:
      return '';
    }
  };

  const path = selectOptionVideo(op, id);

  const {menu, sidebar, freeZone, videoHead, videoList, cintillo, footer} =
    await getVideoData(path);

  return (
    <>
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <VideoBlock3 video={videoHead[0]} type={op}/>
        <ContentLayout1>
          <Section title={'Más Videos'}>
            <NewsContent grid={4}>
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
