import {LogoSponsor} from '@/app/_assets/icons/LogoSponsor';
import {BlueStack} from '@/app/_assets/icons/BlueStack';
import {FC} from 'react';
import {MenuResponse} from '@/app/_setup/types/services';
import {SocialNetworks, socials} from '@/app/_setup/config/client';
import {FaceBook} from '@/app/_assets/icons/FaceBook';
import {Gnews} from '@/app/_assets/icons/Gnews';
import {Instagram} from '@/app/_assets/icons/Instagram';
import {TikTok} from '@/app/_assets/icons/TikTok';
import {WhatsApp} from '@/app/_assets/icons/WhatsApp';
import {X} from '@/app/_assets/icons/X';
import {YouTube} from '@/app/_assets/icons/YouTube';
import styles from './styles.module.css';

type Props = {
  freeZone: Array<MenuResponse>;
  menu: Array<MenuResponse>;
};

const Footer: FC<Props> = (props) => {
  const {freeZone, menu} = props;
  return (
    <footer className={styles.content}>
      <section className={styles.brandContent}>
        <a href='/' className={styles.logoStyled} aria-label='Ir a la home'>
          <LogoSponsor width={'200px'} color='var(--footer-logo-color)'/>
        </a>
        <div className={styles.socialMedia}>
          {socials[SocialNetworks.TikTok].show && (
            <a
              aria-label='TikTok link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.TikTok].url}
            >
              <TikTok className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.WhatsApp].show && (
            <a
              aria-label='WhatsApp link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.WhatsApp].url}
            >
              <WhatsApp className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.FaceBook].show && (
            <a
              aria-label='FaceBook link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.FaceBook].url}
            >
              <FaceBook className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.Youtube].show && (
            <a
              aria-label='Youtube link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.Youtube].url}
            >
              <YouTube className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.X].show && (
            <a
              aria-label='X link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.X].url}
            >
              <X className={styles.socialNetworkIcon}/>
            </a>
          )}
          {socials[SocialNetworks.Instagram].show && (
            <a
              aria-label='Instagram link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.Instagram].url}
            >
              <Instagram className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.Gnews].show && (
            <a
              aria-label='Gnews link'
              className={styles.linkSocialNetwoks}
              href={socials[SocialNetworks.Gnews].url}
            >
              <Gnews className={styles.socialNetworkIcon} />
            </a>
          )}
        </div>
      </section>
      <section className={styles.sectionContent}>
        <div className={styles.section}>
          {menu
            .filter((item) => !item.subitem)
            .map((item, index) => (
              <a
                key={index}
                href={item.link ? item.link : undefined}
                target={item.target}
                className={styles.menuItem}
              >
                {item.description}
              </a>
            ))}
        </div>
        <div className={styles.section}>
          {freeZone.map((item, index) => (
            <a
              key={index}
              href={item.link ? item?.link : undefined}
              target={item.target}
              className={styles.otherItems}
            >
              {item.description}
            </a>
          ))}
        </div>
      </section>
      <section className={styles.copyrigth}>
        <p className={styles.copyrigthText}>
          © 2025 La Hora. Todos los derechos reservados. Somos una empresa
          periodística con diarios regionales, de carácter local.
        </p>
        <a aria-label='Bluestack link' href="https://www.bluestack.la" title="Plataforma BLUESTACK CMS (antes CMS MEDIOS)" target="_blank" rel="noopener">
          <BlueStack />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
