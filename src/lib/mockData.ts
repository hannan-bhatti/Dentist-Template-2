export const clinicConfig = {
  name: "Apex Medical Institute",
  tagline: "Precision Diagnostics & Multispecialty Hospital",
  phone: "+92 (21) 3529-8800",
  emergencyHotline: "+92 (21) 3529-8899",
  whatsappNumber: "+923007788800",
  address: "Apex Clinical Campus, Main Shahrah-e-Faisal, Karachi",
  lahoreBranch: "Jail Road, Main Gulberg, Lahore",
  hours: "Consultant OPD: 8:00 AM – 9:00 PM | Emergency & Diagnostic Labs: 24/7",
  calComLink: "https://cal.com/apex-institute/consultation",
  googleRating: "4.94",
  reviewCount: "1,890+"
};

export const heroData = {
  headline: "Where Diagnostic Precision Meets Compassionate Patient Care.",
  subheadline: "Integrating advanced European robotic imaging, automated Roche molecular diagnostics, and board-certified consultants across Cardiology, Dental, Gynecology, Physiotherapy, and Family Medicine.",
  badge: "⚡ 24/7 Acute Medical Emergency • Same-Day Specialized OPD Consultations",
  primaryCtaText: "Book Specialist Consultation",
  secondaryCtaText: "Order Home Diagnostic Labs",
  ratingText: "4.94/5 Rating from 1,890+ Verified Reviews & Hospital Admissions"
};

export const specialtiesData = [
  {
    id: "cardiology",
    title: "Interventional & Preventive Cardiology",
    shortTitle: "Cardiology",
    leadDoctor: "Prof. Dr. Tariq Ashraf, MBBS, FCPS, FACC (USA)",
    tagline: "Advanced Non-Invasive Cardiac Telemetry & Angiographic Guidance",
    description: "Equipped with Philips 3D Epiq echocardiography, 24-hour ambulatory Holter rhythm analysis, CT coronary angiography, and comprehensive post-infarct cardiac rehabilitation.",
    keyProcedures: [
      "Philips 3D Color Doppler Echocardiography",
      "Coronary Calcium & CT Angiography Screen",
      "Continuous Digital Arrhythmia Holter",
      "Executive Lipid Subfractionation Matrix"
    ],
    duration: "45 min clinical examination",
    priceFrom: "Rs. 8,500",
    badge: "Accredited Heart Institute"
  },
  {
    id: "dental",
    title: "Guided Implantology & Aesthetic Dentistry",
    shortTitle: "Dental Surgery",
    leadDoctor: "Dr. Zeeshan Haider, BDS, MFDSRCS (Edinburgh), FICD",
    tagline: "Computer-Guided 3D Oral Reconstruction & Painless Micro-Anesthesia",
    description: "Featuring Dentsply Sirona 3D CBCT imaging, computer-navigated dental implants, laser periodontal decontamination, and ultra-thin Swiss ceramic restorations.",
    keyProcedures: [
      "Computer-Guided 3D Titanium Dental Implants",
      "Micron-Thin Porcelain Veneers & Full Arch",
      "Laser Periodontal & Deep Biofilm Therapy",
      "Wand™ Computer-Regulated Painless Injections"
    ],
    duration: "45–60 min clinical session",
    priceFrom: "Rs. 7,500",
    badge: "German 3D Scan Equipped"
  },
  {
    id: "gynea",
    title: "Maternal-Fetal Medicine & Gynecology",
    shortTitle: "Gynecology",
    leadDoctor: "Dr. Naila Zahid, MBBS, FRCOG (London), FCPS",
    tagline: "Specialized Obstetrics, High-Risk Pregnancy & Minimally Invasive Care",
    description: "Private female clinical suites offering Voluson E10 4D anomaly fetal mapping, high-risk obstetric monitoring, reproductive endocrinology, and modern gynecological laparoscopy.",
    keyProcedures: [
      "Voluson HD Live 4D Fetal Anomaly Ultrasound",
      "High-Risk Prenatal & Obstetric Monitoring",
      "PCOS & Reproductive Hormonal Therapy",
      "Digital Colposcopy & Cervical Health Screen"
    ],
    duration: "40 min private consultation",
    priceFrom: "Rs. 7,000",
    badge: "100% Female Clinical Team"
  },
  {
    id: "physiotherapy",
    title: "Orthopedic & Sports Spine Rehabilitation",
    shortTitle: "Physiotherapy",
    leadDoctor: "Dr. Bilal Aslam, DPT, CMP (USA), Post-Grad Sports Rehab",
    tagline: "Computerized Spinal Decompression & High-Performance Mobility",
    description: "State-of-the-art physiotherapy institute utilizing Chatanooga motorized spinal decompression, Class IV therapeutic deep-tissue laser, shockwave therapy, and post-surgical ACL recovery.",
    keyProcedures: [
      "Motorized Triton Spinal Decompression",
      "Class IV Deep Tissue Laser Biostimulation",
      "Sports Injury ACL & Rotator Cuff Rehab",
      "Clinical Dry Needling & Trigger Myotherapy"
    ],
    duration: "60 min clinical therapy",
    priceFrom: "Rs. 5,500",
    badge: "Hydrotherapy & Decompression"
  },
  {
    id: "labs",
    title: "Automated Roche Molecular Diagnostics",
    shortTitle: "Diagnostic Labs",
    leadDoctor: "Prof. Dr. M. Arshad, MBBS, PhD (Pathology), FRCPath",
    tagline: "Fully Automated Roche Cobas Chemistry with Under 4-Hour Digital Results",
    description: "ISO 15189 certified automated laboratory delivering critical cardiac markers, tumor pathology, comprehensive hormonal panels, and rapid sterile doorstep sample collection fleet.",
    keyProcedures: [
      "Full Executive Blood Chemistry (72 Parameters)",
      "High-Sensitivity Troponin-I & NT-proBNP",
      "Quantitative Thyroid & Hormone Battery",
      "Sterile Home Phlebotomy Fleet Dispatch"
    ],
    duration: "Digital results in 2–4 hours",
    priceFrom: "Rs. 3,500",
    badge: "ISO 15189 Accredited"
  },
  {
    id: "family-phy",
    title: "Internal Medicine & Chronic Care Center",
    shortTitle: "Family Medicine",
    leadDoctor: "Dr. Haroon Rasheed, MBBS, MRCP (UK), FACP (USA)",
    tagline: "Evidence-Based Primary Care, Diabetes Reversal & Adult Health",
    description: "Continuity-focused medical consultations managing hypertension, metabolic syndrome, diabetic glycemic control, respiratory allergies, and annual executive preventive assessments.",
    keyProcedures: [
      "Comprehensive Adult Executive Health Audit",
      "Intensive Diabetes Glycemic Reversal Program",
      "Cardiometabolic Risk Assessment",
      "Vaccination & Preventive Longevity Strategy"
    ],
    duration: "30-45 min consultation",
    priceFrom: "Rs. 5,000",
    badge: "Same-Day Priority Access"
  }
];

