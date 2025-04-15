import {SubscribeImage} from '@/app/_assets/icons/SubscribeImage';
import styles from './styles.module.css';
import {ButtonApp} from '../../button-app';

export const SubscribeColumn = () => {
  return (
    <section className={styles.content}>
      <SubscribeImage className={styles.subscribeImage} />
      <div className={styles.tag}>NEWS</div>
      <div className={styles.contentTitle}>
        <p className={styles.title}>Mantenete Informado</p>
        <p className={styles.subTitle}>
        Ingresa tu correo electrónico y te enviaremos lo último
        </p>
      </div>
      <div className={styles.inputStyled}>
        <input type='email' placeholder='Ingresa tu email'/>
      </div>
      <ButtonApp className={styles.buttonStyled} variant="contained" rounded size="large" full>
        Quiero Suscribirme
      </ButtonApp>
      <div className={styles.contentTerms}>
        <p className={styles.subscribeText}>
        Suscribirte implica aceptar los
        </p>
        <a className={styles.terms}>Términos y condiciones</a>
      </div>
    </section>
  );
};
