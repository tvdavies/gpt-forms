import { Prompt } from "./prompts";

export default {
  name: "Create user story",
  description: "Create a user story for a feature.",
  inputs: [
    {
      name: "feature_summary",
      type: "text",
      label: "Feature Summary",
      placeholder: "e.g. User can log in",
    },
  ],
  template:
    'Write a user story for a ticket with the following summary: "{{feature_summary}}". Write the user story in the following format: “As a [persona], I [want to], [so that]. You must only provide the user story. Do not show your working.',
} as Prompt;
