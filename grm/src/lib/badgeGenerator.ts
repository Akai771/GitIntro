import { languagesData } from "@/data/languagesData";
import { frameworkToolsData } from "@/data/frameworkToolsData";

export const generateTechBadge = (techName: string): string => {
  // Try to find in languages data first
  const language = languagesData.find(
    (lang) => lang.name.toLowerCase() === techName.toLowerCase()
  );

  if (language) {
    const color = language.color.replace("#", "");
    const shield = language.shield || language.name.toLowerCase().replace(/\s+/g, "");
    return `![${language.name}](https://img.shields.io/badge/${encodeURIComponent(language.name)}-${color}?style=for-the-badge&logo=${shield}&logoColor=white)`;
  }

  // Try to find in frameworks/tools data
  const framework = frameworkToolsData.find(
    (tool) => tool.name.toLowerCase() === techName.toLowerCase()
  );

  if (framework) {
    const color = framework.color.replace("#", "");
    const shield = framework.shield || framework.name.toLowerCase().replace(/\s+/g, "");
    return `![${framework.name}](https://img.shields.io/badge/${encodeURIComponent(framework.name)}-${color}?style=for-the-badge&logo=${shield}&logoColor=white)`;
  }

  // Fallback for unknown technologies
  return `![${techName}](https://img.shields.io/badge/${encodeURIComponent(techName)}-000000?style=for-the-badge)`;
};

export const generateTechBadges = (techList: string, style: "for-the-badge" | "flat" | "flat-square" = "for-the-badge"): string => {
  if (!techList) return "";
  
  const technologies = techList
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);

  return technologies.map((tech) => {
    const language = languagesData.find(
      (lang) => lang.name.toLowerCase() === tech.toLowerCase()
    );

    const framework = frameworkToolsData.find(
      (tool) => tool.name.toLowerCase() === tech.toLowerCase()
    );

    const techData = language || framework;

    if (techData) {
      const color = techData.color.replace("#", "");
      const shield = techData.shield || techData.name.toLowerCase().replace(/\s+/g, "");
      return `![${techData.name}](https://img.shields.io/badge/${encodeURIComponent(techData.name)}-${color}?style=${style}&logo=${shield}&logoColor=white)`;
    }

    return `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-000000?style=${style})`;
  }).join(" ");
};
