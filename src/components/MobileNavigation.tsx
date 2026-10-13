'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MessageCircle, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import styles from './MobileNavigation.module.css';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { href: '/#departments', label: 'Departments', desc: 'Cardiology, Dental, Gynea, Physio, Labs & Family' },
    { href: '/#labs-dispatch', label: 'Home Lab Dispatch', desc: 'Doorstep Phlebotomy & 4-Hour Digital Results' },
    { href: '/#cardio-screener', label: 'Cardio Risk Screener', desc: '60-Second Cardiovascular Health Test' },
    { href: '/#doctors', label: 'Consultant Roster', desc: 'Professors & Department Directors' },
    { href: '/#reviews', label: 'Patient Outcomes', desc: '1,890+ Verified Reviews' },
    { href: '/services', label: 'Clinical Catalog', desc: 'Diagnostic & Surgical Directory' },
    { href: '/booking', label: 'Book Appointment', desc: 'Direct Online Slot Scheduling' }
  ];

  return (
    <div className={styles.mobileNavWrapper}>
      <a href="tel:+922135298800" className={styles.quickCallBtn} aria-label="Call Hospital">
        <Phone size={17} />
      </a>

      <Link href="/booking" className={styles.quickBookBtn}>
        <Calendar size={14} />
        <span>Book</span>
      </Link>

      <button 
        className={styles.hamburgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Navigation"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div 
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className={styles.drawerHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <Activity size={18} />
                  </div>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading)' }}>Apex Institute</strong>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className={styles.drawerBody}>
                <div className={styles.navLinksList}>
                  {links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className={styles.navItem}
                      onClick={() => setIsOpen(false)}
                    >
                      <div>
                        <div className={styles.navLabel}>{link.label}</div>
                        <div className={styles.navDesc}>{link.desc}</div>
                      </div>
                      <ChevronRight size={16} color="var(--primary)" />
                    </Link>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  <Link 
                    href="/booking" 
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar size={16} />
                    <span>Book Specialist Slot</span>
                  </Link>

                  <a 
                    href="https://wa.me/923007788800" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary" 
                    style={{ width: '100%', justifyContent: 'center', color: '#16a34a' }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Emergency Desk</span>
                  </a>
                </div>
              </div>

              <div className={styles.drawerFooter}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={14} color="var(--accent-emerald)" />
                  <span>ISO 15189 Molecular Diagnostics</span>
                </div>
                <div>Apex Clinical Campus, Main Shahrah-e-Faisal, Karachi</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
