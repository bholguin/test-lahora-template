export const cutString = (text: string, length: number = 136) => {
  if (text && text.length > length) {
    return `${text.substring(0, length)}...`;
  } else {
    return text;
  }
};
