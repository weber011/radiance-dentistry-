import { servicesData } from './treatments/services';
import { coreTreatmentsData } from './treatments/core';
import { restorativeData } from './treatments/restorative';
import { orthoData } from './treatments/ortho';
import { perioData } from './treatments/perio';

export const treatmentsData = {
  ...servicesData,
  ...coreTreatmentsData,
  ...restorativeData,
  ...orthoData,
  ...perioData
};

export const treatmentsList = [
  { name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements for a complete smile.", slug: "dental-implants", image: "dental_implants.png" },
  { name: "Root Canal Treatment", desc: "Pain-free procedures to save infected teeth and restore oral health.", slug: "root-canal-treatment", image: "root_canal.png" },
  { name: "Smile Designing", desc: "Customized cosmetic plans to achieve your perfect, radiant smile.", slug: "smile-designing", image: "smile_designing.png" },
  { name: "Teeth Whitening", desc: "Professional bleaching treatments for a brighter, whiter smile.", slug: "teeth-whitening", image: "teeth_whitening.png" },
  { name: "Dental Veneers", desc: "Ultra-thin porcelain shells to correct chips, stains, and gaps.", slug: "dental-veneers", image: "dental_veneers.png" },
  { name: "Dental Crowns", desc: "Durable caps to restore the shape, size, and strength of damaged teeth.", slug: "dental-crowns", image: "dental_crowns.png" },
  { name: "Dental Bridges", desc: "Fixed dental prosthetics to seamlessly bridge the gap of missing teeth.", slug: "dental-bridges", image: "dental_bridges.png" },
  { name: "Braces & Orthodontics", desc: "Traditional and advanced solutions to align and straighten your teeth.", slug: "braces-orthodontics", image: "braces_orthodontics.png" },
  { name: "Clear Aligners", desc: "Invisible, comfortable aligners for a discreet orthodontic treatment.", slug: "clear-aligners", image: "clear_aligners.png" },
  { name: "Pediatric Dentistry", desc: "Gentle and fun dental care tailored specifically for children.", slug: "pediatric-dentistry", image: "pediatric_dentistry.png" },
  { name: "Wisdom Tooth Removal", desc: "Safe and comfortable extractions of impacted or problematic wisdom teeth.", slug: "wisdom-tooth-removal", image: "wisdom_tooth_removal.png" },
  { name: "Tooth Extraction", desc: "Painless removal of severely damaged or decayed teeth.", slug: "tooth-extraction", image: "tooth extractionj.png" },
  { name: "Dental Cleaning", desc: "Thorough professional cleaning to maintain optimal oral hygiene.", slug: "dental-cleaning", image: "dental cleaning.png" },
  { name: "Gum Treatment", desc: "Advanced periodontal care to treat and prevent gum disease.", slug: "gum-treatment", image: "gum treatment.png" },
  { name: "Smile Makeover", desc: "Comprehensive cosmetic treatments for a total smile transformation.", slug: "smile-makeover", image: "smile makover.png" },
  { name: "Full Mouth Rehabilitation", desc: "Extensive restorative procedures to rebuild your entire smile.", slug: "full-mouth-rehabilitation", image: "full mouth rehabilation.png" },
  { name: "Family Dentistry", desc: "Comprehensive dental care for patients of all ages under one roof.", slug: "family-dentistry", image: "family dentistry.png" },
  { name: "Emergency Dental Care", desc: "Immediate, priority treatment for unexpected dental pain or injuries.", slug: "emergency-dental-care", image: "emergency dental care.png" },
  { name: "Oral Surgery", desc: "Expert surgical procedures for complex dental and maxillofacial conditions.", slug: "oral-surgery", image: "oral surgery.png" }
];
