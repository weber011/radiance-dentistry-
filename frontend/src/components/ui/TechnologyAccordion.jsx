import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import './TechnologyAccordion.css';

const technologies = [
  {
    id: 'cbct',
    name: '3D CBCT Scan',
    description: 'High-resolution three-dimensional imaging for precise diagnosis, implant planning, and complex dental procedures.',
    image: '/assets/tech_cbct.png'
  },
  {
    id: 'scanner',
    name: 'Digital Intraoral Scanner',
    description: 'Fast, comfortable, and highly accurate digital impressions without traditional impression materials.',
    image: '/assets/tech_scanner.png'
  },
  {
    id: 'smile-design',
    name: 'Digital Smile Design',
    description: 'Preview your smile digitally before treatment begins for better planning and predictable results.',
    image: '/assets/smile_designing.png'
  },
  {
    id: 'laser',
    name: 'Laser Dentistry',
    description: 'Minimally invasive procedures with faster healing, reduced discomfort, and greater precision.',
    image: '/assets/tech_laser.png'
  },
  {
    id: 'xray',
    name: 'Digital X-Ray',
    description: 'High-quality digital imaging with significantly reduced radiation exposure.',
    image: '/assets/tech_xray.png'
  },
  {
    id: 'camera',
    name: 'Intraoral Camera',
    description: 'Magnified live images that help patients clearly understand their oral condition.',
    image: '/assets/tech_camera.png'
  },
  {
    id: 'sterilization',
    name: 'Advanced Sterilization System',
    description: 'International sterilization protocols ensuring maximum patient safety.',
    image: '/assets/tech_sterilization.png'
  },
  {
    id: 'chairs',
    name: 'Modern Dental Chairs',
    description: 'Ergonomically designed treatment units focused on patient comfort and efficiency.',
    image: '/assets/treatment_area.jpeg'
  }
];

const TechnologyAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="tech-accordion-container">
      {technologies.map((tech, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <motion.div 
            key={tech.id}
            className={`tech-accordion-item glassmorphism ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setExpandedIndex(index)}
            layout
          >
            <div className="tech-accordion-header">
              <h3 className="tech-name">{tech.name}</h3>
              <div className="tech-icon-wrapper">
                {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="tech-accordion-content"
                >
                  <div className="tech-image-wrapper">
                    <img src={tech.image} alt={tech.name} className="tech-image" />
                    <div className="tech-image-overlay"></div>
                  </div>
                  <div className="tech-details">
                    <p>{tech.description}</p>
                    <Link to={`/advanced-technology#${tech.id}`} className="tech-learn-more">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechnologyAccordion;
