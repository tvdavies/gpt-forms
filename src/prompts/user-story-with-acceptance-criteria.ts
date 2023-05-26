import { Prompt } from "./prompts";

export default {
  model: "gpt-4",
  name: "Create user story with acceptance criteria",
  description: "Create a user story and acceptance criteria for a feature.",
  inputs: [
    {
      name: "feature_summary",
      type: "text",
      label: "Feature Summary",
      placeholder: "e.g. User can log in",
    },
  ],
  template:
    'You are a product owner creating Jira issues for a software product. Write a user story for a ticket with the following summary: "{{feature_summary}}". Write the user story in the following format: “As a [persona], I [want to], [so that]. You must only provide the user story. Do not show your working. Then, using the summary and the user story, write acceptance criteria using Gherkin syntax. You must only provide the acceptance criteria. Do not show your working.',
} as Prompt;
