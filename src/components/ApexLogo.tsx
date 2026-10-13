import React from 'react';
import { Activity } from 'lucide-react';

export function ApexLogo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <div className="brand-logo">
      <div 
        className="brand-icon-box"
        style={{
          background: isLight ? 'rgba(255, 255, 255, 0.12)' : 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
          color: '#ffffff'
        }}
      >
        <Activity size={22} />
      </div>
      <div>
        <div 
          className="brand-name"
          style={{ color: isLight ? '#ffffff' : 'var(--text-heading)' }}
        >
          APEX <span>INSTITUTE</span>
        </div>
        <div 
          className="brand-sub"
          style={{ color: isLight ? '#94a3b8' : 'var(--text-muted)' }}
        >
          Medical Care &amp; Diagnostics
        </div>
      </div>
    </div>
  );
}
