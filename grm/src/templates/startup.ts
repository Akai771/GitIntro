import type { Template } from "./types";
import { generateTechBadges } from "@/lib/badgeGenerator";

export const startupTemplate: Template = {
  id: "startup",
  name: "Indie Hacker",
  description: "Focus on products, revenue stats, and current focus",
  sections: [
    {
      id: "header",
      title: "Header",
      icon: "💼",
      order: 1,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Sam Builder",
          defaultValue: "",
          required: true
        },
        {
          id: "tagline",
          label: "Tagline",
          type: "text",
          placeholder: "Indie Hacker | Building in Public",
          defaultValue: ""
        }
      ]
    },
    {
      id: "current",
      title: "Current Focus",
      icon: "🎯",
      order: 2,
      fields: [
        {
          id: "current_focus",
          label: "What I'm Working On",
          type: "textarea",
          placeholder: "Currently building a SaaS platform for...",
          defaultValue: "",
          description: "What are you currently building or working on?"
        }
      ]
    },
    {
      id: "products",
      title: "Products",
      icon: "🚀",
      order: 3,
      fields: [
        {
          id: "product1_name",
          label: "Product 1 Name",
          type: "text",
          placeholder: "MyAwesomeApp",
          defaultValue: ""
        },
        {
          id: "product1_desc",
          label: "Product 1 Description",
          type: "textarea",
          placeholder: "A tool that helps developers...",
          defaultValue: ""
        },
        {
          id: "product1_url",
          label: "Product 1 URL",
          type: "url",
          placeholder: "https://myawesomeapp.com",
          defaultValue: ""
        },
        {
          id: "product1_status",
          label: "Product 1 Status",
          type: "text",
          placeholder: "Live | In Development | Launching Soon",
          defaultValue: ""
        },
        {
          id: "product2_name",
          label: "Product 2 Name",
          type: "text",
          placeholder: "AnotherTool",
          defaultValue: ""
        },
        {
          id: "product2_desc",
          label: "Product 2 Description",
          type: "textarea",
          placeholder: "Simplifies the process of...",
          defaultValue: ""
        },
        {
          id: "product2_url",
          label: "Product 2 URL",
          type: "url",
          placeholder: "https://anothertool.com",
          defaultValue: ""
        }
      ]
    },
    {
      id: "stats",
      title: "Journey Stats",
      icon: "📊",
      order: 4,
      fields: [
        {
          id: "users",
          label: "Total Users",
          type: "text",
          placeholder: "1,000+",
          defaultValue: ""
        },
        {
          id: "mrr",
          label: "MRR (Monthly Recurring Revenue)",
          type: "text",
          placeholder: "$5,000",
          defaultValue: ""
        },
        {
          id: "projects_launched",
          label: "Projects Launched",
          type: "text",
          placeholder: "5",
          defaultValue: ""
        }
      ]
    },
    {
      id: "tech",
      title: "Tech Stack",
      icon: "🛠️",
      order: 5,
      fields: [
        {
          id: "tech_stack",
          label: "Technologies Used",
          type: "list",
          placeholder: "Next.js, TypeScript, Tailwind, Supabase",
          defaultValue: "",
          description: "Comma-separated list of technologies"
        }
      ]
    },
    {
      id: "contact",
      title: "Connect",
      icon: "🔗",
      order: 6,
      fields: [
        {
          id: "twitter",
          label: "Twitter/X",
          type: "text",
          placeholder: "sambuilder",
          defaultValue: ""
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "sam@example.com",
          defaultValue: ""
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    let markdown = "";

    markdown += `# ${data.name || "Indie Hacker"} 💼\n\n`;
    if (data.tagline) {
      markdown += `### ${data.tagline}\n\n`;
    }

    if (data.current_focus) {
      markdown += `## 🎯 What I'm Building\n\n${data.current_focus}\n\n`;
    }

    if (data.product1_name || data.product2_name) {
      markdown += `## 🚀 My Products\n\n`;
      
      if (data.product1_name) {
        markdown += `### [${data.product1_name}](${data.product1_url || "#"})`;
        if (data.product1_status) {
          markdown += ` - \`${data.product1_status}\``;
        }
        markdown += `\n\n${data.product1_desc || ""}\n\n`;
      }
      
      if (data.product2_name) {
        markdown += `### [${data.product2_name}](${data.product2_url || "#"})\n\n`;
        markdown += `${data.product2_desc || ""}\n\n`;
      }
    }

    if (data.users || data.mrr || data.projects_launched) {
      markdown += `## 📊 Journey So Far\n\n`;
      if (data.users) markdown += `👥 **Users:** ${data.users}\n\n`;
      if (data.mrr) markdown += `💰 **MRR:** ${data.mrr}\n\n`;
      if (data.projects_launched) markdown += `🚀 **Projects Launched:** ${data.projects_launched}\n\n`;
    }

    if (data.tech_stack) {
      markdown += `## 🛠️ Tech Stack\n\n`;
      markdown += generateTechBadges(data.tech_stack) + "\n\n";
    }

    markdown += `## 🔗 Let's Connect\n\n`;
    const contacts = [];
    if (data.twitter) contacts.push(`🐦 [Twitter](https://twitter.com/${data.twitter})`);
    if (data.email) contacts.push(`📧 ${data.email}`);
    
    if (contacts.length > 0) {
      markdown += contacts.join(" | ");
      markdown += `\n\n`;
    }

    markdown += `---\n\n`;
    markdown += `💡 *Building products, sharing the journey.*\n`;

    return markdown;
  }
};
