'use client'; // React-share needs to be in client side
import React from 'react';
import styles from './styles.module.css';
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share';
import {Email} from '@/app/_assets/icons/Email';
import {LinkedIn} from '@/app/_assets/icons/LinkedIn';
import {WhatsAppBlack} from '@/app/_assets/icons/WhatsAppBlack';
import {FaceBookBlack} from '@/app/_assets/icons/FaceBookBlack';
import {X} from '@/app/_assets/icons/X';

export default function ShareButtons() {
  const [url, setUrl] = React.useState<string>('');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);
  return <div className={styles.socialNetworkSection}>
    <EmailShareButton url={url}>
      <Email className={styles.emailStyled}/>
    </EmailShareButton>
    <LinkedinShareButton url={url}>
      <LinkedIn className={styles.linkedinStyled}/>
    </LinkedinShareButton>
    <WhatsappShareButton url={url}>
      <WhatsAppBlack className={styles.whatsappStyled}/>
    </WhatsappShareButton>
    <FacebookShareButton url={url}>
      <FaceBookBlack className={styles.facebookStyled}/>
    </FacebookShareButton>
    <TwitterShareButton url={url}>
      <X className={styles.xStyled}/>
    </TwitterShareButton>
  </div>;
}
