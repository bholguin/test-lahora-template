import {NewsPaper} from '@/app/_assets/icons/NewsPaper';
import {Sound} from '@/app/_assets/icons/Sound';
import {FC, ReactNode} from 'react';
import {SideBar} from '../../sidebar';
import {MenuResponse} from '@/app/_setup/types/services';
import {HeaderTape} from '../header-tape';
import {ButtonApp} from '../../button-app';
import {MenuHamburger} from '@/app/_assets/icons/MenuHamburger';
import styles from './styles.module.css';
import {Logo} from '@/app/_assets/icons/Logo';
import {Lens} from '@/app/_assets/icons/Lens';

type Props = {
  children: ReactNode;
  sidebar: Array<MenuResponse>;
  cintillo?: Array<MenuResponse>;
  tapeTitle?: string;
};

const Header2: FC<Props> = ({children, sidebar, cintillo, tapeTitle}) => {
  return (
    <>
      <header className={styles.headerStyled}>
        <HeaderTape cintillo={cintillo} tapeTitle={tapeTitle}/>
        <div className={styles.headerContent}>
          <ButtonApp
            className={styles.menuHamburgerStyled}
            id="button-app"
            variant="contained"
            toggledrawerevent='true'
            rounded={true}
            aria-label='menu'
            aria-labelledby='menu'
            title='menu'
          >
            <MenuHamburger color="var(--header-icons)" width={27} height={27} />
          </ButtonApp>
          <a href={'/'} style={{display: 'flex'}}>
            <Logo className={styles.logoStyled} />
          </a>
          <div className={styles.boxOptions}>
            <a href={'/buscar'}>
              <Lens fill='var(--header-icons)' className={styles.lensStyled} />
            </a>
            <ButtonApp className={styles.pdfButton}><NewsPaper fill='var(--header-icons)' /></ButtonApp>
            <ButtonApp className={styles.buttonStyled} variant="contained">
              <Sound style={{minWidth: 'fit-content', width: '100%'}}/>
              <p className={styles.buttonText} style={{lineHeight: 0}}>En Vivo</p>
            </ButtonApp>
          </div>
        </div>
      </header>
      <div className={styles.childrenContent}
        id='content-layout'
      >
        {children}
      </div>
      <SideBar
        sidebar={sidebar}
      />
    </>
  );
};

export default Header2;
