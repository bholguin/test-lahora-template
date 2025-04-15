export const getEnvironmentUrl = () => {
  if (process.env.NEXT_PUBLIC_ENV == 'local') {
    return process.env.NEXT_PUBLIC_API_HOST;
  }
  return '';
};


export const getEnvironmentUrlFront = () => {
  if (process.env.NEXT_PUBLIC_ENV === 'local') {
    return process.env.NEXT_PUBLIC_API_FRONT;
  }
  return '';
};
