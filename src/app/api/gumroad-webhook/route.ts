import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const body = Object.fromEntries(formData.entries());
  // Gumroad Ping 字段名
  const email = body.email;
  const subscription_ended_at = body.subscription_ended_at; // 为空表示正在付费

  if (!email) return NextResponse.json({ ok: false }, { status: 400 });

  // 如果 subscription_ended_at 为空 → 视为已付款
  const paid = !subscription_ended_at;

  const { error } = await supabase
    .from('users')
    .update({ paid })
    .eq('email', email);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}