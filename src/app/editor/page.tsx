'use client';
import { useState } from 'react';
import Template01 from '@/templates/Template01';

export default function Editor() {
  const [form, setForm] = useState({
  firstName: ' ',
  lastName: ' ',
  jobTitle: ' ',
  company: ' ',
  email: ' ',
  phone: ' ',
  website: '',              // 空
  photoURL: '',             // 空，用模板默认图
  linkedInURL: '',          // 空
  twitterURL: '',           // 空
});

  return (
    <div style={{ display: 'flex', gap: 40, padding: 40 }}>
      {/* 左：表单 */}
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
          </div>
        ))}
        <button
          style={{ marginTop: 16, padding: '8px 16px', fontSize: 16 }}
          onClick={async () => {
            const res = await fetch('/api/save-user', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: form.email, signature: form }),
            });
            const json = await res.json();
            if (json.error) return alert(json.error);
            alert('User saved! ID: ' + json.userId);
            window.open(
              'https://lopezian316.gumroad.com/l/awhtj?email=' +
                encodeURIComponent(form.email),
              '_blank'
            );
          }}
        >
          Save & Buy - $9
        </button>
      </div>

      {/* 右：实时预览 */}
      <div style={{ flex: 1 }}>
        <h2>Live Preview</h2>
        <Template01 {...form} />
      </div>
    </div>
  );
}