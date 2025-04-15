
import {FC} from 'react';
import 'react-multi-carousel/lib/styles.css';
import Section, {SectionProps} from '../../client-components/section';
import {CustomCarousel} from '../../client-components/carousel';
import {OpinionCard1} from '../../client-components/cards/option-card-1';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export interface SectionCardCarouselProps extends Omit<SectionProps, 'children'> {
  block: Array<NewListResponseData>;
}

const OpinionCardCarousel: FC<SectionCardCarouselProps> = (props) => {
  return (
    <Section title={props.title}>
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
        {props.block.map((item, index) => (
          <OpinionCard1 key={index} data={item} />
        ))}
      </CustomCarousel>
    </Section>
  );
};

export default OpinionCardCarousel;
