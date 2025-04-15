import {FC} from 'react';
import styles from './styles.module.css';
import {headers} from 'next/headers';

type Props = {
  currentPage: number;
  showNext: boolean;
  maxPages: number
};

export const NextPrev: FC<Props> = (props) => {
  const {currentPage, showNext, maxPages} = props;
  const pathname = headers().get('x-request-pathname')!;
  const query = headers().get('x-request-query')!;


  const createPath = (action: 'next' | 'prev') => {
    let path = '';
    const paths = pathname.split('/');
    if (paths.indexOf('page') !== -1) {
      paths.splice(path.indexOf('page') - 1, paths.length - 1);
    }

    paths.forEach((element, index) => {
      if (index !== 0) {
        path += `/${element}`;
      }
    });

    return action === 'next' ?
      (path += `/page/${currentPage + 1}${query ? `?query=${query}` : ''}`) :
      (path += `/page/${currentPage - 1}${query ? `?query=${query}` : ''}`);
  };

  return (
    <section className={styles.content}>
      {currentPage > 1 && (
        <a className={styles.linkStyled} href={createPath('prev')}>
            Anterior
        </a>
      )}
      {showNext && currentPage < maxPages && (
        <a className={styles.linkStyled} href={createPath('next')}>
            Siguiente
        </a>
      )}
    </section>
  );
};
