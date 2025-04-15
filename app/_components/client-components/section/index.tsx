
import {forwardRef, ReactNode} from 'react';
import styles from './styles.module.css';
export interface SectionProps {
  title: ReactNode;
  titleUrl?: string;
  isOpinion?: boolean;
  children: ReactNode;
  variant?: 'primary' | 'secundary';
  isTitle?: boolean;
  ReadMoreButton?: boolean;
  backgroundColor?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const {variant = 'primary', ReadMoreButton = false, isTitle = false, isOpinion = false, backgroundColor = ''} = props;
  return (
    <section className={styles.content} style={{backgroundColor: backgroundColor, padding: backgroundColor !== '' ? '2rem' : ''}}>
      {props.title && <div className={styles.titleContent} data-after={`${props.title === 'Opinión' ? 'false' : isOpinion}`}>
        {!ReadMoreButton && <hr className={styles.startLine}
          style={{backgroundColor: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}
        />}
        {props.titleUrl ? (
          <a href={props.titleUrl}>
            <>
              {
                isTitle ? <h1 className={styles.title}
                  style={{color: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}>
                  {props.title}
                </h1> :
                  <h2 className={styles.title}
                    style={{color: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}>
                    {props.title}
                  </h2>
              }
            </>
          </a>
        ) : (
          <>
            {
              isTitle ? <h1 className={styles.title}
                style={{color: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}>
                {props.title}
              </h1> :
                <h2 className={styles.title}
                  style={{color: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}>
                  {props.title}
                </h2>
            }
          </>
        )}
        {!ReadMoreButton ? <hr className={styles.line}
          style={{backgroundColor: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}
        /> : <a className={styles.readMore} style={{color: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}} href=''>
          LEER MAS
        </a>}
      </div>}
      {ReadMoreButton && <hr className={styles.line}
        style={{backgroundColor: variant === 'primary' ? 'var(--common-black)' : 'var(--common-white)'}}
      />}
      <div className={styles.childrenContent} ref={ref}>
        {props.children}
      </div>
    </section>
  );
});

export default Section;
