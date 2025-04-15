import {FC} from 'react';
import {SubscribeImageWhatsapp} from '@/app/_assets/icons/SubscribeImageWhatsapp';
import styles from './styles.module.css';

type Props = {
  whatsappLink: string;
  terms: string
}

export const SubscribeWhatsAppColumn: FC<Props> = (props) => {
  return (
    <section className={styles.content}>
      <SubscribeImageWhatsapp className={styles.subscribeImage} />
      <div className={styles.contentTitle}>
        <p className={styles.title}>Mantenete Informado</p>
        <p className={styles.subTitle}>
        ¿Quieres recibir las noticias más importantes? ¡Suscríbete sin costo, recíbelas por WhatsApp!
        </p>
      </div>
      <a className={styles.whatsappLink} href={props.whatsappLink} target='_blank'>
        Quiero Suscribirme
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3159_5914)">
            <path d="M20.6595 3.49091C18.4029 1.23636 15.3972 0 12.1997 0C5.61268 0 0.249909 5.33636 0.249909 11.8909C0.249909 13.9909 0.798063 16.0364 1.84869 17.8364L0.149414 24L6.48059 22.3455C8.22555 23.2909 10.1898 23.7909 12.1905 23.7909C18.7775 23.7909 24.1403 18.4545 24.1403 11.9C24.1403 8.71818 22.8978 5.73636 20.6412 3.49091M12.1997 21.7818C10.4182 21.7818 8.66407 21.3091 7.14751 20.4L6.78207 20.1818L3.01809 21.1636L4.02303 17.5182L3.7855 17.1455C2.78969 15.5727 2.26894 13.7545 2.26894 11.8818C2.26894 6.43636 6.72726 2 12.2088 2C14.8582 2 17.3523 3.02727 19.2343 4.9C21.1072 6.77273 22.1395 9.25455 22.1395 11.8909C22.1395 17.3455 17.6812 21.7727 12.2088 21.7727M17.6538 14.3818C17.3523 14.2364 15.8906 13.5182 15.6165 13.4182C15.3424 13.3182 15.1414 13.2727 14.9404 13.5636C14.7394 13.8545 14.173 14.5273 13.9903 14.7273C13.8167 14.9273 13.6431 14.9545 13.3416 14.8C13.0402 14.6455 12.0809 14.3364 10.9389 13.3273C10.0527 12.5364 9.44976 11.5636 9.27617 11.2727C9.10259 10.9818 9.2579 10.8182 9.40408 10.6636C9.54111 10.5273 9.70556 10.3182 9.85174 10.1455C9.99791 9.97273 10.0527 9.84545 10.1532 9.64545C10.2537 9.44545 10.1989 9.27273 10.1258 9.12727C10.0527 8.98182 9.44976 7.51818 9.20309 6.91818C8.95642 6.33636 8.71888 6.41818 8.52703 6.40909C8.35345 6.40909 8.15246 6.4 7.95147 6.4C7.75048 6.4 7.43072 6.47273 7.15665 6.77273C6.88257 7.07273 6.11515 7.79091 6.11515 9.25455C6.11515 10.7182 7.18405 12.1273 7.33023 12.3273C7.4764 12.5273 9.43148 15.5273 12.4281 16.8182C13.1407 17.1273 13.6979 17.3091 14.1273 17.4455C14.8399 17.6727 15.4977 17.6364 16.0093 17.5636C16.5849 17.4818 17.7726 16.8455 18.0284 16.1545C18.275 15.4636 18.275 14.8636 18.2019 14.7455C18.1289 14.6182 17.9279 14.5455 17.6264 14.4" fill="#7AD16D"/>
          </g>
          <defs>
            <clipPath id="clip0_3159_5914">
              <rect width="24" height="24" fill="white" transform="translate(0.149414)"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <div className={styles.contentTerms}>
        <p className={styles.subscribeText}>
          Suscribirte implica aceptar los
        </p>
        <a className={styles.terms} href={props.terms} target='_blank'>Términos y condiciones</a>
      </div>
    </section>
  );
};
