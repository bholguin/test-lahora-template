import {FC} from 'react';
import styles from './styles.module.css';
import {Search} from '@/app/_assets/icons/Search';

type Props = {
  query: string;
  hasContent: boolean
};

export const SearchSection: FC<Props> = (props) => {
  return (
    <form className={styles.content} style={{
      height: props.hasContent ? '218px' : '40vh',
    }}>
      <div className={styles.inputStyled}>
        <input
          className={styles.inputStyledTest}
          defaultValue={props.query}
          name="query"
          placeholder='Buscar...'
        />
        <button className={styles.buttonStyled} type="submit">
          <Search className={styles.searchStyled} />
        </button>
      </div>
    </form>
  );
};
