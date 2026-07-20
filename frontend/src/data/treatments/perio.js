export const perioData = {
  "dental-cleaning": {
    type: "treatment",
    name: "Dental Cleaning",
    slug: "dental-cleaning",
    shortIntro: "Professional, ultrasonic scaling and polishing for a refreshingly clean, tartar-free smile.",
    whatIsIt: "A professional dental cleaning (prophylaxis) removes harmful plaque and calcified tartar that normal brushing and flossing cannot. Our hygienists use advanced ultrasonic scalers to gently blast away deposits, followed by a professional polish to remove surface stains and smooth the enamel.",
    whoNeedsIt: [
      { title: "Everyone", desc: "A mandatory biannual procedure for anyone who wants to keep their natural teeth." },
      { title: "Coffee/Tea Drinkers", desc: "Essential for removing surface stains that accumulate over months." },
      { title: "Orthodontic Patients", desc: "Critical for those with braces who struggle to clean around brackets." }
    ],
    symptoms: [
      "Visible yellow or brown tartar buildup along the gumline",
      "Gums that bleed slightly when brushing or flossing",
      "Persistent bad breath (halitosis)",
      "A 'fuzzy' or rough feeling on the surface of your teeth"
    ],
    benefits: [
      { title: "Prevents Cavities", desc: "Removes the plaque that produces acid and causes tooth decay." },
      { title: "Stops Gum Disease", desc: "Clears away bacteria that cause gingivitis and bone loss." },
      { title: "Brighter Smile", desc: "Polishing removes dull surface stains, instantly brightening your teeth." },
      { title: "Freshens Breath", desc: "Eliminates the deep-seated bacteria responsible for chronic bad breath." }
    ],
    procedureSteps: [
      { step: "Physical Exam", desc: "A quick check of your gums and teeth for any alarming signs." },
      { step: "Ultrasonic Scaling", desc: "Using gentle vibrations and a water spray to break up hard tartar." },
      { step: "Hand Scaling", desc: "Meticulous removal of fine deposits between teeth using specialized instruments." },
      { step: "Prophylactic Polishing", desc: "Using a high-powered brush and gritty paste to scrub away surface stains." },
      { step: "Expert Flossing", desc: "A thorough flossing session to clear any remaining paste or plaque." }
    ],
    faqs: [
      { q: "Is a dental cleaning painful?", a: "No, a standard cleaning is completely painless. You may feel slight pressure or vibrations from the ultrasonic scaler, but it should not hurt." },
      { q: "How often should I get my teeth cleaned?", a: "The American Dental Association recommends a professional cleaning every six months. Patients with gum disease may need them every 3-4 months." },
      { q: "My gums bleed when they clean my teeth, is that bad?", a: "Bleeding is a sign of gingivitis (gum inflammation) caused by plaque buildup. The cleaning will actually resolve this, and the bleeding will stop as your gums heal." },
      { q: "Will a cleaning whiten my teeth?", a: "It removes surface stains (like from coffee or tea), making them look brighter and cleaner, but it does not change the actual color of the enamel like bleaching does." },
      { q: "Why do they scrape my teeth?", a: "That scraping removes calculus (tartar). Tartar is plaque that has calcified and hardened onto the tooth. It is impossible to remove with a toothbrush." },
      { q: "Is the polishing paste safe?", a: "Yes, it is slightly abrasive to remove stains but perfectly safe for your enamel when used by a professional." },
      { q: "Do I still need to floss if I get regular cleanings?", a: "Absolutely! Cleanings handle what you missed, but daily flossing is critical to prevent massive buildup between your six-month visits." },
      { q: "How long does a cleaning take?", a: "A routine cleaning typically takes between 30 and 45 minutes." }
    ],
    related: ["gum-treatment", "teeth-whitening", "family-dentistry", "pediatric-dentistry"]
  },

  "gum-treatment": {
    type: "treatment",
    name: "Gum Treatment",
    slug: "gum-treatment",
    shortIntro: "Advanced periodontal therapy to halt gum disease, eliminate infection, and save your teeth.",
    whatIsIt: "Gum treatment (periodontics) addresses infections of the structures around the teeth, including the gums, periodontal ligament, and alveolar bone. Treatment ranges from deep scaling and root planing (non-surgical) to advanced laser therapy and gum grafting to reverse the effects of periodontitis.",
    whoNeedsIt: [
      { title: "Gingivitis Patients", desc: "Those with red, swollen, bleeding gums requiring intervention before it worsens." },
      { title: "Periodontitis Sufferers", desc: "Patients with deep gum pockets and early signs of bone loss." },
      { title: "Receding Gums", desc: "Individuals whose gums are pulling back, exposing sensitive tooth roots." }
    ],
    symptoms: [
      "Gums that bleed easily when brushing or eating",
      "Red, swollen, or highly tender gums",
      "Gums that have pulled away from the teeth (recession)",
      "Persistent bad breath or a bad taste in the mouth",
      "Loose or shifting adult teeth"
    ],
    benefits: [
      { title: "Halts Bone Loss", desc: "Stops the disease process that destroys the jawbone." },
      { title: "Saves Teeth", desc: "Prevents teeth from becoming loose and requiring extraction." },
      { title: "Improves Health", desc: "Reduces systemic inflammation linked to heart disease and diabetes." },
      { title: "Freshens Breath", desc: "Completely eliminates the foul-smelling bacteria trapped deep in the gums." }
    ],
    procedureSteps: [
      { step: "Periodontal Charting", desc: "Measuring the depth of the pockets between your gums and teeth." },
      { step: "Anesthesia", desc: "Numbing the gums for absolute comfort during the deep cleaning." },
      { step: "Scaling", desc: "Removing tartar and bacteria from deep beneath the gum line." },
      { step: "Root Planing", desc: "Smoothing the tooth roots to discourage further bacterial growth." },
      { step: "Laser Therapy (Optional)", desc: "Using dental lasers to gently remove diseased tissue and sterilize the pocket." }
    ],
    recovery: "Your gums will be tender and may be sensitive to hot/cold for a few days. We may prescribe an antimicrobial mouthwash. Strict adherence to home hygiene is required for successful healing.",
    faqs: [
      { q: "Can gum disease be cured?", a: "Gingivitis (early stage) is 100% reversible. Periodontitis (advanced stage) cannot be cured, but it can be successfully managed and halted to prevent tooth loss." },
      { q: "What is Scaling and Root Planing?", a: "It is a 'deep cleaning' performed under local anesthesia that cleans far below the gum line, where a regular cleaning cannot reach." },
      { q: "Does deep cleaning hurt?", a: "We use local anesthesia so you will not feel pain during the procedure. Your gums will be sore for a day or two afterward." },
      { q: "Why do my teeth feel loose?", a: "Advanced gum disease destroys the bone holding your teeth in place. Deep cleaning halts this destruction, allowing the gums to reattach and tighten." },
      { q: "How do I prevent gum disease?", a: "Brush twice daily, floss every single day, use an antiseptic mouthwash, and do not skip your bi-annual professional cleanings." },
      { q: "Are lasers used in gum treatment?", a: "Yes, we utilize advanced diode lasers to selectively target and vaporize diseased tissue without harming healthy gums, leading to faster healing." },
      { q: "Is gum disease contagious?", a: "The bacteria that cause gum disease can be passed through saliva (e.g., sharing utensils or kissing), but the disease itself requires a susceptible host and poor hygiene to take hold." },
      { q: "Will my receding gums grow back?", a: "Gums do not naturally grow back once they recede. However, we offer gum grafting procedures to cover exposed roots and restore the gum line." }
    ],
    related: ["dental-cleaning", "tooth-extraction", "dental-implants", "full-mouth-rehabilitation"]
  },

  "smile-makeover": {
    type: "treatment",
    name: "Smile Makeover",
    slug: "smile-makeover",
    shortIntro: "A complete, personalized cosmetic overhaul to give you the brilliant, flawless smile of your dreams.",
    whatIsIt: "A Smile Makeover is a comprehensive cosmetic treatment plan that combines multiple dental procedures to dramatically improve the appearance of your smile. It is tailored to your unique facial structure, skin tone, and aesthetic desires, addressing color, alignment, spacing, and tooth proportion.",
    whoNeedsIt: [
      { title: "Multiple Cosmetic Issues", desc: "Patients who need a combination of whitening, straightening, and restoring." },
      { title: "Confidence Seekers", desc: "Those who hide their teeth in photos and want a major confidence boost." },
      { title: "Aging Smiles", desc: "Individuals looking to reverse years of wear, tear, and discoloration." }
    ],
    symptoms: [
      "A combination of stained, chipped, and crooked teeth",
      "Old, discolored, or mismatched dental work (crowns/fillings)",
      "An uneven gum line or 'gummy' smile",
      "Teeth that look disproportionately small or short"
    ],
    benefits: [
      { title: "Total Transformation", desc: "Completely changes the focal point of your face for the better." },
      { title: "Custom Designed", desc: "Every aspect is tailored to match your ideal aesthetic." },
      { title: "Boosts Self-Esteem", desc: "Empowers you to smile, speak, and laugh without hesitation." },
      { title: "Harmonious Aesthetics", desc: "Ensures all teeth match perfectly in color, shape, and translucency." }
    ],
    procedureSteps: [
      { step: "The Vision Consultation", desc: "Discussing exactly what you dislike about your smile and what you want to achieve." },
      { step: "Comprehensive Planning", desc: "Taking scans and photos to design your new smile digitally." },
      { step: "Foundational Health", desc: "Treating any underlying cavities or gum issues before cosmetic work begins." },
      { step: "Execution Phase", desc: "Performing the required combination of veneers, crowns, or whitening." },
      { step: "The Final Reveal", desc: "Placing the final restorations and making micro-adjustments for perfection." }
    ],
    faqs: [
      { q: "What is the difference between a Smile Makeover and Smile Designing?", a: "Smile Designing is the digital planning process used to blueprint the new look. The Smile Makeover is the actual execution of those planned procedures." },
      { q: "What procedures are included?", a: "It's entirely bespoke. It usually involves porcelain veneers, but can also include clear aligners, teeth whitening, laser gum contouring, and ceramic crowns." },
      { q: "How much does a smile makeover cost?", a: "Because no two makeovers are the same, the cost varies significantly. We provide a full transparent breakdown during your consultation." },
      { q: "How long does it take?", a: "If it involves only veneers and whitening, it can take just 2-3 weeks. If orthodontics or implants are required, it may take several months." },
      { q: "Will it look natural?", a: "Yes. Our goal is not just 'white teeth,' but a smile that fits your face perfectly, using materials that mimic natural light reflection." },
      { q: "Is the process painful?", a: "No. We ensure you are completely numb and comfortable during any invasive steps of the makeover." },
      { q: "How long will the results last?", a: "Porcelain restorations (veneers/crowns) last 10-15+ years. Whitening requires occasional touch-ups. Good hygiene extends longevity." },
      { q: "Can I choose how white my teeth will be?", a: "Absolutely. During the design phase, you select the exact shade, from a natural bright white to a 'Hollywood' bleach shade." }
    ],
    related: ["smile-designing", "dental-veneers", "teeth-whitening", "full-mouth-rehabilitation"]
  }
};
