import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { treatmentsData } from '../data/treatments';
import TreatmentLayout from '../components/treatments/TreatmentLayout';
import ServiceLayout from '../components/treatments/ServiceLayout';
import './TreatmentDetail.css';

const imageMapping = {
  "dental-implants": "dental_implants.png",
  "root-canal-treatment": "root_canal.png",
  "smile-designing": "smile_designing.png",
  "teeth-whitening": "teeth_whitening.png",
  "dental-veneers": "dental_veneers.png",
  "dental-crowns": "dental_crowns.png",
  "dental-bridges": "dental_bridges.png",
  "braces-orthodontics": "braces_orthodontics.png",
  "clear-aligners": "clear_aligners.png",
  "pediatric-dentistry": "pediatric_dentistry.png",
  "wisdom-tooth-removal": "wisdom_tooth_removal.png",
  "tooth-extraction": "tooth extractionj.png",
  "dental-cleaning": "dental cleaning.png",
  "gum-treatment": "gum treatment.png",
  "smile-makeover": "smile makover.png",
  "full-mouth-rehabilitation": "full mouth rehabilation.png",
  "family-dentistry": "family dentistry.png",
  "emergency-dental-care": "emergency dental care.png",
  "oral-surgery": "oral surgery.png"
};

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = treatmentsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!treatment) {
    return <Navigate to="/" replace />;
  }

  const heroImage = imageMapping[slug] || "treatment_placeholder.png";

  if (treatment.type === 'service') {
    return <ServiceLayout treatment={treatment} heroImage={heroImage} />;
  }

  return <TreatmentLayout treatment={treatment} heroImage={heroImage} />;
};

export default TreatmentDetail;
