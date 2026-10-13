'use client';

import React, { useState, useMemo } from 'react';
import { HeartPulse, AlertTriangle, ShieldCheck, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import styles from './CardioRiskCalculator.module.css';

export function CardioRiskCalculator() {
  const [ageGroup, setAgeGroup] = useState('35-50');
  const [bpStatus, setBpStatus] = useState('borderline');
  const [familyHistory, setFamilyHistory] = useState('yes');
  const [exercise, setExercise] = useState('light');

  const { riskTier, title, desc, colorBg, badgeText } = useMemo(() => {
    let score = 0;
    if (ageGroup === '50+') score += 2;
    if (ageGroup === '35-50') score += 1;

    if (bpStatus === 'high') score += 3;
    if (bpStatus === 'borderline') score += 1;

    if (familyHistory === 'yes') score += 2;
    if (exercise === 'sedentary') score += 2;
    if (exercise === 'light') score += 1;

    if (score >= 5) {
      return {
        riskTier: 'elevated',
        badgeText: 'Elevated Risk Tier',
        colorBg: 'linear-gradient(135deg, #991b1b 0%, #0f172a 100%)',
        title: 'Priority Cardiovascular Workup Recommended',
        desc: 'Based on your combination of risk factors, an early 3D echocardiogram, 12-lead digital ECG, and apolipoprotein lipid evaluation are strongly advised.'
      };
    } else if (score >= 3) {
      return {
        riskTier: 'moderate',
        badgeText: 'Moderate Vigilance Tier',
        colorBg: 'linear-gradient(135deg, #b45309 0%, #0f172a 100%)',
        title: 'Preventive Cardiac Review Recommended',
        desc: 'You exhibit manageable risk factors. An annual non-invasive screening and metabolic health review will help prevent arterial plaque buildup.'
      };
    } else {
      return {
        riskTier: 'optimal',
        badgeText: 'Optimal / Low Risk Tier',
        colorBg: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
        title: 'Favorable Cardiovascular Profile',
        desc: 'Your self-reported parameters reflect solid health stewardship. Maintain routine annual executive checkups to sustain longevity.'
      };
    }
  }, [ageGroup, bpStatus, familyHistory, exercise]);

  return (
    <div className={styles.screenerCard} id="cardio-screener">
      <div className={styles.screenerHeader}>
        <span className="section-tag">
          <HeartPulse size={14} style={{ display: 'inline', marginRight: 4 }} />
          Clinical Prevention Algorithm
        </span>
        <h2 className="section-title">60-Second Cardiovascular &amp; Metabolic Risk Screener</h2>
        <p className="section-subtitle">
          Assess your baseline risk for hypertension, arterial plaque, and metabolic strain. Receive personalized guidance from our Cardiology Department.
        </p>
      </div>

      <div className={styles.screenerForm}>
        <div className={styles.questionBox}>
          <label className={styles.questionLabel}>1. Age Bracket</label>
          <select 
            className={styles.selectInput}
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option value="under35">Under 35 Years</option>
            <option value="35-50">35 – 50 Years</option>
            <option value="50+">50+ Years</option>
          </select>
        </div>

        <div className={styles.questionBox}>
          <label className={styles.questionLabel}>2. Blood Pressure Readings</label>
          <select 
            className={styles.selectInput}
            value={bpStatus}
            onChange={(e) => setBpStatus(e.target.value)}
          >
            <option value="normal">Normal (&lt; 120/80 mmHg)</option>
            <option value="borderline">Borderline Elevated (120–139 / 80–89)</option>
            <option value="high">Diagnosed Hypertension (&gt; 140/90 or on medication)</option>
          </select>
        </div>

        <div className={styles.questionBox}>
          <label className={styles.questionLabel}>3. Family History of Heart Disease or Diabetes</label>
          <select 
            className={styles.selectInput}
            value={familyHistory}
            onChange={(e) => setFamilyHistory(e.target.value)}
          >
            <option value="yes">Yes (Immediate Family: Parents / Siblings)</option>
            <option value="no">No Known Premature History</option>
          </select>
        </div>

        <div className={styles.questionBox}>
          <label className={styles.questionLabel}>4. Physical Activity &amp; Lifestyle</label>
          <select 
            className={styles.selectInput}
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          >
            <option value="active">Active (150+ mins cardio weekly)</option>
            <option value="light">Light Activity (1–2 days weekly)</option>
            <option value="sedentary">Predominantly Sedentary Desk Routine</option>
          </select>
        </div>
      </div>

      <div className={styles.resultBox} style={{ background: colorBg }}>
        <div>
          <span className={styles.riskBadge} style={{ background: 'rgba(255,255,255,0.18)' }}>
            {badgeText}
          </span>
          <h3 className={styles.resultTitle}>{title}</h3>
          <p className={styles.resultDesc}>{desc}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: 230 }}>
          <Link 
            href="/booking?department=cardiology" 
            className="btn-primary" 
            style={{ background: '#ffffff', color: '#0f172a', justifyContent: 'center' }}
          >
            <Calendar size={15} />
            <span>Consult Dr. Tariq Ashraf</span>
          </Link>
          <a 
            href={`https://wa.me/923007788800?text=Hi%20Apex%20Institute,%20I%20completed%20the%20cardiac%20screener%20and%20scored%20in%20the%20${encodeURIComponent(badgeText)}.%20I%20would%20like%20to%20book%20a%20cardiology%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', justifyContent: 'center' }}
          >
            <MessageCircle size={15} color="#22c55e" />
            <span>WhatsApp Care Triage</span>
          </a>
        </div>
      </div>
    </div>
  );
}
