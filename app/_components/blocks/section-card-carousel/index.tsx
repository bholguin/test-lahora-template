import {FC} from 'react';
import Section from '../../client-components/section';
import {CustomCarousel} from '../../client-components/carousel';
import {SectionCard2} from '../../client-components/cards/section-card-2';
import {BlockSaasResponseData} from '@/app/_setup/types/services';

export interface SectionCardCarouselProps {
  blockSass: BlockSaasResponseData | null;
}

export const SectionCardCarousel: FC<SectionCardCarouselProps> = (props) => {
  const {blockSass} = props;

  return blockSass?.blockSass[0].block !== 'No Mostrar' &&
    blockSass?.news?.success && blockSass?.news?.data ? (
      <Section title={blockSass?.blockSass[0]?.title ?? ''}>
        <CustomCarousel
          swipeable
          additionalTransfrom={0}
          arrows={true}
          ssr={true}
          centerMode={false}
          draggable={true}
          focusOnSelect={false}
          infinite={false}
          keyBoardControl
          minimumTouchDrag={60}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          itemClass="carousel-item-padding-40-px"
        >
          {Array.isArray(props.blockSass?.news?.data) &&
          props.blockSass?.news?.data.map((item, index) => (
            <div key={index}>
              <SectionCard2 {...item} variant="contained" rounded={false} fontSizeTitle='18px' lineHeightTitle='24px'/>
            </div>
          ))}
        </CustomCarousel>
      </Section>
    ) : null;
};