export const labCatalog = [
  {
    id: "cardiac-marker-panel",
    name: "Comprehensive Cardiac Biomarker Screen",
    department: "Cardiology & Labs",
    turnaround: "2 Hours",
    price: 14500,
    testsCount: 6,
    testsList: "hs-Troponin I, NT-proBNP, hs-CRP, Lipid Profile, D-Dimer, HbA1c",
    homeCollectionAvailable: true
  },
  {
    id: "executive-72-profile",
    name: "Executive 72-Parameter Master Health Battery",
    department: "Molecular Labs",
    turnaround: "4 Hours",
    price: 24500,
    testsCount: 72,
    testsList: "CBC, Liver Function (LFT), Renal Function (RFT), Lipids, Thyroid (TSH/FT4), Vitamin D, B12, Iron Matrix, Uric Acid",
    homeCollectionAvailable: true
  },
  {
    id: "hormone-pcos-panel",
    name: "Advanced Female Hormonal & Well-Woman Battery",
    department: "Gynecology & Labs",
    turnaround: "4 Hours",
    price: 18500,
    testsCount: 8,
    testsList: "FSH, LH, Prolactin, Serum Testosterone, AMH (Ovarian Reserve), Fasting Insulin, TSH, Estrogen",
    homeCollectionAvailable: true
  },
  {
    id: "diabetes-metabolic-profile",
    name: "Metabolic & Diabetes Comprehensive Battery",
    department: "Family Medicine & Labs",
    turnaround: "3 Hours",
    price: 8500,
    testsCount: 5,
    testsList: "HbA1c (Glycated Hemoglobin), Fasting Blood Glucose, Fasting Insulin (HOMA-IR), Microalbuminuria, Lipid Screen",
    homeCollectionAvailable: true
  }
];

