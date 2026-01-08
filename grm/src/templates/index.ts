export { minimalTemplate } from "./minimal";
export { portfolioTemplate } from "./portfolio";
export { technicalTemplate } from "./technical";
export { startupTemplate } from "./startup";
export { socialTemplate } from "./social";
export { blankTemplate } from "./blank";
export type { Template, TemplateSection, TemplateField } from "./types";

import { minimalTemplate } from "./minimal";
import { portfolioTemplate } from "./portfolio";
import { technicalTemplate } from "./technical";
import { startupTemplate } from "./startup";
import { socialTemplate } from "./social";
import { blankTemplate } from "./blank";
import type { Template } from "./types";

export const templates: Record<string, Template> = {
  minimal: minimalTemplate,
  portfolio: portfolioTemplate,
  technical: technicalTemplate,
  startup: startupTemplate,
  social: socialTemplate,
  blank: blankTemplate
};

export function getTemplate(id: string): Template | undefined {
  return templates[id];
}

export function getAllTemplates(): Template[] {
  return Object.values(templates);
}
