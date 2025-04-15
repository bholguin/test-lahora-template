import {NewListResponseData} from '../types/new-list-response';
import {VideoResponseData} from '../types/services';

export const becomeVideoObject = (
  video: VideoResponseData
): NewListResponseData => {
  return {
    authors: [],
    info: {
      date: {...video?.info.date, lastpublish: 0, firstpublish: 0, date: ''},
      link: video?.info.link,
    },
    preview: {
      sizes: video?.main.image.sizes,
      description: video?.main.image.description,
    },
    main: {
      title: {
        article: video?.main.title,
        home: video?.main.title,
        section: video?.main.title,
      },
      subtitle: {
        rendered: '',
        striped: '',
      },
      tags: [],
    },
  };
};
