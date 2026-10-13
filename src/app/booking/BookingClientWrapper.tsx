'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './booking.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  FileText, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Shield, 
  Clock, 
  UserCheck, 
  Check,
  CalendarCheck,
  Activity
} from 'lucide-react';

export function BookingClientWrapper() {
  const searchParams = useSearchParams();

  const initialDept = searchParams.get('department') || 'cardiology';
  const initialDoctor = searchParams.get('doctor') || 'any';

  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);

  const upcomingDays = useMemo(() => {
    const days = [];
    const base = new Date();
    let count = 0;
    let offset = 0;

    while (count < 5) {
      const d = new Date(base);
      d.setDate(base.getDate() + offset);
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0) {
        days.push({
          dateObj: d,
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-US', { month: 'short' }),
          fullDateString: d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
        });
        count++;
      }
      offset++;
    }
    return days;
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const deptNames: Record<string, string> = {
    'cardiology': 'Interventional & Preventive Cardiology',
    'dental': 'Guided Implantology & Aesthetic Dentistry',
    'gynea': 'Maternal-Fetal Medicine & Gynecology',
    'physiotherapy': 'Orthopedic & Sports Spine Rehabilitation',
    'labs': 'Automated Roche Molecular Diagnostics',
    'family-phy': 'Internal Medicine & Chronic Care'
  };

  const doctorNames: Record<string, string> = {
    'dr-tariq': 'Prof. Dr. Tariq Ashraf (Cardiology Director)',
    'dr-zeeshan': 'Dr. Zeeshan Haider (Dental Surgery Head)',
    'dr-naila': 'Dr. Naila Zahid (Gynecology Lead)',
    'dr-bilal': 'Dr. Bilal Aslam (Physiotherapy Director)',
    'dr-haroon': 'Dr. Haroon Rasheed (Internal Medicine Lead)',
    'any': 'First Available Specialist Consultant'
  };

  const selectedDay = upcomingDays[selectedDayIndex] || upcomingDays[0];

  return (
    <>
      <section className={styles.bookingHero}>
        <div className="container">
          <span className="section-tag">Direct Hospital Scheduling</span>
          <h1 className="section-title">Schedule Clinical Consultation</h1>
          <p className="section-subtitle">
            Book your appointment online with live clinical roster synchronization, or pre-register for immediate admission.
          </p>

          <div className={styles.stepBar}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <span>Department &amp; Time</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum} style={{ background: isSubmitted ? 'var(--accent-emerald)' : 'var(--primary)' }}>2</div>
              <span>Patient Digital Intake</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div 
                className={styles.stepNum}
                style={{ 
                  background: isSubmitted ? 'var(--accent-emerald)' : 'var(--bg-subtle)',
                  color: isSubmitted ? '#ffffff' : 'var(--text-muted)',
                  border: isSubmitted ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                ✓
              </div>
              <span style={{ color: isSubmitted ? 'var(--accent-emerald)' : 'inherit' }}>Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.portalContainer}>
            {/* Step 1 */}
            <motion.div 
              className={styles.bookingCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 1: Choose Slot</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Roster Synced</span>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Hospital Department</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="cardiology">Interventional &amp; Preventive Cardiology</option>
                  <option value="dental">Guided Implantology &amp; Dentistry</option>
                  <option value="gynea">Maternal-Fetal Medicine &amp; Gynecology</option>
                  <option value="physiotherapy">Orthopedic &amp; Sports Spine Rehab</option>
                  <option value="labs">Automated Roche Molecular Diagnostics</option>
                  <option value="family-phy">Internal Medicine &amp; Chronic Care</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Consultant Specialist</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="any">First Available Senior Consultant</option>
                  <option value="dr-tariq">Prof. Dr. Tariq Ashraf (Cardiology)</option>
                  <option value="dr-zeeshan">Dr. Zeeshan Haider (Dental Surgery)</option>
                  <option value="dr-naila">Dr. Naila Zahid (Gynecology)</option>
                  <option value="dr-bilal">Dr. Bilal Aslam (Physiotherapy)</option>
                  <option value="dr-haroon">Dr. Haroon Rasheed (Internal Medicine)</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Select Consultation Date</label>
                <div className={styles.dateStrip}>
                  {upcomingDays.map((day, idx) => {
                    const isActive = selectedDayIndex === idx;
                    return (
                      <button
                        key={day.dayName + day.dayNum}
                        type="button"
                        className={`${styles.datePill} ${isActive ? styles.datePillActive : ''}`}
                        onClick={() => setSelectedDayIndex(idx)}
                      >
                        <span className={styles.dateDay}>{day.dayName}</span>
                        <span className={styles.dateNum}>{day.dayNum}</span>
                        <span className={styles.dateMonth}>{day.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.slotsContainer}>
                <div className={styles.slotPeriodTitle}>Morning OPD Windows</div>
                <div className={styles.slotGrid}>
                  {['09:00 AM', '10:15 AM', '11:30 AM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <div className={styles.slotPeriodTitle}>Afternoon Windows</div>
                <div className={styles.slotGrid}>
                  {['02:00 PM', '03:15 PM', '04:30 PM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.selectedSummary}>
                <div>
                  <div className={styles.summaryDoc}>
                    {doctorNames[selectedDoctor] || 'Senior Specialist'}
                  </div>
                  <div className={styles.summaryTime}>
                    {deptNames[selectedDept]} &bull; {selectedDay.fullDateString} at {selectedSlot}
                  </div>
                </div>
                <CheckCircle2 size={22} color="var(--primary)" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className={styles.intakeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 2: Paperless Pre-Registration</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>Zero Clipboard Waiting</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleIntakeSubmit}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Full Legal Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Asad Qureshi"
                          className={styles.formInput}
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>

                      <div className={styles.twoCol}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Mobile Number *</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="+92 300 9876543"
                            className={styles.formInput}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                          />
                        </div>

                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="asad@example.com"
                            className={styles.formInput}
                            value={patientEmail}
                            onChange={(e) => setPatientEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Primary Clinical Symptoms or Medical History</label>
                        <textarea 
                          rows={4}
                          placeholder="e.g. Chest pain with exertion, knee ACL instability, 4D obstetric ultrasound..."
                          className={styles.formTextarea}
                          value={clinicalNotes}
                          onChange={(e) => setClinicalNotes(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        <Shield size={18} />
                        <span>{isSubmitting ? 'Confirming with Clinical Desk...' : 'Confirm Appointment'}</span>
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                        <Shield size={12} color="var(--accent-emerald)" />
                        <span>Confidential Hospital Medical File &bull; PMDC Standards</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="confirmation"
                    className={styles.confirmationContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.confirmIconBox}>
                      <CalendarCheck size={32} />
                    </div>
                    <h3 className={styles.confirmTitle}>Appointment Synchronized!</h3>
                    <p className={styles.confirmSub}>
                      Thank you, <strong>{patientName || 'Guest'}</strong>. Your consultation has been confirmed at Apex Medical Institute.
                    </p>

                    <div className={styles.confirmDetailCard}>
                      <div className={styles.confirmDetailRow}>
                        <span>Department:</span>
                        <span>{deptNames[selectedDept]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Doctor:</span>
                        <span>{doctorNames[selectedDoctor]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Date &amp; Time:</span>
                        <span>{selectedDay.fullDateString} at {selectedSlot}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Campus:</span>
                        <span>Apex Campus, Main Shahrah-e-Faisal, Karachi</span>
                      </div>
                    </div>

                    <div className={styles.confirmActions}>
                      <a 
                        href={`https://wa.me/923007788800?text=Hello%20Apex%20Institute,%20I%20just%20scheduled%20a%20consultation%20for%20${encodeURIComponent(deptNames[selectedDept])}%20on%20${encodeURIComponent(selectedDay.fullDateString)}%20at%20${encodeURIComponent(selectedSlot)}.%20Please%20verify%20my%20token.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <MessageCircle size={16} color="#ffffff" />
                        <span>Open WhatsApp Clinical Desk</span>
                      </a>

                      <button 
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIsSubmitted(false)}
                        style={{ justifyContent: 'center' }}
                      >
                        Book Another Session
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
