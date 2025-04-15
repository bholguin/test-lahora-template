import {JournalistArticule} from '@/app/_components/client-components/journalist-articule-1';
import styles from './styles.module.css';

export const RigthSide1 = () => {
  return (
    <div className={styles.content}>
      <p className={styles.headLines}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniamdolore magna al.
      </p>
      <JournalistArticule
        journalist="Por Jaime Pérez, 23 de junio 2023 · 05:03 hs"
        aticle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis
        nunc sed blandit. Viverra nibh cras pulvinar mattis nunc. Mauris
        ultrices eros in cursus turpis massa tincidunt dui ut."
      />
    </div>
  );
};
