import {ItemList} from '@/app/_setup/types/new-list-response';
import {ContentCard} from '../../client-components/content-card';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import Image from '../../client-components/image';
import styles from './styles.module.css';

type Props = {
  itemList: Array<ItemList>;
  pageProps: {slug: string; news: string};
};

// clean whitespaces
const cleanParagraphs = (html: string): string => html.replace(/<p>(\s|&nbsp;)+<\/p>/g, '');
// add domain to src
const replaceImageSrc = (html: string): string => {
  const domainRegex = /src="\/(.*?)"/g;
  return html.replace(domainRegex, `src="${process.env.NEXT_PUBLIC_API_HOST}/$1"`);
};

export const BlockNoteList = async ({itemList, pageProps}: Props) => {
  const items = itemList[0].list?.items?.map((item) => {
    const cleanBody = cleanParagraphs(item.body.rendered);
    const bodyWithReplacedImages = replaceImageSrc(cleanBody);
    return {
      ...item,
      body: {
        ...item.body,
        rendered: bodyWithReplacedImages,
      },
    };
  });

  return (
    <section className={styles.content} id="block-notes-list">
      {items?.map((item, index) => (
        <ContentCard key={index} id={item.date.toString()}>
          <div className={styles.contentWithinCard}>
            <p
              className={styles.contentDate}
              style={{
                color:
                  pageProps.slug === 'liveblog' ?
                    'var(--warning-dark)' :
                    'var(--common-black)',
              }}
            >
              {item.date > 0 &&
                dayjs(item.date)
                  .locale('es')
                  .format('DD [de] MMMM YYYY hh:mm [hs]')}
            </p>
            <p className={styles.contentTitle}>
              {itemList[0].list.integrated ?
                item.title :
                `${item.index}. ${item.title}`}
            </p>
            <Image preview={item.image} isLarge />
            <div
              className={'contentTextList'}
              dangerouslySetInnerHTML={{
                __html: item.body.rendered,
              }}
            />
            {item.related && (
              <div className={styles.contentButton}>
                <a
                  className={styles.linkStyled}
                  href={item.related ?? ''}
                  target="”_blank"
                >
                  Leer Más
                </a>
              </div>
            )}
          </div>
        </ContentCard>
      ))}
    </section>
  );
};
