import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, ChevronLeft, ChevronRight } from 'lucide-react';
import './VideoPlayerModal.css';

const VideoPlayerModal = ({ video, videos, isOpen, onClose, onNavigate }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state on new video load
      setIsPlaying(true);
      setProgress(0);
      setCurrentTime('0:00');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, video]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          if (videoRef.current) {
            videoRef.current.currentTime += 5;
          }
          break;
        case 'ArrowLeft':
          if (videoRef.current) {
            videoRef.current.currentTime -= 5;
          }
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current?.requestFullscreen) {
        videoRef.current.parentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
      
      const mins = Math.floor(current / 60);
      const secs = Math.floor(current % 60);
      setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    }
  };

  const handleProgressBarClick = (e) => {
    const bar = e.currentTarget;
    const clickPosition = e.clientX - bar.getBoundingClientRect().left;
    const percentage = clickPosition / bar.offsetWidth;
    if (videoRef.current) {
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleNext = () => {
    const currentIndex = videos.findIndex(v => v.id === video.id);
    if (currentIndex < videos.length - 1) {
      onNavigate(videos[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = videos.findIndex(v => v.id === video.id);
    if (currentIndex > 0) {
      onNavigate(videos[currentIndex - 1]);
    }
  };

  if (!isOpen || !video) return null;

  const currentIndex = videos.findIndex(v => v.id === video.id);
  const hasNext = currentIndex < videos.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <AnimatePresence>
      <motion.div 
        className="video-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="video-modal-close" onClick={onClose}>
          <X size={32} />
        </div>

        {hasPrev && (
          <button className="nav-btn nav-prev" onClick={handlePrev}>
            <ChevronLeft size={48} />
          </button>
        )}
        
        {hasNext && (
          <button className="nav-btn nav-next" onClick={handleNext}>
            <ChevronRight size={48} />
          </button>
        )}

        <div className="video-container-wrapper" onMouseMove={handleMouseMove} onMouseLeave={() => isPlaying && setShowControls(false)}>
          <video
            ref={videoRef}
            className="video-player-element"
            src={video.src}
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className={`video-controls-overlay ${showControls || !isPlaying ? 'visible' : 'hidden'}`}>
            <div className="video-info-top">
              <h3>{video.patientName}</h3>
              <p>{video.treatment}</p>
            </div>

            <button className="center-play-btn" onClick={togglePlay}>
              {isPlaying ? <Pause size={48} /> : <Play size={48} className="play-icon-offset" />}
            </button>

            <div className="video-controls-bottom">
              <div className="progress-bar-container" onClick={handleProgressBarClick}>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              
              <div className="controls-row">
                <div className="controls-left">
                  <button onClick={togglePlay}>
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button onClick={toggleMute}>
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  <span className="time-display">{currentTime} / {video.duration}</span>
                </div>
                
                <div className="controls-right">
                  <button onClick={toggleFullscreen}>
                    {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayerModal;
