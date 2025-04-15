'use client';
import axios from 'axios';
import {ContactInput} from '../../../client-components/contact-input';
import {ContactTextArea} from '../../../client-components/contact-textarea';
import styles from './styles.module.css';

export const ContactFrom = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const token = await window.grecaptcha.enterprise?.execute(
      '6LeZwxgrAAAAAFpOu-nKNBIWFZco4b6EKLgRlrQZ',
      {
        action: 'contacto',
      }
    );

    const data = {
      token: token,
      name: e?.target[0]?.value,
      email: e?.target[1]?.value,
      subject: e?.target[2]?.value,
      body: `Nombre y Apellido: ${e?.target[0]?.value}\nEmail: ${e?.target[1]?.value}\nAsunto: ${e?.target[2]?.value}\nConsulta: ${e?.target[3]?.value}`,
    };
    try {
      const response = await axios.post('/api/send-contact-email', data);
      console.log(response, 'response');
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <>
      <p className={styles.title}>Contáctenos</p>
      <form
        className={styles.contentForm}
        onSubmit={onSubmit}
      >
        <ContactInput label="Nombre y Apellido" name="name" required />
        <ContactInput label="Email" type="email" name="from" required />
        <ContactInput label="Asunto" name="subject" required/>
        <ContactTextArea label="Consulta" name="body" rows={10} />
        <button
          type='submit'
          className={styles.confirmButton}
          style={{
            margin: '2rem 0rem',
          }}>
          Enviar
        </button>
      </form>
    </>

  );
};
