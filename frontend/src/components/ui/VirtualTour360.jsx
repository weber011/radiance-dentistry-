import React, { useState, useEffect, useRef } from 'react';
import { 
  Rotate3D, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  ZoomIn, 
  ZoomOut, 
  RefreshCw, 
  Info, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Monitor,
  Sofa,
  UserCheck,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import './VirtualTour360.css';

const rooms = [
  {
    id: 'reception',
    name: 'Sanctuary Lounge & Reception',
    icon: <Sofa size={18} />,
    image: '/assets/reception.jpeg',
    subtitle: 'Welcome to Radiaance Dentistry',
    description: 'Step into our serene, hotel-inspired waiting lounge designed to eliminate dental anxiety from the moment you arrive.',
    hotspots: [
      { id: 1, x: 35, y: 55, title: 'Anxiety-Free Ambiance', desc: 'Aromatic calming scents, soothing background acoustics, and plush seating for a relaxing start.' },
      { id: 2, x: 75, y: 48, title: 'Concierge Patient Desk', desc: 'Our friendly patient coordinators ensure seamless, zero-wait check-ins and transparent assistance.' },
      { id: 3, x: 15, y: 40, title: 'Refreshment Station', desc: 'Complimentary herbal teas and mineral water available for your refreshment.' }
    ]
  },
  {
    id: 'office',
    name: 'Dr. Ruchi Jain Consultation Suite',
    icon: <UserCheck size={18} />,
    image: '/assets/office.jpeg',
    subtitle: 'Private & Transparent Treatment Planning',
    description: 'A dedicated, confidential consultation environment where Dr. Ruchi Jain discusses your dental health, answers all questions, and designs your custom smile plan.',
    hotspots: [
      { id: 1, x: 48, y: 52, title: 'One-on-One Consultation', desc: 'Unhurried, empathetic discussions about your oral health without clinical intimidation.' },
      { id: 2, x: 78, y: 42, title: 'Digital Treatment Display', desc: 'High-definition 4K screens for collaboratively reviewing your digital X-rays and 3D smile design previews.' }
    ]
  },
  {
    id: 'treatment',
    name: 'Advanced Operatory Suite',
    icon: <Stethoscope size={18} />,
    image: '/assets/treatment_area.jpeg',
    subtitle: 'Ergonomic & Pain-Free Clinical Care',
    description: 'Our state-of-the-art treatment suite featuring ergonomic dental chairs and integrated digital diagnostic tools for flawless clinical results.',
    hotspots: [
      { id: 1, x: 52, y: 62, title: 'Ergonomic Treatment Chair', desc: 'Ultra-plush memory foam cushioning designed to keep you relaxed and comfortable during extended visits.' },
      { id: 2, x: 25, y: 38, title: 'Chairside Digital Imaging', desc: 'Real-time intraoral camera feeds and digital radiography directly at chairside for instant diagnosis.' },
      { id: 3, x: 82, y: 45, title: 'Painless Delivery Systems', desc: 'Modern computerized anesthesia techniques ensuring completely stress-free, pain-free treatments.' }
    ]
  },
  {
    id: 'tech',
    name: 'Digital Diagnostics Center',
    icon: <Monitor size={18} />,
    image: '/assets/equipment.jpeg',
    subtitle: 'Precision 3D Dental Imaging',
    description: 'Equipped with advanced CBCT scanners and digital impression systems for micro-millimeter diagnostic accuracy and safe treatment planning.',
    hotspots: [
      { id: 1, x: 42, y: 52, title: '3D CBCT Imaging System', desc: 'Provides comprehensive 3D views of jawbone, nerves, and tooth anatomy with minimal radiation exposure.' },
      { id: 2, x: 68, y: 58, title: 'Digital Impression Scanner', desc: 'No more gagging on messy impression goop—fast, comfortable, and highly accurate 3D digital impressions.' }
    ]
  },
  {
    id: 'sterilization',
    name: 'Infection Control Bay',
    icon: <ShieldCheck size={18} />,
    image: '/assets/tech_sterilization.png',
    subtitle: '100% Hospital-Grade Sterilization',
    description: 'Our dedicated sterilization and hygiene bay adhering strictly to international infection control protocols for uncompromising patient safety.',
    hotspots: [
      { id: 1, x: 50, y: 50, title: 'Class-B Autoclave Sterilizer', desc: 'Multi-stage vacuum autoclaving guarantees 100% sterile instruments for every single procedure.' },
      { id: 2, x: 78, y: 65, title: 'Sterile Sealed Pouches', desc: 'Every instrument set is individually sterile-sealed and opened only in front of you at the chairside.' }
    ]
  }
];

const VirtualTour360 = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [panX, setPanX] = useState(0);
  const [zoom, setZoom] = useState(1.2);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef(null);
  const currentRoom = rooms[currentRoomIndex];

  // Auto rotation effect
  useEffect(() => {
    let animationFrame;
    if (isAutoRotating && !isDragging && !activeHotspot) {
      const animate = () => {
        setPanX((prev) => {
          // Smooth oscillations between -30% and +30%
          const next = prev + 0.08;
          if (next > 35) return -35;
          return next;
        });
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoRotating, isDragging, activeHotspot]);

  // Reset view when switching rooms
  const handleRoomChange = (index) => {
    setCurrentRoomIndex(index);
    setPanX(0);
    setActiveHotspot(null);
    setIsAutoRotating(true);
  };

  // Drag handlers for interactive panning
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setDragStartX(e.clientX - panX * 10);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newPan = (e.clientX - dragStartX) / 10;
    // Constrain pan between -40 and 40
    const clampedPan = Math.max(-40, Math.min(40, newPan));
    setPanX(clampedPan);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile swipe panning
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setDragStartX(e.touches[0].clientX - panX * 10);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const newPan = (e.touches[0].clientX - dragStartX) / 10;
    const clampedPan = Math.max(-40, Math.min(40, newPan));
    setPanX(clampedPan);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Zoom controls
  const handleZoomIn = () => setZoom((z) => Math.min(2.0, z + 0.2));
  const handleZoomOut = () => setZoom((z) => Math.max(1.0, z - 0.2));
  const handleResetView = () => {
    setPanX(0);
    setZoom(1.2);
    setIsAutoRotating(true);
    setActiveHotspot(null);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`virtual-tour-360-container ${isFullscreen ? 'fullscreen-mode' : ''}`} ref={containerRef}>
      {/* Top Navigation / Room Selector Tabs */}
      <div className="vt-header-bar glassmorphism-dark">
        <div className="vt-title-section">
          <div className="vt-live-badge">
            <span className="pulse-dot"></span> 360° VIRTUAL TOUR
          </div>
          <h3>{currentRoom.name}</h3>
        </div>
        <div className="vt-room-tabs">
          {rooms.map((room, idx) => (
            <button 
              key={room.id}
              className={`vt-tab-btn ${currentRoomIndex === idx ? 'active' : ''}`}
              onClick={() => handleRoomChange(idx)}
            >
              <span className="vt-tab-icon">{room.icon}</span>
              <span className="vt-tab-label">{room.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 360 Interactive Viewport */}
      <div 
        className={`vt-viewport ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Interactive Panning & Zoom Canvas */}
        <div 
          className="vt-canvas"
          style={{
            transform: `scale(${zoom}) translate3d(${panX}%, 0, 0)`,
            backgroundImage: `url(${currentRoom.image})`
          }}
        >
          {/* Interactive Hotspots */}
          {currentRoom.hotspots.map((spot) => (
            <div 
              key={spot.id}
              className={`vt-hotspot ${activeHotspot?.id === spot.id ? 'active' : ''}`}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(spot);
                setIsAutoRotating(false);
              }}
            >
              <div className="hotspot-pulse-ring"></div>
              <div className="hotspot-inner-circle">
                <Info size={14} />
              </div>
              <span className="hotspot-tooltip">{spot.title}</span>
            </div>
          ))}
        </div>

        {/* Drag Instruction Banner */}
        <div className="vt-interaction-hint">
          <Navigation size={14} className="spin-slow text-gold" />
          <span>Click &amp; Drag horizontally to explore 360° view | Click markers for details</span>
        </div>

        {/* Hotspot Detail Popover Card */}
        {activeHotspot && (
          <div className="vt-hotspot-modal glassmorphism" onClick={(e) => e.stopPropagation()}>
            <button className="vt-modal-close" onClick={() => setActiveHotspot(null)}>
              <X size={18} />
            </button>
            <div className="vt-modal-header">
              <Sparkles size={20} className="text-gold" />
              <h4>{activeHotspot.title}</h4>
            </div>
            <p>{activeHotspot.desc}</p>
            <div className="vt-modal-footer">
              <span className="text-xs text-gold font-medium"><CheckCircle2 size={12} className="inline mr-1"/> Verified Clinic Feature</span>
            </div>
          </div>
        )}

        {/* Bottom Control Bar */}
        <div className="vt-controls-bar glassmorphism-dark">
          <div className="vt-controls-left">
            <button 
              className={`vt-ctrl-btn ${isAutoRotating ? 'active-gold' : ''}`}
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              title="Toggle Auto 360 Rotation"
            >
              {isAutoRotating ? <Pause size={18} /> : <Play size={18} />}
              <span>{isAutoRotating ? 'Pause 360°' : 'Auto 360°'}</span>
            </button>
            <button 
              className="vt-ctrl-btn" 
              onClick={handleResetView}
              title="Reset Camera View"
            >
              <RefreshCw size={18} />
              <span className="hide-mobile">Reset View</span>
            </button>
          </div>

          <div className="vt-controls-center">
            <button 
              className="vt-nav-arrow" 
              onClick={() => handleRoomChange((currentRoomIndex - 1 + rooms.length) % rooms.length)}
              title="Previous Room"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="vt-room-counter">Room {currentRoomIndex + 1} of {rooms.length}</span>
            <button 
              className="vt-nav-arrow" 
              onClick={() => handleRoomChange((currentRoomIndex + 1) % rooms.length)}
              title="Next Room"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="vt-controls-right">
            <button className="vt-ctrl-btn icon-only" onClick={handleZoomOut} title="Zoom Out">
              <ZoomOut size={18} />
            </button>
            <span className="vt-zoom-level">{Math.round(zoom * 100)}%</span>
            <button className="vt-ctrl-btn icon-only" onClick={handleZoomIn} title="Zoom In">
              <ZoomIn size={18} />
            </button>
            <div className="vt-ctrl-divider"></div>
            <button className="vt-ctrl-btn icon-only" onClick={toggleFullscreen} title="Toggle Fullscreen">
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Room Information Overview Strip */}
      <div className="vt-info-strip glassmorphism">
        <div className="vt-info-text">
          <h4 className="text-navy">{currentRoom.subtitle}</h4>
          <p>{currentRoom.description}</p>
        </div>
        <div className="vt-info-stats">
          <div className="vt-stat-box">
            <span className="vt-stat-num">{currentRoom.hotspots.length}</span>
            <span className="vt-stat-label">Interactive Points</span>
          </div>
          <div className="vt-stat-box">
            <span className="vt-stat-num">360°</span>
            <span className="vt-stat-label">Pan &amp; Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour360;
