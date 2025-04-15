import {FC, InputHTMLAttributes} from 'react';
import styles from './styles.module.css';

type Props = {label: string} & InputHTMLAttributes<HTMLInputElement>

export const ContactInput: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentLabel}>
        <label className={styles.label}>{props.label}</label>
        {props.required && <span className={styles.required}>*</span>}
      </div>
      <input className={styles.input} {...props}/>
    </div>
  );
};
