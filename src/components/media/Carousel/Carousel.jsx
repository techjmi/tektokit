/**
 * Carousel Component
 * See CAROUSEL_USAGE.md for usage
 */

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCube } from 'swiper/modules';
import { classNames } from'../../../utils/base/classNames';
import Image from'../Image/Image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';

const Carousel = ({
  slides = [],
  effect ='fade',
  navigation = true,
  pagination = true,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnMouseEnter = false,
  loop = true,
  speed = 600,
  className ='',
  slideClassName ='',
  imageHeight ='h-[400px] sm:h-[500px] lg:h-[600px]',
  imageClassName ='',
  spaceBetween = 0,
  slidesPerView = 1,
  breakpoints,
  onSlideChange,
  onSwiper,
}) => {
  if (!slides || slides.length === 0) {
    return null;
  }

  const swiperModules = [Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCube];

  const autoplayConfig = autoplay
    ? {
        delay: autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter,
      }
    : false;

  return (
    <Swiper
      modules={swiperModules}
      effect={effect}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplayConfig}
      loop={loop}
      speed={speed}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      className={className}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id || index} className={slideClassName}>
          {slide.content ? (
            // Custom content slide (for testimonials, custom components, etc.)
            <div className="w-full h-full">
              {slide.content}
            </div>
          ) : (
            // Image slide (default)
            <div className={classNames('relative w-full', imageHeight)}>
              <Image
                src={slide.image || slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                aspectRatio="none"
                objectFit="cover"
                className={classNames('w-full h-full', imageClassName)}
                loading={index === 0 ?'eager' :'lazy'}
              />

              {(slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
                  <div className="text-center  px-4 sm:px-6 max-w-4xl mx-auto z-10">
                    {slide.title && (
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-md">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
