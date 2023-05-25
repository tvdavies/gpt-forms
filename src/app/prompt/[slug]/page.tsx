import { GptOutput } from "@/components/GptOutput";
import { PromptForm } from "@/components/PromptForm";
import { prompts } from "@/prompts/prompts";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const prompt = prompts.find((prompt) => prompt.slug === slug);

  if (!prompt) {
    return (
      <main className="w-full max-w-7xl p-4 mx-auto">
        <h1 className="text-3xl font-bold w-full text-center">
          Prompt not found
        </h1>
      </main>
    );
  }

  return (
    <main className="w-full max-w-7xl p-4 mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold w-full text-center">{prompt.name}</h1>
      <div className="w-full grid md:grid-cols-2 gap-4">
        <PromptForm prompt={prompt} />
        <GptOutput />
      </div>
    </main>
  );
}
