import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ContractSuggestion } from '../../usesCases/contractSuggestion';

// Manejo de la solicitud POST
export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Only POST requests allowed' }, { status: 405 });
  }

  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ message: 'Prompt is required' }, { status: 400 });
    }

    const openAi = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const result = await ContractSuggestion(openAi, {prompt});

    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    console.error('Error calling OpenAI API', error);
    return NextResponse.json(
      { message: 'Error calling OpenAI API', error: error.message || error },
      { status: 500 }
    );
  }
}
