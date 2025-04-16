'use client';
import axios from 'axios';
import {ContactInput} from '../../../client-components/contact-input';
import {ContactTextArea} from '../../../client-components/contact-textarea';
import styles from './styles.module.css';
import {ContactSelect} from '@/app/_components/client-components/contact-select';
import {EDITION_OPTIONS} from '@/app/_setup/config/client/editions';

export const ContactFrom = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const token = await window.grecaptcha.enterprise?.execute(
      process.env.NEXT_PUBLIC_CAPTCHA_KEY,
      {
        action: 'contacto',
      }
    );

    const data = {
      token: token,
      name: e?.target[0]?.value,
      email: e?.target[1]?.value,
      subject: e?.target[2]?.value,
      body: `Nombre y Apellido: ${e?.target[0]?.value}\nEmail: ${e?.target[1]?.value}\nAsunto: ${e?.target[2]?.value}\nConsulta: ${e?.target[4]?.value}`,
    };
    try {
      await axios.post('/api/send-contact-email', data);
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
        <ContactSelect label='Enviar a' options={EDITION_OPTIONS.map((item) => ({label: item.title, value: item.email}))} required/>
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
