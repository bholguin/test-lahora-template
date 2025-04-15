import {FC, ReactNode} from 'react';
import styles from './styles.module.css';

type ContentCardProps = {
  children: ReactNode;
  id?: string
};

export const ContentCard: FC<ContentCardProps> = (props) => {
  return <section className={styles.content}>{props.children}</section>;
};
