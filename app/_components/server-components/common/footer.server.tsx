import {FC} from 'react';
import Footer1 from '../../client-components/footer/option-1';
import Footer2 from '../../client-components/footer/option-2';
import {MenuResponse} from '@/app/_setup/types/services';

type Props = {
    menu: Array<MenuResponse>
    freeZone: Array<MenuResponse>
}

export const FooterComponent: FC<Props> = (props) => {
  switch (process.env.FOOTER_OPTION) {
  case 'op1':
    return <Footer1 freeZone={props.freeZone}/>;
  case 'op2':
    return <Footer2 freeZone={props.freeZone} menu={props.menu}/>;
  default:
    return <></>;
  }
};
