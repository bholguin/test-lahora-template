import {FC} from 'react';
import Section from '../../client-components/section';
import {CustomCarousel} from '../../client-components/carousel';
import {SectionCard2} from '../../client-components/cards/section-card-2';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export interface SectionCardCarouselProps {
  title: string;
  block: Array<NewListResponseData>;
}

export const SectionBlockCarousel: FC<SectionCardCarouselProps> = (props) => {
  const {block, title} = props;

  return <Section title={title}>
    <CustomCarousel
      additionalTransfrom={0}
      arrows={true}
      centerMode={false}
      draggable={true}
      focusOnSelect={false}
      infinite={false}
      keyBoardControl
      minimumTouchDrag={60}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {block.map((item, index) => (
        <div key={index}>
          <SectionCard2 {...item} variant="contained" />
        </div>
      ))}
    </CustomCarousel>
  </Section>;
};
