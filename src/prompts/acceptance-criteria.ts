import { Prompt } from "./prompts";

export default {
  name: "Create acceptance criteria",
  description: "Create acceptance criteria for a feature.",
  inputs: [
    {
      name: "description",
      type: "text",
      label: "Description",
      placeholder: "e.g. User can log in",
    },
    {
      name: "user_story",
      type: "text",
      label: "User Story",
      placeholder:
        "e.g. As a user, I want to log in, so that I can access my account",
    },
  ],
  template:
    'Given a ticket with title: "{{description}}" and user story: "{{user_story}}", write acceptance criteria using Gherkin syntax. You must only provide the acceptance criteria. Do not show your working.',
} as Prompt;
