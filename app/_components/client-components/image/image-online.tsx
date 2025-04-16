import {FC} from 'react';
import {Preview} from '@/app/_setup/types/new-list-response';
import {getImageUrl} from '@/app/_setup/helpers/imageEnvirontment';
import styles from './styles.module.css';
import {Play} from '@/app/_assets/icons/Play';

export interface ImageProps {
  preview: Preview;
  isVideo?: boolean;
  rounded?: boolean;
  isLarge?: boolean;
  hasShadow?: boolean;
  BackDropAuxHeigthMobile?: string;
}

const ImageOnline: FC<ImageProps> = async (props) => {
  const {
    rounded = false,
    isVideo = false,
    isLarge = false,
    hasShadow = false,
    BackDropAuxHeigthMobile,
  } = props;

  const images = props?.preview?.sizes;

  return images ? (
    images.length === 1 ? (
      <figure className={styles.figure}>
        <span
          className={styles.backdrop}
          style={{borderRadius: rounded ? '12px' : '0'}}
        >
          <span
            className={styles.backdropAux}
            style={{
              borderRadius: rounded ? '10px' : '0',
              height: BackDropAuxHeigthMobile ?
                BackDropAuxHeigthMobile :
                '56.25%',
            }}
          />
          <picture>
            <img
              className={styles.imageStyled}
              style={{
                borderRadius: rounded ? '10px' : '0',
                boxShadow: hasShadow ? '0px 4px 8px 0px #00000033' : '0px',
              }}
              alt={
                props.preview?.description ?
                  props.preview?.description :
                  ''
              }
              src={
                props?.preview?.original ?
                  await getImageUrl(images[0]?.url || ''):
                  ''
              }
            />
            {isVideo && (
              <>
                <div
                  className={styles.boxPlayIcon}
                  style={{height: isLarge ? '40%' : '72px'}}
                />
                <Play
                  className={styles.playStyled}
                  style={{
                    width: isLarge ? '3rem' : '27px',
                    height: isLarge ? '3rem' : '27px',
                    marginBottom: isLarge ? '18px' : '.5rem',
                    marginLeft: isLarge ? '30px' : '.5rem',
                  }}
                />
              </>
            )}
          </picture>
        </span>
      </figure>
    ) : (
      <figure className={styles.figure}>
        <span
          className={styles.backdrop}
          style={{borderRadius: rounded ? '12px' : '0'}}
        >
          <span
            className={styles.backdropAux}
            style={{borderRadius: rounded ? '10px' : '0',
              height: BackDropAuxHeigthMobile ?
                BackDropAuxHeigthMobile :
                '56.25%',
            }}
          />
          <picture>
            {images?.map(async (item, index) => {
              if (props.isLarge) {
                if (item.width >= 580) {
                  return (
                    <source
                      media="(width >= 750px)"
                      srcSet={await getImageUrl(item.url)}
                      key={index}
                    />
                  );
                } else {
                  return (
                    <source
                      media="(width < 750px)"
                      srcSet={await getImageUrl(item.url)}
                      key={index}
                    />
                  );
                }
              } else {
                if (item.width < 580) {
                  return (
                    <source
                      srcSet={await getImageUrl(item.url)}
                      key={index}
                    />
                  );
                }
              }
            })}
            <img
              className={styles.imageStyled}
              alt={
                props.preview?.description ?
                  props.preview?.description :
                  ''
              }
              src={
                props?.preview?.original ?
                  await getImageUrl(images[images.length > 1 ? 1 : 0]?.url || '') :
                  ''
              }
              style={{
                borderRadius: rounded ? '10px' : '0',
                boxShadow: hasShadow ? '0px 4px 8px 0px #00000033' : '0px',
              }}
            />
            {isVideo && (
              <>
                <div
                  className={styles.boxPlayIcon}
                  style={{height: isLarge ? '40%' : '72px'}}
                />
                <Play
                  className={styles.playStyled}
                  style={{
                    width: isLarge ? '3rem' : '27px',
                    height: isLarge ? '3rem' : '27px',
                    marginBottom: isLarge ? '18px' : '.5rem',
                    marginLeft: isLarge ? '30px' : '.5rem',
                  }}
                />
              </>
            )}
          </picture>
        </span>
      </figure>
    )
  ) : null;
};

export default ImageOnline;
