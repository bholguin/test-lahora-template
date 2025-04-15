import styles from './styles.module.css';

export const ContactCard = () => {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Quito - Casa matriz</p>
      <div className={styles.infoContent}>
        <p className={styles.info}>
          Teléfono: 099-530-7424 / 098-426-2078
        </p>
        <p className={styles.info}>
          Email anuncios, publicidad y comercial: publicidad@lahora.com.ec
        </p>
        <p className={styles.info}>
          Email anuncios, publicidad y comercial: publicidad@lahora.com.ec
        </p>
      </div>
    </div>
  );
};
