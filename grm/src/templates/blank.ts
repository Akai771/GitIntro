import type { Template } from "./types";

export const blankTemplate: Template = {
  id: "blank",
  name: "Blank Canvas",
  description: "Start from scratch and build something unique",
  sections: [
    {
      id: "content",
      title: "Markdown Content",
      icon: "📝",
      order: 1,
      fields: [
        {
          id: "markdown",
          label: "Your Markdown",
          type: "textarea",
          placeholder: "# Your README\n\nStart writing your custom README here...",
          defaultValue: "# Your README\n\nStart writing your custom README here...",
          description: "Write your own custom markdown from scratch"
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    return data.markdown || "# Your README\n\nStart writing your custom README here...";
  }
};
