import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import VideoPlayerModal from '../components/ui/VideoPlayerModal';
import { videoTestimonialsData } from '../data/videoTestimonials';
import './VideoTestimonialsPage.css';

const VideoTestimonialsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filters = ['All', 'Smile Makeover', 'Dental Implants', 'Clear Aligners', 'Root Canal', 'Teeth Whitening'];

  const filteredVideos = selectedFilter === 'All' 
    ? videoTestimonialsData 
    : videoTestimonialsData.filter(v => v.category === selectedFilter);

  const featuredStory = videoTestimonialsData[0]; // the first one is featured

  return (
    <>
      <Helmet>
        <title>Patient Video Testimonials | Radiaance Dentistry</title>
        <meta name="description" content="Watch real patient stories and experiences at Radiaance Dentistry. Discover how our treatments have transformed smiles and lives." />
        <link rel="canonical" href="https://radiaancedentistry.com/video-testimonials" />
        
        {/* Schema Markup for Video Gallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": videoTestimonialsData.map((video, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "VideoObject",
                "name": `Testimonial by ${video.patientName} - ${video.treatment}`,
                "description": video.caption,
                "thumbnailUrl": "https://radiaancedentistry.com/assets/logo.png",
                "uploadDate": "2024-01-01T08:00:00+08:00",
                "contentUrl": `https://radiaancedentistry.com${video.src}`
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="vt-page-hero">
        <div className="vt-hero-overlay"></div>
        <div className="container vt-hero-content">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Video Testimonials</span>
          </div>
          <h1>Real Stories. Real Smiles.</h1>
          <p>Watch our patients share their treatment journey and experience at Radiaance Dentistry.</p>
        </div>
      </section>

      {/* Featured Patient Story */}
      {featuredStory && (
        <section className="section bg-light vt-featured-section">
          <div className="container">
            <FadeInWhenVisible>
              <h4 className="section-subtitle">FEATURED STORY</h4>
              <h2 className="mb-40">A Life-Changing Transformation</h2>
              
              <div className="vt-featured-grid">
                <div 
                  className="vt-card featured-page-card" 
                  onClick={() => setSelectedVideo(featuredStory)}
                >
                  <div className="vt-thumbnail-wrapper">
                    <video src={featuredStory.src} className="vt-thumbnail-video" preload="metadata" muted playsInline />
                    <div className="vt-overlay"></div>
                    <button className="vt-play-btn">
                      <Play size={40} className="play-icon-offset" />
                    </button>
                    <div className="vt-duration">{featuredStory.duration}</div>
                  </div>
                </div>
                
                <div className="vt-featured-details">
                  <h3 className="mb-10">{featuredStory.patientName}'s Journey</h3>
                  <h4 className="text-gold mb-20">{featuredStory.treatment}</h4>
                  <p className="body-text mb-30">{featuredStory.caption}</p>
                  
                  <div className="vt-timeline mb-40">
                    <h5 className="mb-15">Patient Journey</h5>
                    <ul className="premium-checklist">
                      <li><CheckCircle2 size={18} className="text-gold" /> Initial Consultation & Digital Scan</li>
                      <li><CheckCircle2 size={18} className="text-gold" /> Customized Treatment Planning</li>
                      <li><CheckCircle2 size={18} className="text-gold" /> Painless Procedure execution</li>
                      <li><CheckCircle2 size={18} className="text-gold" /> Final Smile Reveal</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-15">
                    <button className="btn btn-primary" onClick={() => setSelectedVideo(featuredStory)}>Watch Full Video</button>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      )}

      {/* All Videos Grid */}
      <section className="section vt-grid-section">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Explore More Patient Stories</h2>
          </div>
          
          <div className="vt-filters mb-40">
            {filters.map(filter => (
              <button 
                key={filter} 
                className={`vt-filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="vt-page-grid">
            {filteredVideos.map((video, index) => (
              <FadeInWhenVisible key={video.id} delay={index * 0.1}>
                <div className="vt-card list-card" onClick={() => setSelectedVideo(video)}>
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
                </div>
              </FadeInWhenVisible>
            ))}
            
            {filteredVideos.length === 0 && (
              <div className="vt-no-results text-center py-60">
                <p>No video testimonials available for this treatment category yet.</p>
                <button className="btn btn-outline mt-20" onClick={() => setSelectedFilter('All')}>View All Stories</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center bg-navy text-white">
        <div className="container">
          <FadeInWhenVisible>
            <h2>Ready to Start Your Own Journey?</h2>
            <p className="max-w-700 mx-auto mb-40 text-light">Join hundreds of happy patients and transform your smile with our expert team.</p>
            <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
          </FadeInWhenVisible>
        </div>
      </section>

      <VideoPlayerModal 
        video={selectedVideo} 
        videos={filteredVideos}
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        onNavigate={(video) => setSelectedVideo(video)}
      />
    </>
  );
};

export default VideoTestimonialsPage;
