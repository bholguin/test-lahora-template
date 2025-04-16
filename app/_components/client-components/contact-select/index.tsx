import {FC, InputHTMLAttributes} from 'react';
import styles from './styles.module.css';

export type SelectItem = {
  label: string;
  value: string | number;
};

type Props = {
  label: string;
  options: Array<SelectItem>;
} & InputHTMLAttributes<HTMLSelectElement>;

export const ContactSelect: FC<Props> = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentLabel}>
        <label className={styles.label}>{props.label}</label>
        {props.required && <span className={styles.required}>*</span>}
      </div>
      <select className={styles.input} {...props} >
        <option value={''}>--Seleccione--</option>
        {
          props.options.map((item, index) => (
            <option value={item.value} key={index}>{item.label}</option>
          ))
        }
      </select>
    </div>
  );
};
