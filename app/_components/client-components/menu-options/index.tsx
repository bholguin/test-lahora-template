import {ChevronDown} from '@/app/_assets/icons/ChevronDown';
import {MenuResponse} from '@/app/_setup/types/services';
import {FC} from 'react';
import styles from './styles.module.css';

type Props = {
  items: MenuResponse[];
};

export const MenuOptions: FC<Props> = (props) => {
  const {items} = props;

  return (
    <ul className={styles.ul}>
      {items.map((item, index) => (
        <li className={styles.li} key={index}>
          <a
            className={styles.linkStyled}
            href={item.link ? item.link : undefined}
            target={item.target}
          >
            {item.description}
            {Array.isArray(item.subitem) && <ChevronDown />}
          </a>
          {Array.isArray(item.subitem) && (
            <ul className={styles.ulContent}>
              <div className={styles.contentModal}>
                {item.subitem.map((sub, indexSub) => (
                  <li className={styles.li} key={indexSub}>
                    <a
                      className={styles.itemLink}
                      href={sub.link ? sub.link : undefined}
                      target={sub.target}
                    >
                      {sub.description}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
