'use client';
import { useState, useEffect } from 'react';

// Image upload component
function ImgbbUpload({ onUpload }: { onUpload: (url: string) => void }) {
  const [loading, setLoading] = useState(false);
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const body = new FormData();
    body.append('image', file);
    body.append('key', '8d0b10e79f4462558c6141db43090bad');
    const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body });
    const json = await res.json();
    setLoading(false);
    if (json.success) onUpload(json.data.url);
    else alert('Upload failed');
  };
  return (
    <div style={{ marginTop: 4 }}>
      <input type="file" accept="image/*" onChange={handleFile} disabled={loading} />
      {loading && <span> Uploading…</span>}
    </div>
  );
}

// Dynamic template loader
const loadTemplate = (id: number) =>
  import(`@/templates/Template${String(id).padStart(2, '0')}.jsx`)
    .then((m) => m.default)
    .catch(() => null);

export default function Editor() {
  const [templateId, setTemplateId] = useState(1);
  const [bgColor, setBgColor] = useState('#e8f0fe');
  const [Template, setTemplate] = useState<React.FC<typeof form> | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = Number(url.searchParams.get('templateId')) || 1;
    const colors = ['#e8f0fe', '#fce8e6', '#e6f4ea', '#e2e3e5', '#fff3cd'];
    setTemplateId(id);
    setBgColor(colors[id - 1] || '#e8f0fe');
    loadTemplate(id).then((T) => setTemplate(() => T));
  }, [templateId]);

  const [form, setForm] = useState({
    firstName: ' ',
    lastName: ' ',
    jobTitle: ' ',
    company: ' ',
    email: ' ',
    phone: ' ',
    website: '',
    photoURL: '',
    linkedInURL: '',
    twitterURL: '',
  });

  // Build final HTML
  const html = `<table cellpadding="0" cellspacing="0" style="font-family:Arial;font-size:14px;color:#000;background:${bgColor}">
    <tr>
      <td style="padding-right:12px;vertical-align:top">
        <img src="${form.photoURL || 'https://i.pravatar.cc/80?u=default'}" width="80" height="80" style="border-radius:50%"/>
      </td>
      <td style="vertical-align:top">
        <strong style="color:#000">${form.firstName} ${form.lastName}</strong><br/>
        <span style="color:#000">${form.jobTitle} · ${form.company}</span><br/>
        <a href="mailto:${form.email}" style="color:#1a73e8">${form.email}</a>
        ${form.phone ? ` · <a href="tel:${form.phone.replace(/\s/g, '')}" style="color:#1a73e8">${form.phone}</a>` : ''}
        <br/><a href="${form.website}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8">${form.website.replace(/^https?:\/\//, '')}</a>
      </td>
    </tr>
  </table>`;

  // Listen for Gumroad "purchase" event → auto-redirect
  useEffect(() => {
    // @ts-ignore
    if (window.Gumroad) {
      // @ts-ignore
      window.Gumroad.on('purchase', () => {
        window.location.href = '/success';
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', gap: 40, padding: 40 }}>
      {/* Left: form */}
      <div style={{ flex: 1 }}>
        <h2>Signature Editor</h2>
        {Object.keys(form).map((k) => (
          <div key={k} style={{ marginBottom: 10 }}>
            <label style={{ display: 'block', fontWeight: 600 }}>{k}</label>
            <input
              style={{ width: '100%', padding: 6 }}
              value={form[k as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [k]: e.target.value })}
            />
            {k === 'photoURL' && <ImgbbUpload onUpload={(url) => setForm({ ...form, photoURL: url })} />}
          </div>
        ))}

        {/* Already-paid shortcut */}
        {form.email && (
          <a href="/success" style={{ fontSize: 12, color: '#1a73e8' }}>
            Already paid? Click here →
          </a>
        )}

        {/* Gumroad embedded button with callback → auto-redirect after purchase */}
        <button
          className="gumroad-button"
          data-gumroad-product-id="awhtj"
          data-gumroad-email={form.email}
          data-gumroad-callback="true"
          style={{ marginTop: 16, padding: '8px 16px', fontSize: 16, background: '#1a73e8', color: '#fff', border: 0, borderRadius: 4 }}
        >
          Save & Buy - $9
        </button>
      </div>

      {/* Right: live preview */}
      <div style={{ flex: 1 }}>
        <h2>Live Preview</h2>
        {Template ? <Template {...form} /> : <div>Loading template…</div>}
      </div>
    </div>
  );
}