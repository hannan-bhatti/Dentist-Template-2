'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, X, Activity, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import styles from './FloatingEmergencyDesk.module.css';

export function FloatingEmergencyDesk() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.deskContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.deskCard}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div className={styles.livePing} />
                <div>
                  <div className={styles.cardTitle}>Apex Triage &amp; ER Desk</div>
                  <div className={styles.cardSubtitle}>Shahrah-e-Faisal Central Hospital</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <X size={15} />
              </button>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.actionList}>
                <a 
                  href="https://wa.me/923007788800?text=Hello%20Apex%20Institute%2C%20I%20need%20assistance%20with%20a%20medical%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: '#ecfdf5', color: '#16a34a' }}>
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>WhatsApp Rapid Triage</div>
                    <div className={styles.btnSub}>Average reply: &lt; 2 minutes</div>
                  </div>
                </a>

                <Link 
                  href="/booking" 
                  onClick={() => setIsOpen(false)}
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>Book Specialist Slot</div>
                    <div className={styles.btnSub}>Cardiology, Dental, Gynea &amp; Physio</div>
                  </div>
                </Link>

                <a 
                  href="tel:+922135298899"
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: '#fee2e2', color: '#dc2626' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>Emergency Hotline: (021) 3529-8899</div>
                    <div className={styles.btnSub}>24/7 Acute Care &amp; Ambulance</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingTrigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Emergency & Triage Desk"
      >
        <div className={styles.pulseEffect} />
        {isOpen ? <X size={22} /> : <Activity size={24} />}
      </motion.button>
    </div>
  );
}