export const doctorsData = [
  {
    id: "dr-tariq",
    name: "Prof. Dr. Tariq Ashraf",
    specialty: "Consultant Cardiologist & Heart Center Director",
    department: "cardiology",
    credentials: "MBBS • FCPS (Cardiology) • Fellow American College of Cardiology (FACC)",
    experience: "26+ Years Senior Clinical Experience",
    bio: "Pioneering non-invasive and interventional cardiac imaging in Pakistan, Prof. Tariq specializes in preventive cardiology, complex hypertension, and 3D echocardiography.",
    image: "/images/dr-tariq.jpg"
  },
  {
    id: "dr-zeeshan",
    name: "Dr. Zeeshan Haider",
    specialty: "Head of Oral & Maxillofacial Implantology",
    department: "dental",
    credentials: "BDS • MFDSRCS (Royal College of Surgeons Edinburgh) • FICD",
    experience: "16+ Years Implant Excellence",
    bio: "A leading authority in computer-guided 3D implant placement and full arch smile restorations, delivering zero-discomfort surgical treatments with British accreditation.",
    image: "/images/dr-zeeshan.jpg"
  },
  {
    id: "dr-naila",
    name: "Dr. Naila Zahid",
    specialty: "Consultant Obstetrician & Gynecologist",
    department: "gynea",
    credentials: "MBBS • FRCOG (London) • FCPS (Obstetrics & Gynaecology)",
    experience: "22+ Years Maternal-Fetal Care",
    bio: "Fellow of the Royal College of Obstetricians and Gynaecologists (UK), Dr. Naila leads our female clinical center with deep expertise in 4D fetal ultrasound and high-risk pregnancy.",
    image: "/images/dr-naila.jpg"
  },
  {
    id: "dr-bilal",
    name: "Dr. Bilal Aslam",
    specialty: "Director of Physical Therapy & Spine Center",
    department: "physiotherapy",
    credentials: "DPT • Certified Mulligan Practitioner (CMP, USA) • Post-Grad Sports Rehab",
    experience: "14+ Years Musculoskeletal Rehab",
    bio: "Specializing in motorized non-surgical spinal decompression, acute sports injuries, and posture science, Dr. Bilal has restored thousands of patients to pain-free mobility.",
    image: "/images/dr-bilal.jpg"
  },
  {
    id: "dr-haroon",
    name: "Dr. Haroon Rasheed",
    specialty: "Consultant Physician & Internal Medicine Specialist",
    department: "family-phy",
    credentials: "MBBS • MRCP (UK) • Fellow American College of Physicians (FACP)",
    experience: "19+ Years Internal Medicine",
    bio: "Trained in the UK and USA, Dr. Haroon focuses on cardiometabolic longevity, complex diagnostic dilemmas, and intensive diabetes reversal.",
    image: "/images/dr-haroon.jpg"
  }
];

export const trustSignals = [
  {
    author: "Engr. Salman Farooqi",
    location: "Navy Housing, Clifton, Karachi",
    specialty: "Cardiology & Labs",
    rating: 5,
    reviewText: "I presented to Apex with atypical chest tightness. Within 20 minutes, their cardiology team completed a 12-lead digital ECG and cardiac biomarker screen. Prof. Tariq's prompt clinical acumen and reassuring manner averted a major incident. Truly world-class.",
    source: "Verified Patient Review"
  },
  {
    author: "Dr. Maham Alvi",
    location: "Main Boulevard, Gulberg, Lahore",
    specialty: "Gynecology & 4D Ultrasound",
    rating: 5,
    reviewText: "The Voluson 4D anomaly scan with Dr. Naila Zahid was extraordinarily detailed. The clinical ambiance is spotless, modern, and completely professional. Every step was explained with utmost warmth and dignity.",
    source: "Verified Doctor Patient"
  },
  {
    author: "Zubair Hashmi",
    location: "PECHS Block 6, Karachi",
    specialty: "Physiotherapy & Spine Rehab",
    rating: 5,
    reviewText: "Two neurosurgeons had advised surgery for my L4-L5 disc protrusion. Dr. Bilal's computerized spinal decompression program eliminated my severe radiculopathy within 4 weeks. I am walking 5km daily now pain-free.",
    source: "Verified Patient Review"
  }
];

export const faqData = [
  {
    question: "How rapidly can a home blood sample collection be dispatched to my residence?",
    answer: "Our certified phlebotomy rapid dispatch team operates across Karachi and Lahore. Once booked online or via WhatsApp, a temperature-controlled sample collection technician arrives at your home within 60 to 90 minutes. Digital lab reports are delivered to your portal within 2 to 4 hours."
  },
  {
    question: "Do you offer emergency medical consultations and same-day specialist OPD slots?",
    answer: "Yes. Our Acute Medical Care and Emergency Triage Center is operational 24/7. In addition, our consultant clinics reserve priority daily slots across Cardiology, Dental Trauma, Gynecology, and Internal Medicine."
  },
  {
    question: "Are your diagnostic laboratories ISO 15189 accredited and standardized with European benchmarks?",
    answer: "Yes. Apex Laboratories operates under strict ISO 15189 molecular guidelines, utilizing fully automated Roche Cobas, Sysmex, and bioMérieux diagnostic platforms with internal daily controls and external EQAS verification from the UK."
  },
  {
    question: "Do you accept health insurance and corporate medical panels?",
    answer: "We partner with all major private healthcare insurers (Jubilee Life, EFU Health, Adamjee, TPL, Pak-Qatar Takaful, and Askari Health). Direct cashless admission and itemized claims support are provided by our corporate desk."
  }
];
