import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import {FC} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import styles from './styles.module.css';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';

export const SectionCard5: FC<
  NewListResponseData & { showNewsLikeTitle?: boolean; hasShadow?: boolean }
> = async (props) => {
  const {showNewsLikeTitle = false, hasShadow = false} = props;
  const image = await getImageUrl(props?.preview?.sizes[0].url);

  return (props && props.info) ? (
    <section className={styles.content}
      style={{boxShadow: hasShadow ? '0px 4px 8px 0px #00000033' : '0px'}}
    >
      <div>
        <a
          className={styles.sectionDescription}
          target={props?.info?.link?.target}
          href={
            showNewsLikeTitle ? props.info.link.url : props?.info?.section?.url
          }
        >
          {showNewsLikeTitle ?
            props?.main?.title?.section :
            props?.info?.section?.name}
        </a>
        <p className={styles.dateText}>
          {dayjs(props?.info?.date?.modified)
            .locale('es')
            .format('DD [De] MMMM YYYY')}
        </p>
      </div>
      <a
        target={props?.info?.link?.target}
        href={
          showNewsLikeTitle ? props.info.link.url : props?.info?.section?.url
        }
      >
        <img
          className={styles.imageContent}
          title={
            showNewsLikeTitle ?
              props?.main?.title?.section :
              props?.info?.section?.name
          }
          alt={
            props.preview?.description ? props.preview?.description : undefined
          }
          src={image}
        />
      </a>
    </section>
  ) : null;
};
