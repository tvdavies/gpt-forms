"use client";

import { Prompt } from "@/prompts/prompts";
import { useGptStore } from "@/hooks/use-gpt-store";

export function PromptForm({ prompt }: { prompt: Prompt }) {
  const { setPrompt, submit: submitGpt } = useGptStore();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setPrompt(data);
    submitGpt();
  }

  // Turn the prompt inputs into a form
  const form = prompt.inputs.map((input) => {
    return (
      <div className="flex flex-col gap-2" key={input.name}>
        <label htmlFor={input.name}>{input.label}</label>
        <input
          className="input input-bordered w-full"
          type="text"
          name={input.name}
          placeholder={input.placeholder}
        />
      </div>
    );
  });

  return (
    <form className="card bg-base-200 shadow-xl w-full" onSubmit={submit}>
      <div className="card-body w-full flex flex-col gap-6">
        <input type="hidden" name="$prompt" value={prompt.slug} />
        {form}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
