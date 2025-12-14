import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API is working',
    env_check: {
      has_stripe_key: !!process.env.STRIPE_SECRET_KEY,
      has_base_url: !!process.env.NEXT_PUBLIC_BASE_URL,
    }
  });
}

export async function POST() {
  return NextResponse.json({
    status: 'ok',
    message: 'POST endpoint is working'
  });
}
