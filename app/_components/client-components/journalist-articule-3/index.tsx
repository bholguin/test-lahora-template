import {FC} from 'react';
import {AutorIcon} from '@/app/_assets/icons/Autor';
import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
import styles from './styles.module.css';
import ShareButtons from './shareButtons';
import {socials, SocialNetworks} from '@/app/_setup/config/client';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';
dayjs.extend(relativeTime);

type Props = {
  news: NewListResponseData;
};

export const JournalistArticule3: FC<Props> = async (props) => {
  const {news} = props;
  return (
    news.config?.showauthor && (
      <div className={styles.content}>
        <div className={styles.avatarContent}>
          {socials[SocialNetworks.WhatsApp].show ? (
            <a
              className={styles.whatsappLink}
              href={socials[SocialNetworks.WhatsApp].url}
              target="_blank"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2906_6960)">
                  <path
                    d="M25.6376 4.36364C22.8169 1.54545 19.0598 0 15.0628 0C6.82908 0 0.125619 6.67045 0.125619 14.8636C0.125619 17.4886 0.810811 20.0455 2.1241 22.2955L0 30L7.91397 27.9318C10.0952 29.1136 12.5504 29.7386 15.0514 29.7386C23.2851 29.7386 29.9886 23.0682 29.9886 14.875C29.9886 10.8977 28.4355 7.17045 25.6148 4.36364M15.0628 27.2273C12.8359 27.2273 10.6433 26.6364 8.74762 25.5L8.29083 25.2273L3.58584 26.4545L4.84202 21.8977L4.54511 21.4318C3.30034 19.4659 2.64941 17.1932 2.64941 14.8523C2.64941 8.04545 8.22231 2.5 15.0742 2.5C18.386 2.5 21.5036 3.78409 23.8561 6.125C26.1972 8.46591 27.4876 11.5682 27.4876 14.8636C27.4876 21.6818 21.9147 27.2159 15.0742 27.2159M21.8805 17.9773C21.5036 17.7955 19.6764 16.8977 19.3338 16.7727C18.9912 16.6477 18.74 16.5909 18.4888 16.9545C18.2375 17.3182 17.5295 18.1591 17.3011 18.4091C17.0841 18.6591 16.8671 18.6932 16.4903 18.5C16.1134 18.3068 14.9144 17.9205 13.4869 16.6591C12.3791 15.6705 11.6254 14.4545 11.4084 14.0909C11.1915 13.7273 11.3856 13.5227 11.5683 13.3295C11.7396 13.1591 11.9452 12.8977 12.1279 12.6818C12.3106 12.4659 12.3791 12.3068 12.5048 12.0568C12.6304 11.8068 12.5619 11.5909 12.4705 11.4091C12.3791 11.2273 11.6254 9.39773 11.3171 8.64773C11.0088 7.92045 10.7118 8.02273 10.472 8.01136C10.255 8.01136 10.0038 8 9.75257 8C9.50133 8 9.10164 8.09091 8.75904 8.46591C8.41644 8.84091 7.45718 9.73864 7.45718 11.5682C7.45718 13.3977 8.7933 15.1591 8.97602 15.4091C9.15874 15.6591 11.6026 19.4091 15.3483 21.0227C16.2391 21.4091 16.9357 21.6364 17.4724 21.8068C18.3632 22.0909 19.1854 22.0455 19.8249 21.9545C20.5443 21.8523 22.0289 21.0568 22.3487 20.1932C22.657 19.3295 22.657 18.5795 22.5657 18.4318C22.4743 18.2727 22.2231 18.1818 21.8462 18"
                    fill="#7AD16D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2906_6960">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Súmate al canal de La Hora en WhatsApp
            </a>
          ) : (
            <ShareButtons />
          )}

          <section className={styles.journalistSection}>
            {news.authors[0].image ? (
              <img className={styles.imageStyled}
                src={await getImageUrl(news.authors[0].image.sizes[0].url)}
              />
            ) : (
              <div className={styles.contentIconStyled}>
                <AutorIcon />
              </div>
            )}
            {news.authors[0].internaluser ? (
              <a className={styles.journalistInfoLink}
                href={`/autor/${news?.authors[0]?.name}`}
                dangerouslySetInnerHTML={{
                  __html: `Por <p style="padding:0px;">${news.authors[0].fullname}${
                    news.config?.showtime && ','
                  }</p> ${
                    news.config?.showtime ?
                      dayjs(news.info.date.modified)
                        .locale('es')
                        .format('DD [de] MMMM YYYY [•] hh:mm [hs]') :
                      null
                  }`,
                }}
              ></a>
            ) : (
              <div className={styles.journalistInfo}
                dangerouslySetInnerHTML={{
                  __html: `Por <p>${news.authors[0].fullname}${
                    news.config?.showtime && ','
                  }</p> ${
                    news.config?.showtime ?
                      dayjs(news.info.date.modified)
                        .locale('es')
                        .format('DD [de] MMMM YYYY [•] hh:mm [hs]') :
                      null
                  }`,
                }}
              ></div>
            )}
          </section>
        </div>
      </div>
    )
  );
};
