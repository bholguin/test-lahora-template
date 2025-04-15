import {parse} from 'node-html-parser';

type SrcArray = string[];

export default function extractRealtedNews(
  articleBody: string
): Array<Array<string>> {
  const resultado: Array<Array<string>> = [];
  const root = parse(articleBody);
  const relatedNewsDiv = root.querySelectorAll('.ck-related-news');
  relatedNewsDiv.forEach((div) => {
    const srcArray: SrcArray = [];

    const spanElements = div.querySelectorAll('span[data-src]');

    spanElements.forEach((span) => {
      const src = span.getAttribute('data-src') ?? '';
      srcArray.push(src);
    });

    resultado.push(srcArray);
  });

  return resultado;
}
