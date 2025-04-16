import {MenuResponse} from '@/app/_setup/types/services';
import {NewListResponse} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import {MenuHamburger} from '@/app/_assets/icons/MenuHamburger';
import {Lens} from '@/app/_assets/icons/Lens';
import {NewsPaper} from '@/app/_assets/icons/NewsPaper';
import {MenuOptions} from '../../../menu-options';
// import {HeaderTape} from '../../header-tape';
import styles from './styles.module.css';
import {ButtonApp} from '../../../button-app';
import {Logo} from '@/app/_assets/icons/Logo';
import {cutString} from '@/app/_setup/helpers/cutString';

type Props = {
  menuText: string;
  editionText: string;
  menu: Array<MenuResponse>;
  alertZone?: NewListResponse;
  sidebar: Array<MenuResponse>;
  cintillo?: Array<MenuResponse>;
  socialIcons: boolean;
  tapeTitle?: string;
};

export const HeaderStatic:FC<Props> = (props) => {
  const {menu, alertZone} = props;
  return (
    <header className={styles.headerStyled} id='header-static' style={{top: props.cintillo || props.socialIcons ? 40 : 0}}>
      {/* <HeaderTape cintillo={props.cintillo} tapeTitle={props.tapeTitle} /> */}
      <div
        className={[styles.headerContent, alertZone?.data ? styles.hasAlertZone : ''].join(' ')}
      >
        <div className={styles.menuButtonSection}>
          <ButtonApp
            className={styles.menuButton}
            id="button-app"
            variant="contained"
            toggledrawerevent='true'
            rounded={true}
            aria-label='menu'
            aria-labelledby='menu'
            title='menu'
          >
            <MenuHamburger color="var(--header-icons)" width={27} height={27} />
            <p className={styles.buttonText} style={{lineHeight: 0}}>
              {props.menuText}
            </p>
          </ButtonApp>
        </div>
        <div className={styles.logoContent}>
          <a href={'/'} aria-label='Home'>
            <Logo className={styles.logoStyled} />
          </a>
        </div>
        <div className={styles.buttonSection}>
          <a href={'/buscar'} style={{display: 'flex'}} aria-label='Buscar'>
            <Lens width={28} height={28} color="var(--header-icons)" />
          </a>
          <ButtonApp
            className={styles.pdfButton}
            id="button-app"
            variant="contained"
            rounded={true}
            href="/seccion/ediciones"
            aria-label='ediciones'
            aria-labelledby='ediciones'
            title='ediciones'
          >
            <NewsPaper color="var(--header-icons)" />
            <p className={styles.buttonText} style={{lineHeight: 0}}>
              {props.editionText}
            </p>
          </ButtonApp>
        </div>

        {alertZone?.data ? (
          <div className={styles.headLineContent}>
            <p className={styles.headLineTitle}>
              {alertZone.entity.description ?
                `${alertZone.entity.description}:` :
                ''}
            </p>
            <a
              className={styles.headLine}
              href={alertZone.data[0].info.link.url}
              target={alertZone.data[0].info.link.target}
              title={alertZone.data[0].main.title.home}
            >
              {cutString(alertZone.data[0].main.title.home ?? '', 120)}
            </a>
          </div>
        ) : (
          <div className={styles.line} />
        )}
        <div className={styles.menuSection} >
          {Array.isArray(menu) && (
            <MenuOptions items={menu} />
          )}
        </div>
      </div>
    </header>
  );
};
