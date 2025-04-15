
import React from 'react';
// import { Styled } from './styles';
import {MenuResponse} from '@/app/_setup/types/services';
import {NewListResponse} from '@/app/_setup/types/new-list-response';
import {SideBar} from '../../sidebar';
import {HeaderSticky} from './header-sticky';
import {HeaderStatic} from './header-static';
import styles from './styles.module.css';

type HeaderProps = {
  menuText: string;
  editionText: string;
  menu: Array<MenuResponse>;
  alertZone?: NewListResponse;
  children: React.ReactNode;
  sidebar: Array<MenuResponse>;
  cintillo?: Array<MenuResponse>;
  tapeTitle?: string;
};

const Header1: React.FC<HeaderProps> = (props) => {
  const {alertZone, children, sidebar} = props;
  const header = false;
  const isDesk = true;
  const openAlertZone = true;

  return (
    <>
      <HeaderSticky
        {...props}
        visibility={header || !isDesk}
        openAlertZone={openAlertZone}
      />
      <HeaderStatic {...props} />
      <div className={[styles.childrenContent, (alertZone?.data ? styles.childrenContentAux : '')].join(' ')}
        id='content-layout'
        style={{
          // '--hasAlertMargin': openAlertZone && alertZone?.data ? '14.5rem' : '10.1rem',
        } as React.CSSProperties}
      >
        {children}
      </div>

      <SideBar sidebar={sidebar} />
    </>
  );
};

export default Header1;
