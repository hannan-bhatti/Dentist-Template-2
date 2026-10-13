'use client';

import React, { useState } from 'react';
import { Microscope, Home, Building2, Clock, Check, Sparkles, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { labCatalog } from '@/lib/mockData';
import styles from './LabDispatcher.module.css';

export function LabDispatcher() {
  const [selectedTestId, setSelectedTestId] = useState<string>('executive-72-profile');
  const [dispatchMode, setDispatchMode] = useState<'home' | 'clinic'>('home');
  const [address, setAddress] = useState('');

  const activeTest = labCatalog.find(t => t.id === selectedTestId) || labCatalog[0];
  const dispatchFee = dispatchMode === 'home' ? 1500 : 0;
  const totalPrice = activeTest.price + dispatchFee;

  const whatsappMsg = encodeURIComponent(
    `Hello Apex Laboratories! I would like to order the "${activeTest.name}" (${dispatchMode === 'home' ? `Doorstep Phlebotomy Dispatch to: ${address || 'My Residence'}` : 'Walk-in Clinic'}). Estimated Total: Rs. ${totalPrice.toLocaleString()}. Please confirm available dispatch times.`
  );

  return (
    <div className={styles.dispatcherCard} id="labs-dispatch">
      <div className={styles.dispatcherHeader}>
        <span className="section-tag">
          <Microscope size={14} style={{ display: 'inline', marginRight: 4 }} />
          Fast &amp; Accurate Lab Tests
        </span>
        <h2 className="section-title">Order Lab Tests: At Our Clinic or at Home</h2>
        <p className="section-subtitle">
          Select a test package below. Walk into our clinic anytime or have a polite technician collect your blood sample at home with results delivered to your phone in 2–4 hours.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.catalogList}>
          {labCatalog.map((item) => {
            const isSelected = selectedTestId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.testItem} ${isSelected ? styles.testItemActive : ''}`}
                onClick={() => setSelectedTestId(item.id)}
              >
                <div>
                  <div className={styles.testName}>
                    {item.name}
                    <span style={{ marginLeft: 8, fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 700 }}>
                      [{item.turnaround} Digital Delivery]
                    </span>
                  </div>
                  <div className={styles.testSub}>{item.testsList}</div>
                </div>
                <div className={styles.testPrice}>
                  Rs. {item.price.toLocaleString()}
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.dispatchPanel}>
          <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Collection Protocol
          </div>

          <div className={styles.modeToggle}>
            <button
              type="button"
              className={`${styles.modeBtn} ${dispatchMode === 'home' ? styles.modeBtnActive : ''}`}
              onClick={() => setDispatchMode('home')}
            >
              <Home size={15} />
              <span>Doorstep Home Dispatch</span>
            </button>
            <button
              type="button"
              className={`${styles.modeBtn} ${dispatchMode === 'clinic' ? styles.modeBtnActive : ''}`}
              onClick={() => setDispatchMode('clinic')}
            >
              <Building2 size={15} />
              <span>Campus Walk-In</span>
            </button>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Consolidated Total:</div>
          <div className={styles.summaryTotal}>
            Rs. {totalPrice.toLocaleString()}
          </div>

          <div className={styles.metaRow}>
            <span>Test Profile:</span>
            <span style={{ fontWeight: 700, color: '#ffffff' }}>{activeTest.name.split(' ')[0]} Battery</span>
          </div>
          <div className={styles.metaRow}>
            <span>Turnaround Time:</span>
            <span style={{ fontWeight: 700, color: '#38bdf8' }}>&lt; {activeTest.turnaround}</span>
          </div>
          <div className={styles.metaRow}>
            <span>Phlebotomy Protocol:</span>
            <span>{dispatchMode === 'home' ? 'Home Visit (+Rs. 1,500)' : 'Clinic Free'}</span>
          </div>

          {dispatchMode === 'home' && (
            <input 
              type="text"
              placeholder="Enter Street Address & City (e.g. Clifton, DHA, Gulberg)"
              className={styles.addressInput}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}

          <a 
            href={`https://wa.me/923007788800?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center', marginTop: dispatchMode === 'home' ? 0 : '1.5rem' }}
          >
            <MessageCircle size={17} color="#ffffff" />
            <span>{dispatchMode === 'home' ? 'Dispatch Phlebotomist via WhatsApp' : 'Reserve Walk-In via WhatsApp'}</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#94a3b8', marginTop: '1rem' }}>
            <ShieldCheck size={13} color="#22c55e" />
            <span>ISO 15189 Certified Cold-Chain Transport</span>
          </div>
        </div>
      </div>
    </div>
  );
}
