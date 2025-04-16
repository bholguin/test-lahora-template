import {FC} from 'react';
import Section from '../../client-components/section';
import {SectionCard5} from '../../client-components/cards/section-card-5';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';

export interface EditionsCardCarouselProps {
  title: string,
  editions: Array<NewListResponseData>;
}

export const EditionCardBlock: FC<EditionsCardCarouselProps> = (props) => {
  return <Section title={props.title}>
    <div style={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      padding: '0px',
      gap: '100%',
      justifyContent: 'space-evenly',
    }}>
      {Array.isArray(props.editions) &&
          props.editions?.map((item, index) => (
            <SectionCard5 {...item} key={index} hasShadow/>
          ))}
    </div>
  </Section>;
};
