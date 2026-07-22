import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPlayerModal from './VideoPlayerModal';
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

  const videoSchema = featuredVideo ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `Patient Testimonial - ${featuredVideo.patientName}`,
    "description": featuredVideo.caption,
    "thumbnailUrl": "https://radiaancedentistry.com/assets/logo.png",
    "uploadDate": "2024-01-01T08:00:00+08:00",
    "duration": `PT${featuredVideo.duration.split(':')[0]}M${featuredVideo.duration.split(':')[1]}S`,
    "contentUrl": `https://radiaancedentistry.com${featuredVideo.src}`
  } : null;

  return (
    <section className="section vt-section bg-dark">
      {videoSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
        </Helmet>
      )}
      
      <div className="container">
        <div className="vt-header text-center mb-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-gold mb-15 mx-auto">PATIENT STORIES</div>
            <h2 className="text-white">Real Patients. Real Experiences. Real Smiles.</h2>
            <p className="vt-subtitle max-w-700 mx-auto">Watch genuine stories from our patients and discover how personalized dental care transformed their smiles and confidence.</p>
          </motion.div>
        </div>

        <div className="vt-layout-grid">
          {/* Featured Video (Left Side Desktop) */}
          {featuredVideo && (
            <motion.div 
              className="vt-card featured-card premium-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openVideo(featuredVideo)}
            >
              <div className="vt-thumbnail-wrapper">
                <video src={`${featuredVideo.src}#t=0.5`} className="vt-thumbnail-video" preload="metadata" muted playsInline />
                <div className="vt-overlay"></div>
                <button className="vt-play-btn pulse">
                  <Play size={40} className="play-icon-offset text-navy" fill="currentColor" />
                </button>
                <div className="vt-duration">{featuredVideo.duration}</div>
              </div>
              <div className="vt-info glassmorphism-dark">
                <div className="vt-meta">
                  <span className="vt-name">{featuredVideo.patientName}</span>
                  <span className="vt-treatment text-gold">{featuredVideo.treatment}</span>
                </div>
                <p className="vt-caption">"{featuredVideo.caption}"</p>
              </div>
            </motion.div>
          )}

          {/* Remaining Videos (Right Side Desktop / Horizontal Scroll Mobile) */}
          {remainingVideos.length > 0 && (
            <div className="vt-list-container" ref={scrollContainerRef}>
              {remainingVideos.map((video, index) => (
                <motion.div 
                  key={video.id}
                  className="vt-card list-card premium-hover"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => openVideo(video)}
                >
                  <div className="vt-thumbnail-wrapper">
                    <video src={`${video.src}#t=0.5`} className="vt-thumbnail-video" preload="metadata" muted playsInline />
                    <div className="vt-overlay"></div>
                    <button className="vt-play-btn small">
                      <Play size={20} className="play-icon-offset text-navy" fill="currentColor" />
                    </button>
                    <div className="vt-duration">{video.duration}</div>
                  </div>
                  <div className="vt-info compact glassmorphism-dark">
                    <div className="vt-meta">
                      <span className="vt-name">{video.patientName}</span>
                      <span className="vt-treatment text-gold">{video.treatment}</span>
                    </div>
                    <p className="vt-caption text-sm text-gray-300 line-clamp-1">"{video.caption}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="vt-actions mt-50 text-center flex-center gap-20">
          <Link to="/contact" className="btn-primary">
            Book Appointment
          </Link>
          <Link to="/video-testimonials" className="btn-outline">
            View All Patient Stories &rarr;
          </Link>
        </div>
      </div>

      <VideoPlayerModal 
        video={selectedVideo} 
        videos={videoTestimonialsData}
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        onNavigate={setSelectedVideo}
      />
    </section>
  );
};

export default VideoTestimonialsSection;
