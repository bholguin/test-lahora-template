import React, {FC} from 'react';
import {MenuResponse} from '@/app/_setup/types/services';
import {Lens} from '@/app/_assets/icons/Lens';
import {ChevronDown} from '@/app/_assets/icons/ChevronDown';
import styles from './styles.module.css';
import {Close} from '@/app/_assets/icons/Close';
import {Gnews} from '@/app/_assets/icons/Gnews';
import {Instagram} from '@/app/_assets/icons/Instagram';
import {X} from '@/app/_assets/icons/X';
import {YouTube} from '@/app/_assets/icons/YouTube';
import {FaceBook} from '@/app/_assets/icons/FaceBook';

type Props = {
  sidebar: Array<MenuResponse>
};

export const SideBar: FC<Props> = ({sidebar}) => {
  return (
    <aside className={styles.drawerStyled} id='sidebar-expandable'>
      <input type='checkbox' id='side-bar-state'/>
      <section className={styles.sidebarCustom}>
        <div className={styles.buttonContent}>
          <label className={styles.buttonStyled} htmlFor='side-bar-state'>
            <Close className={styles.icon} />
          </label>
        </div>
        <div className={styles.inputContent}>
          <a href="/buscar" className={styles.inputStyled}>
            <p className={styles.buscar}>Buscar...</p>
            <Lens color="var(--search-input-icons)" />
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div>
            {sidebar.map((item, index) => (
              <div className={styles.accordionStyled} key={index}>
                <input type='checkbox' style={{display: 'none'}} id={'accordion_'+index}/>
                <h3 className={styles.accordionHeading}>
                  {Array.isArray(item.subitem) ? (
                    <label className={styles.accordionSummeryStyled} htmlFor={'accordion_'+index}>
                      <div>{item.description}</div>
                      <ChevronDown width={13} height={13} fill="var(--side-bar-color)" />
                    </label>
                  ) : (
                    <a className={styles.linkStyled} href={item.link ? item.link : undefined} target={item.target}>
                      {item.description}
                    </a>
                  )}
                </h3>

                {Array.isArray(item.subitem) && (
                  <div className={styles.accordionDetailsStyled} style={{'--max-height': item.subitem.length * 45 + 'px'} as React.CSSProperties}>
                    {item.subitem.map((sub, index) => {
                      return (
                        <a
                          className={styles.subLinkStyled}
                          key={index}
                          href={sub.link ? sub.link : undefined}
                          target={sub.target}
                        >
                          {sub.description}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.footerSlider}>
            <div className={styles.socialMedia}>
              <FaceBook className={styles.icon} />
              <YouTube className={styles.icon} />
              <X className={styles.icon} />
              <Instagram className={styles.icon} />
              <Gnews className={styles.icon} />
            </div>
            <p className={styles.copyRights}>
              ©LAHORA, 2024. All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
};
