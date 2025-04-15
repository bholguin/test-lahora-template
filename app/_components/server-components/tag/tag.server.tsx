import {FC} from 'react';
import {TagHeader2} from '../../client-components/tag-header-2';
import {TagHeader1} from '../../client-components/tag-header-1';
import {Entity} from '@/app/_setup/types/new-list-response';

type Props = {
  option: string;
  entity?: Entity
};

const TagComponent: FC<Props> = (props) => {
  const {option, entity} = props;
  switch (option) {
  case 'op1':
    return (
      <TagHeader1
        tag={entity?.name ?? ''}
        img={entity?.image?.url ?? ''}
        description={entity?.description ? entity?.description : ''}
      />
    );
  case 'op2':
    return (
      <TagHeader2
        tag={entity?.name ?? ''}
        description={entity?.description ? entity?.description : ''}
      />
    );
  default:
    return <></>;
  }
};

export default TagComponent;
