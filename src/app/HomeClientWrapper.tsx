'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  HeartPulse, 
  Sparkles, 
  Flower2, 
  Microscope, 
  Stethoscope, 
  Star, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Award, 
  Building2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { TiltCard } from '@/components/TiltCard';
import { LabDispatcher } from '@/components/LabDispatcher';
import { CardioRiskCalculator } from '@/components/CardioRiskCalculator';
import { FloatingEmergencyDesk } from '@/components/FloatingEmergencyDesk';

const iconMap: Record<string, any> = {
  'cardiology': HeartPulse,
  'dental': Sparkles,
  'gynea': Flower2,
  'physiotherapy': Activity,
  'labs': Microscope,
  'family-phy': Stethoscope,
};

export function HomeClientWrapper({
  heroData,
  specialtiesData,
  doctorsData,
  trustSignals,
  faqData
}: any) {
  const [selectedDept, setSelectedDept] = useState('cardiology');
  const [selectedDoctor, setSelectedDoctor] = useState('any');
  const [selectedShift, setSelectedShift] = useState('morning');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                <span>{heroData.badge}</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Complete Healthcare for You &amp;{' '}
                <span className={styles.heroHeadlineGradient}>Your Whole Family.</span>
              </h1>

              <p className={styles.heroSubheadline}>
                {heroData.subheadline}
              </p>

              <div className={styles.heroActions}>
                <Link href="/booking" className="btn-primary">
                  <span>{heroData.primaryCtaText}</span>
                  <ArrowRight size={17} />
                </Link>

                <a href="#labs-dispatch" className="btn-secondary">
                  <span>{heroData.secondaryCtaText}</span>
                </a>
              </div>

              <div className={styles.ratingSnippet}>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#0284c7" stroke="#0284c7" />
                  ))}
                </div>
                <span><strong>4.9/5 Rating</strong> from over 2,000+ Happy Patients</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.floatingCardTop}>
                <div className={styles.floatingCardIcon}>
                  <Microscope size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Fast Digital Lab Reports</div>
                  <div className={styles.floatingCardSub}>Results to your phone in 4 hours</div>
                </div>
              </div>

              <div className={styles.heroImageFrame}>
                <div className={styles.visualInner}>
                  <span className={styles.visualPill}>
                    <Activity size={13} />
                    Modern Medical Center
                  </span>
                  <h3 style={{ fontSize: '1.75rem', lineHeight: 1.3, color: '#ffffff' }}>
                    All Your Healthcare Needs in One Friendly Place
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', maxWidth: 360 }}>
                    Heart Care • Gentle Dental • Women&apos;s Health • Physical Therapy • Fast Lab Tests
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 6, background: 'rgba(255,255,255,0.1)' }}>
                      Verified Specialists
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 6, background: 'rgba(255,255,255,0.1)' }}>
                      Open 24/7
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCardBottom}>
                <div className={styles.floatingCardIcon} style={{ background: '#ecfdf5', color: '#059669' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Trusted Specialists</div>
                  <div className={styles.floatingCardSub}>Experienced &amp; caring doctors</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HERO QUICK-BOOKING BAR */}
      <section className={styles.bookingBarWrapper}>
        <div className="container">
          <motion.div 
            className={styles.bookingBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Activity size={13} /> Department
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="cardiology">Heart Care &amp; Checkups</option>
                <option value="dental">Dental &amp; Teeth Care</option>
                <option value="gynea">Women's Health &amp; Maternity</option>
                <option value="physiotherapy">Physiotherapy &amp; Pain Relief</option>
                <option value="labs">Diagnostic Lab Tests</option>
                <option value="family-phy">Family Doctor &amp; Everyday Care</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Award size={13} /> Specialist Doctor
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="any">First Available Doctor</option>
                <option value="dr-tariq">Prof. Dr. Tariq Ashraf (Heart Care)</option>
                <option value="dr-zeeshan">Dr. Zeeshan Haider (Dental Surgery)</option>
                <option value="dr-naila">Dr. Naila Zahid (Women's Health)</option>
                <option value="dr-bilal">Dr. Bilal Aslam (Physiotherapy)</option>
                <option value="dr-haroon">Dr. Haroon Rasheed (Family Doctor)</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Clock size={13} /> Time of Day
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedShift}
                onChange={(e) => setSelectedShift(e.target.value)}
              >
                <option value="morning">Morning (8:30 AM – 1:00 PM)</option>
                <option value="afternoon">Afternoon (1:30 PM – 5:30 PM)</option>
                <option value="evening">Evening (6:00 PM – 9:00 PM)</option>
              </select>
            </div>

            <div>
              <Link 
                href={`/booking?department=${selectedDept}&doctor=${selectedDoctor}&shift=${selectedShift}`}
                className="btn-primary"
                style={{ padding: '0.85rem 1.75rem', width: '100%' }}
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CLINICAL DEPARTMENTS DIRECTORY */}
      <section id="departments" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Medical Services</span>
            <h2 className="section-title">Specialized Care for Every Family Member</h2>
            <p className="section-subtitle">
              Experienced doctors, gentle treatments, and modern diagnostic technology designed to help you feel your best.
            </p>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialtiesData.map((spec: any, i: number) => {
              const Icon = iconMap[spec.id] || Sparkles;
              return (
                <TiltCard key={spec.id} maxTilt={6} scale={1.02}>
                  <motion.div 
                    className={styles.specialtyCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div>
                      <div className={styles.specialtyHeader}>
                        <div className={styles.specialtyIconBox}>
                          <Icon size={26} />
                        </div>
                        <span className={styles.specialtyBadge}>{spec.badge}</span>
                      </div>

                      <h3 className={styles.specialtyTitle}>{spec.title}</h3>
                      <div className={styles.specialtyDoctor}>Head of Service: {spec.leadDoctor}</div>
                      <p className={styles.specialtyDesc}>{spec.description}</p>

                      <div className={styles.procedureList}>
                        {spec.keyProcedures.map((proc: string, pIdx: number) => (
                          <div key={pIdx} className={styles.procedureItem}>
                            <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                            <span>{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.specialtyFooter}>
                      <div>
                        <div className={styles.priceLabel}>Consultation Starting</div>
                        <div className={styles.priceValue}>{spec.priceFrom}</div>
                      </div>
                      <Link 
                        href={`/booking?department=${spec.id}`}
                        className="btn-primary"
                        style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
                      >
                        Book Slot
                      </Link>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DIAGNOSTIC LAB DISPATCHER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <LabDispatcher />
        </div>
      </section>

      {/* 5. CARDIOVASCULAR & METABOLIC RISK SCREENER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CardioRiskCalculator />
        </div>
      </section>

      {/* 6. DOCTORS / CONSULTANT ROSTER */}
      <section id="doctors" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Specialists</span>
            <h2 className="section-title">Meet Our Experienced Doctors</h2>
            <p className="section-subtitle">
              Friendly, highly qualified doctors across heart health, dental care, women's wellness, physical therapy, and everyday family medicine.
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            {doctorsData.map((doc: any, i: number) => (
              <TiltCard key={doc.id} maxTilt={6} scale={1.02}>
                <motion.div 
                  className={styles.doctorCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <div className={styles.doctorHeader}>
                      <div className={styles.doctorAvatar}>
                        {doc.name.replace('Prof. ', '').replace('Dr. ', '').split(' ')[0][0]}
                        {doc.name.split(' ').slice(-1)[0][0]}
                      </div>
                      <div>
                        <h3 className={styles.doctorName}>{doc.name}</h3>
                        <div className={styles.doctorSpecialty}>{doc.specialty}</div>
                      </div>
                    </div>

                    <div className={styles.doctorCredentials}>{doc.credentials}</div>
                    <p className={styles.doctorBio}>{doc.bio}</p>
                  </div>

                  <Link 
                    href={`/booking?doctor=${doc.id}&department=${doc.department}`}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                  >
                    <Calendar size={15} />
                    <span>Consult with {doc.name.split(',')[0].replace('Prof. ', '')}</span>
                  </Link>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PATIENT OUTCOMES */}
      <section id="reviews" className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Patient Stories</span>
            <h2 className="section-title">Real Reviews from Happy Patients</h2>
            <p className="section-subtitle">
              Over 1,890+ verified patients share their experiences with our caring doctors and fast diagnostic services.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {trustSignals.map((review: any, i: number) => (
              <motion.div 
                key={i}
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                    {[...Array(review.rating || 5)].map((_, r) => (
                      <Star key={r} size={16} fill="#0284c7" stroke="#0284c7" />
                    ))}
                  </div>
                  <p className={styles.reviewQuote}>&ldquo;{review.reviewText}&rdquo;</p>
                </div>

                <div className={styles.reviewerMeta}>
                  <div>
                    <div className={styles.reviewerName}>{review.author}</div>
                    <div className={styles.reviewerLoc}>{review.location}</div>
                  </div>
                  <div className={styles.reviewerDept}>{review.specialty}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Help &amp; Information</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers on home lab blood tests, same-day doctor visits, and insurance coverage.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} color="var(--primary)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. VIP EMERGENCY CTA BANNER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.vipBanner}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.visualPill} style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} color="#38bdf8" />
              Caring &amp; Modern Clinic
            </span>
            <h2 className={styles.vipTitle}>Quality Healthcare When You Need It Most.</h2>
            <p className={styles.vipSub}>
              Book an appointment with experienced doctors or have accurate lab blood tests collected safely right at your doorstep today.
            </p>
            <div className={styles.vipActions}>
              <Link href="/booking" className="btn-primary" style={{ background: '#0284c7' }}>
                <Calendar size={17} />
                <span>Book Doctor Appointment</span>
              </Link>
              <a href="tel:+922135298899" className="btn-secondary" style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.35)' }}>
                <Phone size={16} color="#ffffff" />
                <span style={{ color: '#ffffff' }}>Emergency Help: (021) 3529-8899</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. FLOATING EMERGENCY & RAPID TRIAGE DESK */}
      <FloatingEmergencyDesk />
    </>
  );
}
