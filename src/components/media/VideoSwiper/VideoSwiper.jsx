/**
 * VideoSwiper Component
 * See VIDEOSWIPER_USAGE.md for usage
 */

'use client';

import { classNames } from'../../../utils/base/classNames';
import VideoPlayer from'../VideoPlayer/VideoPlayer';

const VideoSwiper = ({
  videos = [],
  effect ='fade',
  navigation = false,
  pagination = true,
  autoplay = true,
  autoplayDelay = 8000,
  loop = true,
  speed = 800,
  videoHeight ='h-[400px] sm:h-[500px] lg:h-[600px]',
  aspectRatio ='16/9',
  showOverlay = true,
  showPlayButton = false,
  showMuteButton = false,
  className ='',
  onSwiper,
  onSlideChange,
}) => {
  if (!videos || videos.length === 0) {
    return null;
  }

  if (typeof window !=='undefined') {
    try {
      const SwiperComponent = require('swiper/react');
      const SwiperModules = require('swiper/modules');
      
      const { Swiper, SwiperSlide } = SwiperComponent;
      const { Navigation, Pagination, Autoplay, EffectFade } = SwiperModules;
      
      const swiperModules = [Navigation, Pagination, Autoplay, EffectFade];
      
      const autoplayConfig = autoplay
        ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
          }
        : false;

      return (
        <Swiper
          modules={swiperModules}
          effect={effect}
          navigation={navigation}
          pagination={
            pagination
              ? {
                  clickable: true,
                  bulletClass:'swiper-pagination-bullet !/60',
                  bulletActiveClass:'swiper-pagination-bullet-active !',
                }
              : false
          }
          autoplay={autoplayConfig}
          loop={loop}
          speed={speed}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          className={className}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id || index}>
              <div className={classNames('relative w-full', videoHeight)}>
                <VideoPlayer
                  src={video.src || video.path}
                  title={video.title}
                  description={video.description}
                  poster={video.poster}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  aspectRatio={aspectRatio}
                  objectFit="cover"
                  showOverlay={showOverlay}
                  showPlayButton={showPlayButton}
                  showMuteButton={showMuteButton}
                  className="h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } catch (error) {
      return (
        <div className={classNames('video-swiper-fallback', className)}>
          <div className={classNames('relative w-full', videoHeight)}>
            <VideoPlayer
              src={videos[0].src || videos[0].path}
              title={videos[0].title}
              description={videos[0].description}
              poster={videos[0].poster}
              autoPlay={autoplay}
              loop={loop}
              muted={true}
              aspectRatio={aspectRatio}
              objectFit="cover"
              showOverlay={showOverlay}
              showPlayButton={showPlayButton}
              showMuteButton={showMuteButton}
              className="h-full"
            />
          </div>
        </div>
      );
    }
  }

  return null;
};

VideoSwiper.displayName ='VideoSwiper';

export default VideoSwiper;
