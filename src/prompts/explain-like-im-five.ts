import { Prompt } from "./prompts";

export default {
  model: "gpt-3.5-turbo",
  name: "Explain Like I'm Five",
  description: "Explain a concept as if talking to a five year old.",
  inputs: [
    {
      name: "subject",
      type: "text",
      label: "Subject",
      placeholder: "e.g. How do planes fly?",
    },
  ],
  template: "Explain like I'm five: {{subject}}",
} as Prompt;
