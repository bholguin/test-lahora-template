import {Socials} from '@/app/_setup/types/client-variables';

export const SocialNetworks = {
  FaceBook: 'facebook',
  Instagram: 'instagram',
  WhatsApp: 'whatsapp',
  TikTok: 'tiktok',
  Youtube: 'youtube',
  X: 'x',
  Gnews: 'gnews',
};

export const socials: Socials = {
  [SocialNetworks.FaceBook]: {
    title: 'Facebook',
    slug: 'Facebook',
    url: 'https://www.facebook.com/lahoraecuador',
    label: 'Diario La Hora',
    show: true,
  },
  [SocialNetworks.Instagram]: {
    title: 'Instagram',
    slug: 'instagram',
    url: 'https://www.instagram.com/lahoraec/',
    label: 'Diario La Hora',
    show: true,
  },
  [SocialNetworks.TikTok]: {
    title: 'TikTok',
    slug: 'tiktok',
    url: 'https://www.lahora.com.ec/#google_vignette',
    label: 'Diario La Hora',
    show: false,
  },
  [SocialNetworks.X]: {
    title: 'X',
    slug: 'x',
    url: 'https://x.com/lahoraecuador',
    label: 'Diario La Hora',
    show: true,
  },
  [SocialNetworks.Youtube]: {
    title: 'Youtube',
    slug: 'youtube',
    url: 'https://www.youtube.com/user/TheLAHORAECUADOR',
    label: 'Diario La Hora',
    show: true,
  },
  [SocialNetworks.WhatsApp]: {
    title: 'WhatsApp',
    slug: 'whatsapp',
    url: 'https://lhra.ec/WTSLH',
    label: 'Diario La Hora',
    show: true,
  },
  [SocialNetworks.Gnews]: {
    title: 'Gnews',
    slug: 'gnews',
    url: 'https://news.google.com/publications/CAAqBwgKMNzZqgsw2eTCAw?hl=es-419&gl=AR&ceid=AR%3Aes-419',
    label: 'Diario La Hora',
    show: true,
  },
};
