/**
 * Testimonials - Testimonial cards/slider component
 * Can display as grid or carousel
 */
'use client';
import { useRef, useState } from 'react';
import Avatar from'../../ui/Avatar/Avatar';
import Carousel from'../../media/Carousel/Carousel';
import Card from'../../ui/Card/Card';
import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';
import './Testimonials.css';
const Testimonials = ({ config, className ='', children }) => {
  const swiperRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  if (!config) return null;
  const {
    title,
    subtitle,
    description,
    testimonials = [],
    layout ='grid',
    columns = 4,
    showRating = true,
  } = config;
  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setCanScrollPrev(swiper.isBeginning === false);
    setCanScrollNext(swiper.isEnd === false);
  };
  const handleSlideChange = (swiper) => {
    setCanScrollPrev(swiper.isBeginning === false);
    setCanScrollNext(swiper.isEnd === false);
  };
  const columnClasses = {
    2:'grid-cols-1 md:grid-cols-2',
    3:'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4:'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  const TestimonialCard = ({ testimonial }) => (
    <Card className="h-full flex flex-col items-center text-center">
      {/* Avatar at top */}
      {testimonial.avatar && (
        <div className="mb-2 md:mb-4">
          <Avatar
            src={testimonial.avatar}
            name={testimonial.name}
            size="xl"
          />
        </div>
      )}

      {/* Rating stars */}
      {showRating && testimonial.rating && (
        <div className="flex gap-1 mb-2 md:mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="FiStar"
              size={16}
              className={i < testimonial.rating ?'text-yellow-500 fill-yellow-500' :'opacity-30'}
            />
          ))}
        </div>
      )}
      {/* Quote */}
      {testimonial.quote && (
        <blockquote className="text-sm md:text-base mb-2 md:mb-4 flex-grow opacity-80">
         "{testimonial.quote}"
        </blockquote>
      )}

      {/* Name and Role at bottom */}
      <div className="mt-auto pt-2 md:pt-4 w-full">
        {testimonial.name && (
          <p className="font-semibold text-base md:text-lg mb-1">
            {testimonial.name}
          </p>
        )}
        {testimonial.role && (
          <p className="text-xs md:text-sm opacity-70">
            {testimonial.role}
          </p>
        )}
      </div>
    </Card>
  );
  return (
    <section className={classNames('', className)}>
      <div className=" mx-auto m-2 md:m-4 lg:m-6">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {subtitle && (
              <p className="text-xs md:text-sm font-semibold  uppercase tracking-wide mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg opacity-80">
                {description}
              </p>
            )}
          </div>
        )}
        {testimonials && testimonials.length > 0 && (
          layout ==='carousel' ? (
            <div className="relative">
              <Carousel
                slides={testimonials.map(t => ({
                  content: <div className="h-full"><TestimonialCard testimonial={t} /></div>
                }))}
                effect="slide"
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={true}
                navigation={false}
                className="testimonials-carousel"
                slideClassName="h-auto"
                onSwiper={handleSwiperInit}
                onSlideChange={handleSlideChange}
              />
              {/* Custom Navigation Buttons */}
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={!canScrollPrev}
                className="testimonials-nav-button testimonials-nav-button--prev"
                aria-label="Previous slide"
              >
                <Icon name="arrowLeft" size={20} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={!canScrollNext}
                className="testimonials-nav-button testimonials-nav-button--next"
                aria-label="Next slide"
              >
                <Icon name="arrowRight" size={20} />
              </button>
            </div>
          ) : layout ==='scroll' ? (
            <div className="testimonials-scroll-container overflow-hidden">
              <div className="testimonials-scroll-track">
                {/* Duplicate items for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="testimonials-scroll-item">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={classNames('grid gap-6 md:gap-8', columnClasses[columns] || columnClasses[4])}>
              {testimonials.map((testimonial, index) => (
                testimonial && <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          )
        )}
        {children}
      </div>
    </section>
  );
};

export default Testimonials;
