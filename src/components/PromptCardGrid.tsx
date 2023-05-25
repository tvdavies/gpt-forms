import { prompts } from "@/prompts/prompts";
import { PromptCard } from "./PromptCard";

export function PromptCardGrid() {
  const promptCards = prompts.map((prompt) => (
    <PromptCard key={prompt.name} prompt={prompt} />
  ));

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {promptCards}
    </div>
  );
}
