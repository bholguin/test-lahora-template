import {FC, ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  paginatorComponent?: ReactNode;
  grid?: 3 | 4;
  className?: string
};

export const NewsContent: FC<Props> = (props) => {
  const {grid = 3} = props;
  return (
    <section className={`${styles.content}`}>
      <div
        className={`${styles.contentGrid}  ${props.className ? props.className : ''} news-content`}
        style={{
          gridTemplateColumns:
            grid === 3 ? 'repeat(auto-fit,343px)' : 'repeat(auto-fit,271px)',
        }}
      >
        {props.children}
      </div>
      <>{props.paginatorComponent}</>
    </section>
  );
};
