import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env.mjs";
import { CompletionChunkToTextContentStream } from "@/lib/gpt";
import { prompts } from "@/prompts/prompts";

const bodySchema = z.record(z.string()).and(
  z.object({
    $prompt: z.string().min(1),
  })
);

export async function POST(req: NextRequest) {
  const { $prompt, ...data } = bodySchema.parse(await req.json());
  const prompt = prompts.find((p) => p.slug === $prompt);

  if (!prompt) {
    return NextResponse.error();
  }

  const message = prompt.template.replace(/{{(\w+)}}/g, (_, key) => data[key]);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: prompt.model,
      messages: [{ role: "user", content: message }],
      stream: true,
    }),
  });

  if (!response.ok) {
    return NextResponse.error();
  }

  const stream = response.body?.pipeThrough(
    new CompletionChunkToTextContentStream()
  );

  return new NextResponse(stream);
}
