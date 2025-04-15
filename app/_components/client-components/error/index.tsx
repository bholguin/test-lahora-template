import {LogoSponsor} from '@/app/_assets/icons/LogoSponsor';
import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
  title: string;
  description: string;
};

export const Error: FC<Props> = (props) => {
  return (
    <section className={styles.content}>
      <div className={styles.textContent}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
        <a className={styles.linkStyled} href="/">Inicio</a>
        <LogoSponsor
          style={{
            color: 'var(--common-white)',
            width: '200px',
            height: '200px',
            margin: '0',
          }}
        />
      </div>
    </section>
  );
};
