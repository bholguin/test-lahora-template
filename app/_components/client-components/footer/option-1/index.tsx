import {MenuResponse} from '@/app/_setup/types/services';
import {BlueStack} from '@/app/_assets/icons/BlueStack';
import {FC} from 'react';
import {SocialNetworks, socials} from '@/app/_setup/config/client';
import {FaceBook} from '@/app/_assets/icons/FaceBook';
import {Gnews} from '@/app/_assets/icons/Gnews';
import {Instagram} from '@/app/_assets/icons/Instagram';
import {TikTok} from '@/app/_assets/icons/TikTok';
import {WhatsApp} from '@/app/_assets/icons/WhatsApp';
import {X} from '@/app/_assets/icons/X';
import {YouTube} from '@/app/_assets/icons/YouTube';
import {Logo} from '@/app/_assets/icons/Logo';
import styles from './styles.module.css';

type Props = {
  freeZone: Array<MenuResponse>;
};

const Footer: FC<Props> = (props) => {
  const {freeZone} = props;
  return (
    <footer className={styles.content}>
      <section className={styles.brandContent}>
        <a href='/'>
          <Logo fill={'var(--footer-logo-color)'} className={styles.logoDesk} />
        </a>
        <div className={styles.socialMedia}>
          {socials[SocialNetworks.TikTok].show && (
            <a
              href={socials[SocialNetworks.TikTok].url}
            >
              <TikTok className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.WhatsApp].show && (
            <a
              href={socials[SocialNetworks.WhatsApp].url}
            >
              <WhatsApp className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.FaceBook].show && (
            <a
              href={socials[SocialNetworks.FaceBook].url}
            >
              <FaceBook className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.Youtube].show && (
            <a
              href={socials[SocialNetworks.Youtube].url}
            >
              <YouTube className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.X].show && (
            <a
              href={socials[SocialNetworks.X].url}
            >
              <X className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.Instagram].show && (
            <a
              href={socials[SocialNetworks.Instagram].url}
            >
              <Instagram className={styles.socialNetworkIcon} />
            </a>
          )}
          {socials[SocialNetworks.Gnews].show && (
            <a
              href={socials[SocialNetworks.Gnews].url}
            >
              <Gnews className={styles.socialNetworkIcon} />
            </a>
          )}
        </div>
      </section>
      <section className={styles.copyrigth}>
        <Logo className={styles.logoMobile} />
        <div className={styles.section}>
          {freeZone.map((item, index) => (
            <a
              key={index}
              href={item.link ? item.link : undefined}
              target={item.target}
              className={styles.ourOptions}
            >
              {item.description}
            </a>
          ))}
        </div>
        <section className={styles.copyrigthContent}>
          <p className={styles.copyrigthText}>
            © 2025 La Hora. Todos los derechos reservados. Somos una empresa
            periodística con diarios regionales, de carácter local.
          </p>
          <a href="https://www.bluestack.la" title="Plataforma BLUESTACK CMS (antes CMS MEDIOS)" target="_blank" rel="noopener">
            <BlueStack />
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
