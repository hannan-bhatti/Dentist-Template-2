'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, ShieldAlert, HeartPulse, Activity } from 'lucide-react';
import styles from './LiveEmergencyTicker.module.css';

export function LiveEmergencyTicker() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tickerBar}>
      <div className="container">
        <div className={styles.tickerInner}>
          <div className={styles.statusLeft}>
            <span className={styles.radarWrapper}>
              <span className={styles.radarPing} />
              <span className={styles.radarDot} />
            </span>
            <span className={styles.erBadge}>24/7 ER ACTIVE</span>
            <span><strong>Apex Campus:</strong> Acute Triage Ready</span>
            <span className={styles.divider}>•</span>
            <span className={styles.waitTimeBadge}>OPD Wait: &lt; 5 Mins</span>
            {timeString && (
              <>
                <span className={styles.divider}>•</span>
                <span>
                  <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {timeString} PKT
                </span>
              </>
            )}
          </div>

          <div className={styles.statusRight}>
            <span>
              On-Duty Cardiology Lead: <strong>Prof. Dr. Tariq Ashraf</strong>
            </span>
            <span className={styles.divider}>•</span>
            <Link href="/booking" className={styles.priorityLink}>
              <span>Reserve Priority OPD Slot</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
