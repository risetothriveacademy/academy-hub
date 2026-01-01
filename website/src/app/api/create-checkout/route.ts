import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  // Initialize Stripe only when the API is called (not during build)
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Stripe not configured. Please add STRIPE_SECRET_KEY environment variable.' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
  });
  try {
    const { stripe_product_id, course_title } = await request.json();

    if (!stripe_product_id) {
      return NextResponse.json(
        { error: 'Missing stripe_product_id' },
        { status: 400 }
      );
    }

    // Get the base URL for success/cancel redirects
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'https://risetothrive-academy.com';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 4900, // $49.00 in cents
            product: stripe_product_id,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}&amount=49&currency=usd`,
      cancel_url: `${origin}/minicourses`,
      metadata: {
        product_id: stripe_product_id,
        course_title: course_title || 'Mini-Course',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
