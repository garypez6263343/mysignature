export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: 40, background: '#f8f9fa' }}>
      <h1 style={{ fontSize: 48, color: '#000' }}>Professional Email Signature Generator</h1>
      <p style={{ fontSize: 20, color: '#000' }}>Free, no login, copy-paste ready in 30 seconds.</p>
      <a href="/editor" style={{ display: 'inline-block', marginTop: 24, padding: '12px 24px', background: '#1a73e8', color: '#fff', borderRadius: 4, textDecoration: 'none' }}>Create My Signature</a>

      <section style={{ marginTop: 60 }}>
        <h2 style={{ color: '#000' }}>Pick a Template</h2>
        <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
          <div style={{ border: '1px solid #dadce0', borderRadius: 8, padding: 16, background: '#fff' }}>
            <div style={{ height: 120, background: '#e8f0fe' }} />
            <p style={{ color: '#000' }}>Professional Blue</p>
          </div>
          <div style={{ border: '1px solid #dadce0', borderRadius: 8, padding: 16, background: '#fff' }}>
            <div style={{ height: 120, background: '#fce8e6' }} />
            <p style={{ color: '#000' }}>Business Red</p>
          </div>
          <div style={{ border: '1px solid #dadce0', borderRadius: 8, padding: 16, background: '#fff' }}>
            <div style={{ height: 120, background: '#e6f4ea' }} />
            <p style={{ color: '#000' }}>Creative Green</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2 style={{ color: '#000' }}>FAQ</h2>
        <p style={{ color: '#000' }}><b>Is it really free?</b> Yes, free templates; $9 for premium.</p>
        <p style={{ color: '#000' }}><b>Does it work with Gmail?</b> Copy HTML and paste into Gmail settings.</p>
        <p style={{ color: '#000' }}><b>Can I use my company logo?</b> Paste your logo URL or upload later.</p>
      </section>
    </main>
  );
}