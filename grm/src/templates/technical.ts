import type { Template } from "./types";
import { generateTechBadges } from "@/lib/badgeGenerator";

export const technicalTemplate: Template = {
  id: "technical",
  name: "Technical Writer",
  description: "Optimized for documentation and blog oriented profiles",
  sections: [
    {
      id: "header",
      title: "Header",
      icon: "✍️",
      order: 1,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Alex Johnson",
          defaultValue: "",
          required: true
        },
        {
          id: "tagline",
          label: "Tagline",
          type: "text",
          placeholder: "Technical Writer | Documentation Specialist",
          defaultValue: ""
        }
      ]
    },
    {
      id: "about",
      title: "About",
      icon: "📝",
      order: 2,
      fields: [
        {
          id: "about",
          label: "About Me",
          type: "textarea",
          placeholder: "I specialize in creating clear and concise technical documentation...",
          defaultValue: ""
        }
      ]
    },
    {
      id: "writing",
      title: "Writing & Content",
      icon: "📚",
      order: 3,
      fields: [
        {
          id: "blog_url",
          label: "Blog URL",
          type: "url",
          placeholder: "https://myblog.dev",
          defaultValue: "",
          description: "Your blog or writing platform"
        },
        {
          id: "article1_title",
          label: "Recent Article 1 Title",
          type: "text",
          placeholder: "Getting Started with TypeScript",
          defaultValue: ""
        },
        {
          id: "article1_url",
          label: "Recent Article 1 URL",
          type: "url",
          placeholder: "https://myblog.dev/typescript-guide",
          defaultValue: ""
        },
        {
          id: "article2_title",
          label: "Recent Article 2 Title",
          type: "text",
          placeholder: "Best Practices for API Documentation",
          defaultValue: ""
        },
        {
          id: "article2_url",
          label: "Recent Article 2 URL",
          type: "url",
          placeholder: "https://myblog.dev/api-docs",
          defaultValue: ""
        }
      ]
    },
    {
      id: "expertise",
      title: "Areas of Expertise",
      icon: "🎯",
      order: 4,
      fields: [
        {
          id: "expertise",
          label: "Expertise Areas",
          type: "list",
          placeholder: "API Documentation, Technical Guides, Developer Tutorials",
          defaultValue: "",
          description: "Comma-separated areas of expertise"
        }
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: "🛠️",
      order: 5,
      fields: [
        {
          id: "tools",
          label: "Documentation Tools",
          type: "list",
          placeholder: "Markdown, Docusaurus, Swagger, GitBook",
          defaultValue: "",
          description: "Tools you use for documentation"
        }
      ]
    },
    {
      id: "contact",
      title: "Contact",
      icon: "📬",
      order: 6,
      fields: [
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "alex@example.com",
          defaultValue: ""
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          type: "url",
          placeholder: "https://linkedin.com/in/alexjohnson",
          defaultValue: ""
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    let markdown = "";

    // Header
    markdown += `# ${data.name || "Technical Writer"} ✍️\n\n`;
    if (data.tagline) {
      markdown += `> ${data.tagline}\n\n`;
    }

    // About
    if (data.about) {
      markdown += `## 📝 About Me\n\n${data.about}\n\n`;
    }

    // Expertise
    if (data.expertise) {
      const areas = data.expertise.split(",").map(e => e.trim()).filter(Boolean);
      markdown += `## 🎯 Areas of Expertise\n\n`;
      areas.forEach(area => {
        markdown += `- ${area}\n`;
      });
      markdown += `\n`;
    }

    // Recent Articles
    if (data.article1_title || data.article2_title) {
      markdown += `## 📚 Recent Articles\n\n`;
      if (data.article1_title) {
        markdown += `### [${data.article1_title}](${data.article1_url || "#"})\n\n`;
      }
      if (data.article2_title) {
        markdown += `### [${data.article2_title}](${data.article2_url || "#"})\n\n`;
      }
      if (data.blog_url) {
        markdown += `[📖 Read more on my blog](${data.blog_url})\n\n`;
      }
    }

    // Tools
    if (data.tools) {
      markdown += `## 🛠️ Documentation Tools\n\n`;
      markdown += generateTechBadges(data.tools) + "\n\n";
    }

    // Contact
    markdown += `## 📬 Let's Connect\n\n`;
    const contacts = [];
    if (data.email) contacts.push(`📧 ${data.email}`);
    if (data.linkedin) contacts.push(`💼 [LinkedIn](${data.linkedin})`);
    if (data.blog_url) contacts.push(`📝 [Blog](${data.blog_url})`);
    
    if (contacts.length > 0) {
      markdown += contacts.join(" | ");
      markdown += `\n\n`;
    }

    markdown += `---\n\n`;
    markdown += `💡 *Always learning, always documenting.*\n`;

    return markdown;
  }
};
