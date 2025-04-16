import {MenuResponse} from '@/app/_setup/types/services';
import {FC} from 'react';
import {SocialNetworks, socials} from '@/app/_setup/config/client';
import styles from './styles.module.css';
import {TikTok} from '@/app/_assets/icons/TikTok';
import {WhatsApp} from '@/app/_assets/icons/WhatsApp';
import {FaceBook} from '@/app/_assets/icons/FaceBook';
import {YouTube} from '@/app/_assets/icons/YouTube';
import {X} from '@/app/_assets/icons/X';
import {Instagram} from '@/app/_assets/icons/Instagram';
import {Gnews} from '@/app/_assets/icons/Gnews';
import {headers} from 'next/headers';

type Props = {
  tapeTitle?: string;
  socialIcons: boolean;
  cintillo?: Array<MenuResponse>;
};

export const HeaderTape: FC<Props> = (props) => {
  const {cintillo, tapeTitle} = props;
  const pathname = headers().get('x-request-pathname')!;

  const index = cintillo?.findIndex((x) => x.link === pathname) ?? 0;

  return (
    (Array.isArray(cintillo) || props.socialIcons) && (
      <section className={styles.content}>
        {Array.isArray(cintillo) && <div className={styles.tabs}>
          <p className={styles.title}>{`${tapeTitle}:`}</p>
          {cintillo && cintillo[index] && <a
            className={styles.linkStyled}
            key={Math.random()}
            target={cintillo[index]?.target}
            href={cintillo[index]?.link}
            style={{
              color: cintillo[index]?.link === pathname ? 'var(--header-tape-active-link)' : 'var(--header-tape-icons)',
              fontWeight: cintillo[index]?.link === pathname ? '700' : '400',
            }}
          >
            {cintillo[index]?.description}
          </a>}
          {cintillo && cintillo.map((item, i) => {
            if (i !== index) {
              return <a
                className={styles.linkStyled}
                key={i}
                href={item?.link}
                style={{
                  color: item?.link === pathname ? 'var(--header-tape-active-link)' : 'var(--header-tape-color)',
                  fontWeight: item?.link === pathname ? '700' : '400',
                }}
              >
                {item?.description}
              </a>;
            }
          })}
        </div>}
        <div className={styles.socialNetwork}>
          {socials[SocialNetworks.TikTok].show && (
            <a
              target='_blank'
              aria-label='TikTok link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.TikTok].url}
            >
              <TikTok className={[styles.icon, styles.tiktok].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.WhatsApp].show && (
            <a
              target='_blank'
              aria-label='WhatsApp link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.WhatsApp].url}
            >
              <WhatsApp className={[styles.icon, styles.whatsapp].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.FaceBook].show && (
            <a
              target='_blank'
              aria-label='FaceBook link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.FaceBook].url}
            >
              <FaceBook className={[styles.icon, styles.facebook].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.Youtube].show && (
            <a
              target='_blank'
              aria-label='Youtube link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.Youtube].url}
            >
              <YouTube className={[styles.icon, styles.youtube].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.X].show && (
            <a
              target='_blank'
              aria-label='X link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.X].url}
            >
              <X className={[styles.icon, styles.x].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.Instagram].show && (
            <a
              target='_blank'
              aria-label='Instagram link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.Instagram].url}
            >
              <Instagram className={[styles.icon, styles.instagram].join(' ')} />
            </a>
          )}
          {socials[SocialNetworks.Gnews].show && (
            <a
              target='_blank'
              aria-label='Gnews link'
              className={styles.linkSocialNetwork}
              href={socials[SocialNetworks.Gnews].url}
            >
              <Gnews className={[styles.icon, styles.gnews].join(' ')} />
            </a>
          )}
        </div>
      </section>
    )
  );
};
