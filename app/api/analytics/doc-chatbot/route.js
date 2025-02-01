import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // Forward the request to the external API
    const response = await fetch('https://llm-vision.onrender.com/doc_chatbot', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}