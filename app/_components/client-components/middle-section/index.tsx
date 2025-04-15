
import {FC, ReactNode} from 'react';
// import {Styled} from './styles';
import styles from './styles.module.css';

type Props = {
    children: ReactNode
}
export const MiddleSection: FC<Props> = (props) => {
  // const {children} = props;
  // const count = Children.count(children);
  return <div className={styles.content}>{props.children}</div>;
};
