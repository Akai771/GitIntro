import type { Template } from "./types";
import { generateTechBadges } from "@/lib/badgeGenerator";

export const minimalTemplate: Template = {
  id: "minimal",
  name: "Minimalist Dev",
  description: "Clean, text-focused layout perfect for backend developers",
  sections: [
    {
      id: "header",
      title: "Header",
      icon: "👤",
      order: 1,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "John Doe",
          defaultValue: "",
          required: true
        },
        {
          id: "tagline",
          label: "Tagline",
          type: "text",
          placeholder: "Backend Developer | API Enthusiast",
          defaultValue: "",
          description: "A brief one-liner about yourself"
        }
      ]
    },
    {
      id: "about",
      title: "About Me",
      icon: "💭",
      order: 2,
      fields: [
        {
          id: "about",
          label: "About",
          type: "textarea",
          placeholder: "Tell us about yourself...",
          defaultValue: "",
          description: "A brief introduction about yourself and what you do"
        }
      ]
    },
    {
      id: "tech",
      title: "Tech Stack",
      icon: "🛠️",
      order: 3,
      fields: [
        {
          id: "languages",
          label: "Languages",
          type: "list",
          placeholder: "Python, JavaScript, Go",
          defaultValue: "",
          description: "Programming languages you work with (comma-separated)"
        },
        {
          id: "frameworks",
          label: "Frameworks & Tools",
          type: "list",
          placeholder: "Django, React, Docker",
          defaultValue: "",
          description: "Frameworks and tools you use (comma-separated)"
        }
      ]
    },
    {
      id: "stats",
      title: "GitHub Stats",
      icon: "📊",
      order: 4,
      fields: [
        {
          id: "github_username",
          label: "GitHub Username",
          type: "text",
          placeholder: "johndoe",
          defaultValue: "",
          description: "Your GitHub username for stats display"
        },
        {
          id: "show_profile_views",
          label: "Show Profile Views Counter",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_activity_graph",
          label: "Show Activity Graph",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_profile_details",
          label: "Show Profile Details Card",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_repos_per_language",
          label: "Show Repos Per Language",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_most_commit_language",
          label: "Show Most Commit Language",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_stats_card",
          label: "Show Stats Card",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        },
        {
          id: "show_productive_time",
          label: "Show Productive Time",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github_username"
        }
      ]
    },
    {
      id: "contact",
      title: "Contact",
      icon: "📫",
      order: 5,
      fields: [
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
          defaultValue: ""
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          type: "url",
          placeholder: "https://linkedin.com/in/username",
          defaultValue: ""
        },
        {
          id: "twitter",
          label: "Twitter/X",
          type: "url",
          placeholder: "https://twitter.com/username",
          defaultValue: ""
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    let markdown = "";

    // Header
    if (data.name) {
      markdown += `# Hi there, I'm ${data.name} 👋\n\n`;
    }
    if (data.tagline) {
      markdown += `## ${data.tagline}\n\n`;
    }

    // About
    if (data.about) {
      markdown += `### 💭 About Me\n${data.about}\n\n`;
    }

    // Tech Stack
    if (data.languages || data.frameworks) {
      markdown += `### 🛠️ Tech Stack\n\n`;
      if (data.languages) {
        markdown += `**Languages:**\n\n`;
        markdown += generateTechBadges(data.languages) + "\n\n";
      }
      if (data.frameworks) {
        markdown += `**Frameworks & Tools:**\n\n`;
        markdown += generateTechBadges(data.frameworks) + "\n\n";
      }
    }

    // GitHub Stats Section
    if (data.github_username) {
      const hasAnyStats = data.show_profile_views || data.show_activity_graph || data.show_profile_details || data.show_repos_per_language || data.show_most_commit_language || data.show_stats_card || data.show_productive_time;
      
      if (hasAnyStats) {
        markdown += `### 📊 GitHub Stats\n\n`;
      }

      // Profile Views
      if (data.show_profile_views === "true") {
        markdown += `![Profile Views](https://komarev.com/ghpvc/?username=${data.github_username}&color=blueviolet&style=flat-square)\n\n`;
      }

      // Activity Graph
      if (data.show_activity_graph === "true") {
        markdown += `![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=${data.github_username}&theme=github-compact)\n\n`;
      }

      // Profile Details Card
      if (data.show_profile_details === "true") {
        markdown += `![Profile Details](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${data.github_username}&theme=github_dark)\n\n`;
      }

      // Small cards - group horizontally
      const smallCards = [];
      if (data.show_repos_per_language === "true") {
        smallCards.push(`![Repos Per Language](http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${data.github_username}&theme=github_dark)`);
      }
      if (data.show_most_commit_language === "true") {
        smallCards.push(`![Most Commit Language](http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${data.github_username}&theme=github_dark)`);
      }
      if (data.show_stats_card === "true") {
        smallCards.push(`![Stats](http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${data.github_username}&theme=github_dark)`);
      }
      if (data.show_productive_time === "true") {
        smallCards.push(`![Productive Time](http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${data.github_username}&theme=github_dark&utcOffset=0)`);
      }
      
      if (smallCards.length > 0) {
        markdown += `\n${smallCards.join(' ')}\n\n\n`;
      }
    }

    // Contact
    const contacts = [];
    if (data.email) contacts.push(`📧 [Email](mailto:${data.email})`);
    if (data.linkedin) contacts.push(`💼 [LinkedIn](${data.linkedin})`);
    if (data.twitter) contacts.push(`𝕏 [Twitter](${data.twitter})`);
    
    if (contacts.length > 0) {
      markdown += `### 📫 Connect with me\n\n${contacts.join(" | ")}\n\n`;
    }

    markdown += `---\n\n`;

    return markdown;
  }
};
