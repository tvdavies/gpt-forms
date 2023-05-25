import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env.mjs";
import { CompletionChunkToTextContentStream } from "@/lib/gpt";

const bodySchema = z.record(z.string()).and(
  z.object({
    $template: z.string(),
  })
);

export async function POST(req: NextRequest) {
  const { $template, ...data } = bodySchema.parse(await req.json());
  const prompt = $template.replace(/{{(\w+)}}/g, (_, key) => data[key]);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
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
