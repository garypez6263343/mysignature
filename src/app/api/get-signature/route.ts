import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');
  if (!email) return NextResponse.json({ html: '' }, { status: 400 });

  const { data } = await supabase
    .from('users')
    .select('signature')
    .eq('email', email)
    .single();

  if (!data || !data.signature)
    return NextResponse.json({ html: '' }, { status: 404 });

  // 把签名对象渲染成最终 HTML
  const html = renderHtml(data.signature);
  return NextResponse.json({ html });
}

function renderHtml(sig: any) {
  // 只演示用 Template01 骨架，后期可换
  return `<table cellpadding="0" cellspacing="0" style="font-family:Arial;font-size:14px;color:#202124">
    <tr>
      <td style="padding-right:12px;vertical-align:top">
        <img src="${sig.photoURL || 'https://i.pravatar.cc/80?u=default'}" width="80" height="80" style="border-radius:50%"/>
      </td>
      <td style="vertical-align:top">
        <strong>${sig.firstName} ${sig.lastName}</strong><br/>
        <span style="color:#5f6368">${sig.jobTitle} · ${sig.company}</span><br/>
        <a href="mailto:${sig.email}" style="color:#1a73e8">${sig.email}</a>
        ${sig.phone ? ` · <a href="tel:${sig.phone}" style="color:#1a73e8">${sig.phone}</a>` : ''}
        <br/><a href="${sig.website}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8">${sig.website.replace(/^https?:\/\//, '')}</a>
      </td>
    </tr>
  </table>`;
}