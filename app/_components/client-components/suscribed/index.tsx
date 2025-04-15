import {FC} from 'react';
import {SubscribeColumn} from './subscribe-column';
import {SubscribeRow} from './subscribe-row';

type Props = {
  variant: 'column' | 'row'
}

export const Subscribe: FC<Props> = (props) => {
  switch (props.variant) {
  case 'column':
    return <SubscribeColumn />;
  case 'row':
    return <SubscribeRow />;
  }
};
