import type { Template } from "./types";
import { generateTechBadges } from "@/lib/badgeGenerator";

export const portfolioTemplate: Template = {
  id: "portfolio",
  name: "Portfolio Showcase",
  description: "Visual-heavy design to show off your best projects",
  sections: [
    {
      id: "header",
      title: "Header",
      icon: "🎨",
      order: 1,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Jane Smith",
          defaultValue: "",
          required: true
        },
        {
          id: "title",
          label: "Professional Title",
          type: "text",
          placeholder: "Full Stack Developer & Designer",
          defaultValue: ""
        },
        {
          id: "banner_url",
          label: "Banner Image URL",
          type: "url",
          placeholder: "https://example.com/banner.png",
          defaultValue: "",
          description: "Optional banner image for your profile"
        }
      ]
    },
    {
      id: "intro",
      title: "Introduction",
      icon: "👋",
      order: 2,
      fields: [
        {
          id: "intro",
          label: "Introduction",
          type: "textarea",
          placeholder: "Welcome to my profile! I'm passionate about...",
          defaultValue: ""
        }
      ]
    },
    {
      id: "projects",
      title: "Featured Projects",
      icon: "🚀",
      order: 3,
      fields: [
        {
          id: "project1_name",
          label: "Project 1 Name",
          type: "text",
          placeholder: "Awesome Project",
          defaultValue: ""
        },
        {
          id: "project1_desc",
          label: "Project 1 Description",
          type: "textarea",
          placeholder: "A brief description of your project",
          defaultValue: ""
        },
        {
          id: "project1_url",
          label: "Project 1 URL",
          type: "url",
          placeholder: "https://github.com/username/project",
          defaultValue: ""
        },
        {
          id: "project2_name",
          label: "Project 2 Name",
          type: "text",
          placeholder: "Another Cool Project",
          defaultValue: ""
        },
        {
          id: "project2_desc",
          label: "Project 2 Description",
          type: "textarea",
          placeholder: "A brief description of your project",
          defaultValue: ""
        },
        {
          id: "project2_url",
          label: "Project 2 URL",
          type: "url",
          placeholder: "https://github.com/username/project",
          defaultValue: ""
        }
      ]
    },
    {
      id: "skills",
      title: "Skills",
      icon: "💼",
      order: 4,
      fields: [
        {
          id: "skills",
          label: "Skills",
          type: "list",
          placeholder: "React, Vue, Node.js, MongoDB",
          defaultValue: "",
          description: "Comma-separated list of skills"
        }
      ]
    },
    {
      id: "stats",
      title: "GitHub Stats",
      icon: "📊",
      order: 5,
      fields: [
        {
          id: "github",
          label: "GitHub Username",
          type: "text",
          placeholder: "janesmith",
          defaultValue: "",
          description: "Your GitHub username for stats and profile link"
        },
        {
          id: "show_profile_views",
          label: "Show Profile Views Counter",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_activity_graph",
          label: "Show Activity Graph",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_profile_details",
          label: "Show Profile Details Card",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_repos_per_language",
          label: "Show Repos Per Language",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_most_commit_language",
          label: "Show Most Commit Language",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_stats_card",
          label: "Show Stats Card",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
        },
        {
          id: "show_productive_time",
          label: "Show Productive Time",
          type: "checkbox",
          placeholder: "",
          defaultValue: "",
          showWhen: "github"
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
          placeholder: "jane@example.com",
          defaultValue: ""
        },
        {
          id: "website",
          label: "Portfolio Website",
          type: "url",
          placeholder: "https://janesmith.dev",
          defaultValue: ""
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    let markdown = "";

    // Banner
    if (data.banner_url) {
      markdown += `![Banner](${data.banner_url})\n\n`;
    }

    // Header
    if (data.name) {
      markdown += `# ${data.name}\n\n`;
    }
    if (data.title) {
      markdown += `### ${data.title}\n\n`;
    }

    // Intro
    if (data.intro) {
      markdown += `${data.intro}\n\n`;
    }

    // Projects
    if (data.project1_name || data.project2_name) {
      markdown += `## 🚀 Featured Projects\n\n`;
      
      if (data.project1_name) {
        markdown += `### [${data.project1_name}](${data.project1_url || "#"})\n`;
        if (data.project1_desc) markdown += `${data.project1_desc}\n\n`;
      }
      
      if (data.project2_name) {
        markdown += `### [${data.project2_name}](${data.project2_url || "#"})\n`;
        if (data.project2_desc) markdown += `${data.project2_desc}\n\n`;
      }
    }

    // Skills
    if (data.skills) {
      markdown += `## 💼 Skills\n\n`;
      markdown += generateTechBadges(data.skills) + "\n\n";
    }

    // GitHub Stats Section
    if (data.github) {
      const hasAnyStats = data.show_profile_views || data.show_activity_graph || data.show_profile_details || data.show_repos_per_language || data.show_most_commit_language || data.show_stats_card || data.show_productive_time;
      
      if (hasAnyStats) {
        markdown += `## 📊 GitHub Stats\n\n`;
      }

      // Profile Views
      if (data.show_profile_views === "true") {
        markdown += `![Profile Views](https://komarev.com/ghpvc/?username=${data.github}&color=blueviolet&style=flat-square)\n\n`;
      }

      // Activity Graph
      if (data.show_activity_graph === "true") {
        markdown += `![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=${data.github}&theme=react-dark)\n\n`;
      }

      // Profile Details Card
      if (data.show_profile_details === "true") {
        markdown += `![Profile Details](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${data.github}&theme=radical)\n\n`;
      }

      // Small cards - group horizontally
      const smallCards = [];
      if (data.show_repos_per_language === "true") {
        smallCards.push(`![Repos Per Language](http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${data.github}&theme=radical)`);
      }
      if (data.show_most_commit_language === "true") {
        smallCards.push(`![Most Commit Language](http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${data.github}&theme=radical)`);
      }
      if (data.show_stats_card === "true") {
        smallCards.push(`![Stats](http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${data.github}&theme=radical)`);
      }
      if (data.show_productive_time === "true") {
        smallCards.push(`![Productive Time](http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${data.github}&theme=radical&utcOffset=0)`);
      }
      
      if (smallCards.length > 0) {
        markdown += `<p align="center">\n${smallCards.join(' ')}\n</p>\n\n`;
      }
    }

    // Contact
    markdown += `## 📬 Get in Touch\n\n`;
    const contacts = [];
    if (data.email) contacts.push(`📧 ${data.email}`);
    if (data.website) contacts.push(`🌐 [Portfolio](${data.website})`);
    if (data.github) contacts.push(`💻 [GitHub](https://github.com/${data.github})`);
    
    if (contacts.length > 0) {
      markdown += contacts.join(" • ") + "\n\n";
    }

    return markdown;
  }
};