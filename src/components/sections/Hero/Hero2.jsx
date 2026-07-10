/**
 * Hero2 - Carousel Hero with Multiple Slides
 * Perfect for: E-commerce, promotional sites
 */

'use client';

import Carousel from'../../media/Carousel/Carousel';
import { classNames } from'../../../utils/base/classNames';

const Hero2 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    slides = [],
    height ='h-[60vh] md:h-[70vh] lg:h-[90vh]',
    effect ='fade',
    autoplay = true,
    autoplayDelay = 5000,
    navigation = true,
    pagination = true,
  } = config;

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className={classNames('relative w-full overflow-hidden', className)}>
      <Carousel
        slides={slides}
        effect={effect}
        navigation={navigation}
        pagination={pagination}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        loop={true}
        imageHeight={height}
        className="hero-carousel"
      />
      {children}
    </section>
  );
};

Hero2.displayName ='Hero2';

export default Hero2;
