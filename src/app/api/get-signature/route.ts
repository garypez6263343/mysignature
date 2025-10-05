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

  const html = renderHtml(data.signature as Record<string, unknown>);
  return NextResponse.json({ html });
}

function renderHtml(sig: Record<string, unknown>) {
  const email    = String(sig.email    ?? '');
  const phone    = String(sig.phone    ?? '');
  const website  = String(sig.website  ?? '');
  const photoURL = String(sig.photoURL ?? '');
  const firstName = String(sig.firstName ?? '');
  const lastName = String(sig.lastName ?? '');
  const jobTitle = String(sig.jobTitle ?? '');
  const company  = String(sig.company  ?? '');

  return `<table cellpadding="0" cellspacing="0" style="font-family:Arial;font-size:14px;color:#202124">
    <tr>
      <td style="padding-right:12px;vertical-align:top">
        <img src="${photoURL || 'https://i.pravatar.cc/80?u=default'}" width="80" height="80" style="border-radius:50%"/>
      </td>
      <td style="vertical-align:top">
        <strong>${firstName} ${lastName}</strong><br/>
        <span style="color:#5f6368">${jobTitle} · ${company}</span><br/>
        <a href="mailto:${email}" style="color:#1a73e8">${email}</a>
        ${phone ? ` · <a href="tel:${phone}" style="color:#1a73e8">${phone}</a>` : ''}
        <br/><a href="${website}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8">${website.replace(/^https?:\/\//, '')}</a>
      </td>
    </tr>
  </table>`;
}