import { create } from "zustand";

interface GptState {
  prompt: {
    [key: string]: string;
  } | null;
  response: string;
  setPrompt: (prompt: GptState["prompt"]) => void;
  setResponse: (response: GptState["response"]) => void;
  reset: () => void;
  submit: () => void;
}

export const useGptStore = create<GptState>((set, get) => ({
  prompt: null,
  response: "",
  setPrompt: (prompt) => set({ prompt }),
  setResponse: (response) => set({ response }),
  reset: () => set({ prompt: null, response: "" }),
  submit: async () => {
    set({ response: "" });
    const { prompt } = get();
    const response = await fetch("/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });

    const reader = response.body
      ?.pipeThrough(new TextDecoderStream())
      .getReader();

    while (reader) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      set((state) => ({ response: state.response + value }));
    }
  },
}));
