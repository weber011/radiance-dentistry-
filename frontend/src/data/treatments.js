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
  { name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements for a complete smile.", slug: "dental-implants", icon: "ShieldPlus" },
  { name: "Root Canal Treatment", desc: "Pain-free procedures to save infected teeth and restore oral health.", slug: "root-canal-treatment", icon: "Activity" },
  { name: "Smile Designing", desc: "Customized cosmetic plans to achieve your perfect, radiant smile.", slug: "smile-designing", icon: "Sparkles" },
  { name: "Teeth Whitening", desc: "Professional bleaching treatments for a brighter, whiter smile.", slug: "teeth-whitening", icon: "Sun" },
  { name: "Dental Veneers", desc: "Ultra-thin porcelain shells to correct chips, stains, and gaps.", slug: "dental-veneers", icon: "Star" },
  { name: "Dental Crowns", desc: "Durable caps to restore the shape, size, and strength of damaged teeth.", slug: "dental-crowns", icon: "Crown" },
  { name: "Dental Bridges", desc: "Fixed dental prosthetics to seamlessly bridge the gap of missing teeth.", slug: "dental-bridges", icon: "Link" },
  { name: "Braces & Orthodontics", desc: "Traditional and advanced solutions to align and straighten your teeth.", slug: "braces-orthodontics", icon: "AlignJustify" },
  { name: "Clear Aligners", desc: "Invisible, comfortable aligners for a discreet orthodontic treatment.", slug: "clear-aligners", icon: "Smile" },
  { name: "Pediatric Dentistry", desc: "Gentle and fun dental care tailored specifically for children.", slug: "pediatric-dentistry", icon: "Baby" },
  { name: "Wisdom Tooth Removal", desc: "Safe and comfortable extractions of impacted or problematic wisdom teeth.", slug: "wisdom-tooth-removal", icon: "Crosshair" },
  { name: "Tooth Extraction", desc: "Painless removal of severely damaged or decayed teeth.", slug: "tooth-extraction", icon: "Activity" },
  { name: "Dental Cleaning", desc: "Thorough professional cleaning to maintain optimal oral hygiene.", slug: "dental-cleaning", icon: "Droplets" },
  { name: "Gum Treatment", desc: "Advanced periodontal care to treat and prevent gum disease.", slug: "gum-treatment", icon: "HeartPulse" },
  { name: "Smile Makeover", desc: "Comprehensive cosmetic treatments for a total smile transformation.", slug: "smile-makeover", icon: "Wand2" },
  { name: "Full Mouth Rehabilitation", desc: "Extensive restorative procedures to rebuild your entire smile.", slug: "full-mouth-rehabilitation", icon: "HeartHandshake" },
  { name: "Family Dentistry", desc: "Comprehensive dental care for patients of all ages under one roof.", slug: "family-dentistry", icon: "Users" },
  { name: "Emergency Dental Care", desc: "Immediate, priority treatment for unexpected dental pain or injuries.", slug: "emergency-dental-care", icon: "Stethoscope" },
  { name: "Oral Surgery", desc: "Expert surgical procedures for complex dental and maxillofacial conditions.", slug: "oral-surgery", icon: "Syringe" }
];
