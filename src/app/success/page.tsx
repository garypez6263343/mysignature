'use client';
import { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    const html = localStorage.getItem('signatureHTML') || '';
    if (html) navigator.clipboard.writeText(html);
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Payment Successful!</h2>
      <p>Your signature is now copied to clipboard.</p>
      <button onClick={() => navigator.clipboard.writeText(localStorage.getItem('signatureHTML') || '')}
              style={{ marginTop: 16, padding: '8px 16px', fontSize: 16 }}>Copy Again</button>
      <p style={{ marginTop: 24 }}>Paste it into Gmail/Outlook settings → Save.</p>
    </div>
  );
  
}