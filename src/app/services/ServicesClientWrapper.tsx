'use client';

import React from 'react';
import styles from './services.module.css';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Sparkles, 
  Flower2, 
  Activity, 
  Microscope, 
  Stethoscope, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  'cardiology': HeartPulse,
  'dental': Sparkles,
  'gynea': Flower2,
  'physiotherapy': Activity,
  'labs': Microscope,
  'family-phy': Stethoscope,
};

export function ServicesClientWrapper({ specialtiesData }: any) {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className="container">
          <span className="section-tag">Clinical Procedures &amp; Diagnostics</span>
          <h1 className={styles.heroTitle}>Comprehensive Hospital Departments</h1>
          <p className={styles.heroSub}>
            Explore our multidisciplinary departments. Each center operates with European-accredited medical technology and specialized hospital facilities.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          {specialtiesData.map((spec: any) => {
            const Icon = iconMap[spec.id] || Sparkles;
            return (
              <div key={spec.id} id={spec.id} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className={styles.categoryTitle}>{spec.title}</h2>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{spec.tagline}</div>
                    </div>
                  </div>
                  <div className={styles.categoryLead}>Head of Department: {spec.leadDoctor}</div>
                </div>

                <motion.div 
                  className={styles.specialtyCardExtended}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="section-tag" style={{ background: '#ffffff', marginBottom: '0.85rem' }}>
                      {spec.badge}
                    </span>
                    <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
                      {spec.description}
                    </p>

                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Core Specialized Interventions:
                    </div>
                    <div className={styles.procedurePills}>
                      {spec.keyProcedures.map((proc: string, pIdx: number) => (
                        <div key={pIdx} className={styles.procPill}>
                          <CheckCircle2 size={13} color="var(--primary)" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.actionPanel}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Consultation Starting Fee
                    </div>
                    <div className={styles.feeTag}>{spec.priceFrom}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                      <Clock size={14} />
                      <span>{spec.duration}</span>
                    </div>

                    <Link 
                      href={`/booking?department=${spec.id}`}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Calendar size={16} />
                      <span>Schedule Consultation</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
