import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: NextRequest) {
  const urlParams = new URLSearchParams(request.url?.split('?')[1]);
  const searchText = urlParams.get('searchText');
  const currentLocation = urlParams.get('currentLocation');

  console.log(`Search Text: ${searchText}, Current Location: ${currentLocation}`);

 let prompt = `You are JRR Tolkein. You are to rewrite Frodo and Sam's journey to Mordor but in an alternate timeline where things happened differently.
You will respect the established lore from the Lord of the Rings but are free to change the plot and add onto the lore yourself.
Write with Tolkein's style, conversational tone, and narrative structure. Your goal is to engage a lord of the rings fan in thrilling, engaging, fascinating
exploration of alternat timelines. You should create new, unpredicatable scenarios but compelling justifications for why they ahhepened. You should have readers
on the edge of their seat racing to read what happened. Make surprising situations happen. Immediately start from a place in the story where the alternate timeline
would diverge quite distinctly from the plot of the books due to the twist.

Frodo and Sam are currently at: ${currentLocation}. The alternate timeline is ${searchText}`
  const response = await openai.chat.completions.create({
    "model": "gpt-4o-mini",
    "messages": [
            {
                "role": "system",
                "content": prompt
            }
        ]
  });

  console.log(response.choices[0].message.content);

  return new NextResponse(response.choices[0].message.content);

};

