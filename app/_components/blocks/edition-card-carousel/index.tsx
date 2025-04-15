import {FC} from 'react';
import Section from '../../client-components/section';
import {CustomCarousel} from '../../client-components/carousel';
import {SectionCard5} from '../../client-components/cards/section-card-5';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export interface EditionsCardCarouselProps {
  editions: Array<NewListResponseData>;
}

export const EditionCardCarousel: FC<EditionsCardCarouselProps> = (props) => {
  return <Section title={'Edición del día'}>
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
      {Array.isArray(props.editions) &&
          props.editions?.map((item, index) => (
            <SectionCard5 {...item} key={index}/>
          ))}
    </CustomCarousel>
  </Section>;
};
