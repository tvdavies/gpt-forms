import slugify from "slugify";
import explainLikeImFive from "./explain-like-im-five";
import userStory from "./user-story";
import acceptanceCriteria from "./acceptance-criteria";

interface PromptInput {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface Prompt {
  name: string;
  description: string;
  template: string;
  inputs: Array<PromptInput>;
  slug?: string;
}

export const prompts: Array<Prompt> = [
  explainLikeImFive,
  userStory,
  acceptanceCriteria,
];

for (const prompt of prompts) {
  prompt.slug = slugify(prompt.name);
}
