import {FC} from 'react';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import NewsDescription from '../../client-components/news-description';
import {LiveBlogHeader} from '../../blocks/liveblog-header';
import styles from './styles.module.css';

type Props = {
  option: string;
  news: Array<NewListResponseData>;
};

export const HeaderSectionComponent: FC<Props> = (props) => {
  // eslint-disable-next-line no-case-declarations
  const newsformated: NewListResponseData = {
    ...props.news[0],
    config: {
      zonehome: undefined,
      priorityhome: '',
      zonesection: '',
      prioritysection: ',',
      homepreview: '',
      showcomments: false,
      showtime: false,
      showauthor: false,
      showuppertitle: false,
      showsubtitle: true,
      showads: false,
    },
    info: {
      ...props.news[0].info,
      link: {
        url: undefined,
        target: undefined,
      },
    },
  };

  switch (props.option) {
  case 'liveblog':
    return (
      <LiveBlogHeader
        {...newsformated}
        isTitle
        fontSizeTitle="38px"
        lineHeightTitle="48px"
        fontSizeSubTitle="18px"
        lineHeightSubTitle="28px"
        fontSizeTitleMobile="34px"
        lineHeightTitleMobile='42px'
      />
    );
  default:
    return (
      <div className={styles.contentHeader}>
        <NewsDescription
          {...newsformated}
          fontSizeTitle="38px"
          lineHeightTitle="48px"
          fontSizeSubTitle="18px"
          lineHeightSubTitle="28px"
          fontSizeTitleMobile="34px"
          lineHeightTitleMobile='42px'
          cutSubtitle={false}
          colorSubTitle="black"
          isTitle
          showSubtitle
        />
      </div>
    );
  }
};
