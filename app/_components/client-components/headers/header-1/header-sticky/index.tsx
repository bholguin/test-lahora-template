import {NewListResponse} from '@/app/_setup/types/new-list-response';
import {MenuResponse} from '@/app/_setup/types/services';
import {FC} from 'react';
import {MenuHamburger} from '@/app/_assets/icons/MenuHamburger';
import {Lens} from '@/app/_assets/icons/Lens';
import {NewsPaper} from '@/app/_assets/icons/NewsPaper';
import {HeaderLiveMobile} from '../../header-live-mobile';
import {HeaderTape} from '../../header-tape';
import styles from './styles.module.css';
import {ButtonApp} from '../../../button-app';
import {Logo} from '@/app/_assets/icons/Logo';
import {cutString} from '@/app/_setup/helpers/cutString';

type Props = {
  menuText: string;
  alertZone?: NewListResponse;
  sidebar: Array<MenuResponse>;
  cintillo?: Array<MenuResponse>;
  tapeTitle?: string;
  openAlertZone: boolean
  visibility?: boolean
  socialIcons: boolean
};

export const HeaderSticky: FC<Props> = (props) => {
  const {alertZone} = props;
  return (
    <header className={styles.headerStyled} id='header-sticky' style={{display: 'flex'}}>
      {props.socialIcons && <HeaderTape socialIcons={props.socialIcons} cintillo={props.cintillo} tapeTitle={props.tapeTitle} />}
      <div className={styles.headerContent}>
        <ButtonApp
          id='button-app'
          className={styles.menuButton}
          variant="contained"
          toggledrawerevent='true'
          rounded={true}
          aria-label='menu'
          aria-labelledby='menu'
          title='menu'
        >
          <MenuHamburger className={styles.startIcon} color="var(--header-icons)" width={27} height={27} />
        </ButtonApp>
        <a href={'/'} aria-label='Home'>
          <Logo className={styles.logoStyled} />
        </a>
        {alertZone?.data && (
          <div className={styles.headLineContent}>
            <div className={styles.headLineTitle}>
              {alertZone.entity.description ?
                `${alertZone.entity.description}:` :
                ''}
            </div>
            <a
              className={styles.headLine}
              href={alertZone.data[0].info.link.url}
              target={alertZone.data[0].info.link.target}
              title={alertZone.data[0].main.title.home}
            >
              {cutString(alertZone.data[0].main.title.home ?? '', 120)}
            </a>
          </div>
        )}
        <div className={[styles.buttonSection, alertZone?.data ? styles.hasAlertZone : ''].join(' ')}>
          <a href={'/buscar'} aria-label='Buscar' style={{display: 'flex'}}>
            <Lens width={28} height={28} color="var(--header-icons)" />
          </a>
          <ButtonApp
            id='button-app'
            className={styles.pdfButton}
            variant="contained"
            rounded={true}
            href="/seccion/ediciones"
            aria-label='ediciones'
            aria-labelledby='ediciones'
            title='ediciones'
          >
            <NewsPaper className={styles.startIcon} color="var(--header-icons)" />
          </ButtonApp>
        </div>
      </div>
      <HeaderLiveMobile
        alertZone={alertZone}
      />
    </header>
  );
};
