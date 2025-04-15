import dayjs from 'dayjs';

export type Props = {
  params: { news: string };
};

export const getTypeOfNews = (props: Props) => {
  let path = '';

  if (props.params.news.match(/.*t[0-9]*.html/g)) {
    // Nota Lista
    const t = props.params.news.split('-');
    const flag = t[t.length - 1];
    const date = flag.substring(1, 9);
    const note = flag.substring(9, 13);
    path = `/listas/${dayjs(date).format('YYYY/MM/DD')}/lista_${note}.html`;
  } else if (props.params.news.match(/.*lb[0-9]*.html/g)) {
    // Nota LiveBlog
    const t = props.params.news.split('-');
    const flag = t[t.length - 1];
    const date = flag.substring(2, 10);
    const note = flag.substring(10, 14);
    path = `/liveblogs/${dayjs(date).format('YYYY/MM/DD')}/liveblog_${note}.html`;
  } else {
    // Nota Comun
    const t = props.params.news.split('-');
    if (Array.isArray(t)) {
      path = `/contenidos/${dayjs(t[t.length - 2]).format(
        'YYYY/MM/DD'
      )}/noticia_${t[t.length - 1]}`;
    }
  }

  return path;
};
