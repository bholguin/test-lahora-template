import {NewListResponse} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import styles from './styles.module.css';
import {Close} from '@/app/_assets/icons/Close';

type Props = {
    alertZone?: NewListResponse | null;
};

export const HeaderLiveMobile: FC<Props> = (props) => {
  const {alertZone} = props;
  return <>
    <input type="checkbox" id="close-alert" style={{display: 'none'}}
      defaultChecked={!alertZone}
    />
    {(alertZone) && <div id='alert-chip' className={styles.content}>
      <div className={styles.live}>
        <div className={styles.chipStyled}>{alertZone?.entity?.description}</div>
        <label htmlFor="close-alert">
          <Close className={styles.closeLiveStyled}/>
        </label>
      </div>
      <a className={styles.headLine}
        href={alertZone?.data[0]?.info.link.url}
        target={alertZone?.data[0]?.info.link.target}
        title={alertZone?.data[0]?.main.title.home}
      >
        {alertZone?.data[0]?.main?.title.home ?? ''}
      </a>
    </div>}
  </>;
};
