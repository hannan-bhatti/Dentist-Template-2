import type { Metadata } from 'next';
import './globals.css';
import { ApexLogo } from '@/components/ApexLogo';
import { LiveEmergencyTicker } from '@/components/LiveEmergencyTicker';
import { MobileNavigation } from '@/components/MobileNavigation';
import { Phone, Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Apex Medical Institute & Diagnostics | Multispecialty Hospital",
  description: "Advanced clinical hospital & automated diagnostics in Karachi & Lahore. Centers of excellence in Cardiology, Dental Surgery, Gynecology, Physiotherapy, Molecular Labs, and Family Medicine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Live Emergency & OPD Wait-Time Ticker */}
        <LiveEmergencyTicker />

        {/* Site Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/">
              <ApexLogo />
            </Link>

            <nav className="nav-links">
              <Link href="/#departments" className="nav-link">Specialties</Link>
              <Link href="/#labs-dispatch" className="nav-link">Lab Tests</Link>
              <Link href="/#cardio-screener" className="nav-link">Heart Check</Link>
              <Link href="/#doctors" className="nav-link">Our Doctors</Link>
              <Link href="/services" className="nav-link">All Treatments</Link>
              <Link href="/#reviews" className="nav-link">Reviews</Link>
            </nav>

            <div className="nav-actions">
              <a href="tel:+922135298800" className="header-phone">
                <Phone size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>(021) 3529-8800</span>
              </a>
              <Link href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}>
                <Calendar size={15} style={{ flexShrink: 0 }} />
                <span>Book Appointment</span>
              </Link>
            </div>

            <MobileNavigation />
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                  <ApexLogo variant="light" />
                </Link>
                <p style={{ maxWidth: '340px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
                  Leading clinical hospital and molecular diagnostic center. Uniting non-invasive Cardiology, computer-guided Dental Surgery, maternal Gynecology, automated Roche labs, and specialized Physiotherapy.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px', color: '#38bdf8' }}>
                    <ShieldCheck size={13} /> PMDC Approved
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    ISO 15189 Certified
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    4.94 ★ Google Top Hospital
                  </span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Clinical Departments</h4>
                <ul>
                  <li><Link href="/services#cardiology">Interventional &amp; 3D Cardiology</Link></li>
                  <li><Link href="/services#dental">Computer-Guided 3D Implants</Link></li>
                  <li><Link href="/services#gynea">High-Risk Obstetrics &amp; 4D Scans</Link></li>
                  <li><Link href="/services#physiotherapy">Motorized Spinal Decompression</Link></li>
                  <li><Link href="/services#labs">Automated Roche Diagnostics</Link></li>
                  <li><Link href="/services#family-phy">Adult Internal Medicine</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Patient Services</h4>
                <ul>
                  <li><Link href="/#labs-dispatch">Doorstep Phlebotomy Dispatch</Link></li>
                  <li><Link href="/#cardio-screener">Cardiovascular Risk Screener</Link></li>
                  <li><Link href="/#doctors">Consultant Specialty Roster</Link></li>
                  <li><Link href="/booking">Real-Time Appointment Portal</Link></li>
                  <li><Link href="/#faq">Insurance Panels &amp; Takaful</Link></li>
                  <li><Link href="/services">Full Treatment Menu</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Campus &amp; Emergency Hub</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="var(--primary)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Apex Clinical Campus, Main Shahrah-e-Faisal<br/>Karachi, Pakistan</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Clock size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span>OPD: 8 AM – 9 PM | ER &amp; Labs: 24/7</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span>Emergency: +92 (21) 3529-8899</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/booking" className="btn-primary" style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                      Book Consultation Online <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; {new Date().getFullYear()} Apex Medical Institute. All rights reserved. Advanced Multi-Disciplinary Healthcare.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#clinical-charter">Clinical Charter</a>
                <a href="#lab-accreditation">Lab Accreditation</a>
                <a href="#insurance">Corporate Panels</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
