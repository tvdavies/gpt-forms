import { Prompt } from "@/prompts/prompts";

export function PromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{prompt.name}</h2>
        <p>{prompt.description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={`/prompt/${prompt.slug}`}>
            Use this prompt
          </a>
        </div>
      </div>
    </div>
  );
}
