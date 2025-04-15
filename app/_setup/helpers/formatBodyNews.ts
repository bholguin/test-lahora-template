import parse from 'node-html-parser';

export const formatBodyNews = (articleBody: string) => {
  const root = parse(articleBody);

  return root;
};
