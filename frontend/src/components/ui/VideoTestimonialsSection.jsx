import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPlayerModal from './VideoPlayerModal';
import KnowMoreBtn from './KnowMoreBtn';
import { videoTestimonialsData } from '../../data/videoTestimonials';
import './VideoTestimonialsSection.css';

const VideoTestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  const featuredVideo = videoTestimonialsData[0];
  const remainingVideos = videoTestimonialsData.slice(1);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <section className="section vt-section bg-dark">
      <div className="container">
        <div className="vt-header">
          <div>
            <h4 className="section-subtitle text-gold">PATIENT VIDEO TESTIMONIALS</h4>
            <h2 className="text-white">Real Stories. Real Smiles.</h2>
            <p className="vt-subtitle">Watch our patients share their treatment journey and experience at Radiaance Dentistry.</p>
          </div>
        </div>

        <div className="vt-layout">
          {/* Featured Video (Left on Desktop, Top on Mobile) */}
          {featuredVideo && (
            <motion.div 
              className="vt-card featured-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openVideo(featuredVideo)}
            >
              <div className="vt-thumbnail-wrapper">
                <video src={featuredVideo.src} className="vt-thumbnail-video" preload="metadata" muted playsInline />
                <div className="vt-overlay"></div>
                <button className="vt-play-btn">
                  <Play size={40} className="play-icon-offset" />
                </button>
                <div className="vt-duration">{featuredVideo.duration}</div>
              </div>
              <div className="vt-info glassmorphism">
                <div className="vt-meta">
                  <span className="vt-name">{featuredVideo.patientName}</span>
                  <span className="vt-treatment text-gold">{featuredVideo.treatment}</span>
                </div>
                <p className="vt-caption">{featuredVideo.caption}</p>
              </div>
            </motion.div>
          )}

          {/* Remaining Videos (Right on Desktop, Horizontal Swipe on Mobile) */}
          {remainingVideos.length > 0 && (
            <div className="vt-scroll-container" ref={scrollContainerRef}>
              {remainingVideos.map((video, index) => (
                <motion.div 
                  key={video.id}
                  className="vt-card list-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => openVideo(video)}
                >
                  <div className="vt-thumbnail-wrapper">
                    <video src={video.src} className="vt-thumbnail-video" preload="metadata" muted playsInline />
                    <div className="vt-overlay"></div>
                    <button className="vt-play-btn small">
                      <Play size={24} className="play-icon-offset" />
                    </button>
                    <div className="vt-duration">{video.duration}</div>
                  </div>
                  <div className="vt-info compact">
                    <div className="vt-meta">
                      <span className="vt-name">{video.patientName}</span>
                      <span className="vt-treatment text-gold">{video.treatment}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="vt-actions">
          <Link to="/video-testimonials" className="btn btn-primary">Watch All Patient Stories</Link>
          <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
        </div>
      </div>

      <VideoPlayerModal 
        video={selectedVideo} 
        videos={videoTestimonialsData}
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        onNavigate={(video) => setSelectedVideo(video)}
      />
    </section>
  );
};

export default VideoTestimonialsSection;
