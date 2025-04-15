import {DetailedHTMLProps, FC, TextareaHTMLAttributes} from 'react';
import styles from './styles.module.css';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {label: string}

export const ContactTextArea: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <label className={styles.label}>{props.label}</label>
      <textarea className={styles.input} {...props}/>
    </div>
  );
};
