import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}${process.env.API_PATH}${process.env.API_PATH_VERSION}`,
  params: {
    publication: process.env.PUBLICATION_ID,
  },
  headers: {
    'x-api-token': process.env.X_SECURITY_TOKEN,
    'User-Agent': process.env.USER_AGENT,
    'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
  fetchOptions: {
    'adapter': 'fetch',
    'cache': 'no-store',
    'revalidate': 0,
    'next': {
      revalidate: 0,
    },
  },
});
