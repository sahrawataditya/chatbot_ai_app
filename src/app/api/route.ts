import { model, generationConfig } from "@/lib/geminiAi";
import { NextResponse } from "next/server";

// POST Method /api
export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(question);
    if (!result)
      return NextResponse.json("Something went wrong", { status: 400 });
    return new Response(JSON.stringify(result.response.text()), {
      status: 200,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 400 });
    }
    return NextResponse.json("Something went wrong", { status: 400 });
  }
}
