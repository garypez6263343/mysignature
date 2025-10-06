'use client';
import Link from 'next/link';

const cards = [
  { id: 1, name: 'Professional Blue', color: '#e8f0fe' },
  { id: 2, name: 'Business Red',      color: '#fce8e6' },
  { id: 3, name: 'Creative Green',    color: '#e6f4ea' },
  { id: 4, name: 'Business Gray',     color: '#e2e3e5' },
  { id: 5, name: 'Creative Yellow',   color: '#fff3cd' },
];

export default function Templates() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h2 style={{ color: '#000' }}>Pick a Template</h2>
      <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
        {cards.map((c) => (
          <Link key={c.id} href={`/editor?templateId=${c.id}`} style={{ textDecoration: 'none', color: '#000' }}>
            <div style={{ border: '1px solid #dadce0', borderRadius: 8, padding: 16, background: '#fff', width: 200 }}>
              <div style={{ height: 120, background: c.color }} />
              <p style={{ marginTop: 8, color: '#000' }}>{c.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}