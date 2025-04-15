/* eslint-disable no-case-declarations */
import {FC} from 'react';
import {MainBlock1} from '../../blocks/main-block-1';
import {MainBlock2} from '../../blocks/main-block-2';
import {Outstanding} from '@/app/_setup/types/services';
import {NewListResponse} from '@/app/_setup/types/new-list-response';

type Props = {
  mainBlock: {
    section: Outstanding[];
    news?: NewListResponse;
  } | null
}

export const MainSectionComponent: FC<Props> = async (props) => {
  switch (props.mainBlock?.section[0].value) {
  case 'Destacado Diario':
    const data = props?.mainBlock?.news?.data;
    return data ? (
      <MainBlock1
        {...data[0]}
        rounded
        fontSizeTitle='34px'
        lineHeightTitle='42px'
        hasShadow
        variant='primary'
        isLarge
        block={data.slice(1)}
      />
    ): null;
  case 'Destacado Alto Impacto':
    const data2 = props?.mainBlock?.news?.data;
    return data2 ? (
      <MainBlock2 {...data2[0]} />
    ) : null;
  default:
    <></>;
  }
};
