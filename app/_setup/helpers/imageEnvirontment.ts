import axios from 'axios';
import {getEnvironmentUrl} from './getEnviromentUrl';


function getCookie(cname: string) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function blobToBase64(blob: any) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export const getImageUrl = async (imageUrl: string) => {
  if (
    process.env.NEXT_PUBLIC_IS_OFFLINE === 'true'
  ) {
    const token = getCookie('LaHora');
    const browserId = getCookie('browserId');
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_HOST}${imageUrl}`,
        {
          responseType: 'blob',
          withCredentials: false,
          headers: {
            PROJECT: 'Offline',
            SITE: '/sites/lahora',
            USER_TOKEN: token,
            BROWSER_ID: browserId,
          },
        }
      );
      const url = await blobToBase64(response.data);
      return `${url}`;
    } catch (e: any) {
      console.log(e);
    }
  } else {
    const environmentUrl = getEnvironmentUrl();
    return `${environmentUrl}${imageUrl}`;
  }
};
