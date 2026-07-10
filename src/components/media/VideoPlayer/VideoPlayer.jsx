/**
 * VideoPlayer Component
 * See VIDEOPLAYER_USAGE.md for usage
 */

'use client';

import { useState, useRef } from'react';
import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';

const VideoPlayer = ({
  src,
  title,
  description,
  autoPlay = true,
  loop = true,
  controls = false,
  muted = true,
  showMuteButton = false,
  aspectRatio ='16/9',
  objectFit ='cover',
  className ='',
  showOverlay = true,
  showPlayButton = false,
  poster,
  onPlay,
  onPause,
  onEnded,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(true);

  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case'16/9':
        return'56.25%';
      case'4/3':
        return'75%';
      case'1/1':
        return'100%';
      case'none':
        return'0';
      default:
        return'56.25%';
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        onPause?.();
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        onPlay?.();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    onEnded?.();
  };

  return (
    <div className={classNames('relative w-full overflow-hidden', className)}>
      <div
        className="relative w-full"
        style={{
          paddingBottom: aspectRatio !=='none' ? getAspectRatioPadding() : undefined,
        }}
      >
        <video
          ref={videoRef}
          className={classNames(
            aspectRatio !=='none' ?'absolute inset-0' :'',
           'w-full h-full',
            `object-${objectFit}`
          )}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          controls={controls}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          poster={poster}
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlay={() => {
            setIsPlaying(true);
            setIsLoading(false);
            onPlay?.();
          }}
          onPause={() => {
            setIsPlaying(false);
            onPause?.();
          }}
          onEnded={handleVideoEnd}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {isLoading && (
          <div className="absolute inset-0 /60 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4  border-t-transparent mb-3"></div>
              <p className=" text-sm sm:text-base font-medium">Video loading...</p>
            </div>
          </div>
        )}

        {showOverlay && (title || description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 lg:p-8 pointer-events-none">
            {title && (
              <h3 className=" font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="/90 text-sm sm:text-base line-clamp-2">
                {description}
              </p>
            )}
          </div>
        )}

        {showPlayButton && !controls && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 /20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer group"
            aria-label={isPlaying ?'Pause video' :'Play video'}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full /30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name={isPlaying ?'pause' :'play'} size={32} className="" />
            </div>
          </button>
        )}

        {!controls && showMuteButton && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full /40 backdrop-blur-sm flex items-center justify-center hover:/60 transition-colors"
            aria-label={isMuted ?'Unmute video' :'Mute video'}
          >
            <Icon name={isMuted ?'volumeOff' :'volume'} size={20} className="" />
          </button>
        )}
      </div>
    </div>
  );
};

VideoPlayer.displayName ='VideoPlayer';

export default VideoPlayer;
