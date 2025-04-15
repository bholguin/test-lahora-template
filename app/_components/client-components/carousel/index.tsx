'use client'; // Unmutable: Carrousel and hooks
import {FC} from 'react';
import Carousel from 'react-multi-carousel';
import {CarouselProps} from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';
import './carrousel.css';

export interface CustomCarouselProps
  extends Omit<CarouselProps, 'responsive'> {}

export const CustomCarousel: FC<CustomCarouselProps> = (props) => {
  const config = {
    desktop: {
      breakpoint: {max: 3000, min: 1200},
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {max: 1200, min: 900},
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {max: 900, min: 0},
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="carrouselStyled">
      {props.children && (
        <Carousel
          {...props}
          responsive={config}
          partialVisible
        />
      )}
    </div>
  );
};
