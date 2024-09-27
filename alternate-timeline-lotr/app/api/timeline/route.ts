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

  const response = await openai.chat.completions.create({
    "model": "gpt-4o-mini",
    "messages": [
            {
                "role": "system",
                "content": `Generate a timeline of events based on the search text ${searchText} and current location ${currentLocation} in the context of the Lord of the Rings.`
            }
        ]
  });

  console.log(response.choices[0].message.content);

  return new NextResponse(response.choices[0].message.content);

};

