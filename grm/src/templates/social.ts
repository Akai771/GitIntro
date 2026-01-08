import type { Template } from "./types";

export const socialTemplate: Template = {
  id: "social",
  name: "Social Connector",
  description: "Central hub for all your social media and communities",
  sections: [
    {
      id: "header",
      title: "Header",
      icon: "👋",
      order: 1,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Taylor Connect",
          defaultValue: "",
          required: true
        },
        {
          id: "bio",
          label: "Bio",
          type: "textarea",
          placeholder: "Content creator, community builder, and tech enthusiast",
          defaultValue: ""
        }
      ]
    },
    {
      id: "socials",
      title: "Social Media",
      icon: "🌐",
      order: 2,
      fields: [
        {
          id: "twitter",
          label: "Twitter/X Username",
          type: "text",
          placeholder: "taylorconnect",
          defaultValue: ""
        },
        {
          id: "youtube",
          label: "YouTube Channel",
          type: "text",
          placeholder: "UCxxxxxxxxxx",
          defaultValue: ""
        },
        {
          id: "instagram",
          label: "Instagram Username",
          type: "text",
          placeholder: "taylorconnect",
          defaultValue: ""
        },
        {
          id: "tiktok",
          label: "TikTok Username",
          type: "text",
          placeholder: "@taylorconnect",
          defaultValue: ""
        },
        {
          id: "linkedin",
          label: "LinkedIn Username",
          type: "text",
          placeholder: "taylorconnect",
          defaultValue: ""
        }
      ]
    },
    {
      id: "communities",
      title: "Communities",
      icon: "💬",
      order: 3,
      fields: [
        {
          id: "discord",
          label: "Discord Server",
          type: "url",
          placeholder: "https://discord.gg/invite",
          defaultValue: ""
        },
        {
          id: "discord_members",
          label: "Discord Members Count",
          type: "text",
          placeholder: "5,000+",
          defaultValue: ""
        },
        {
          id: "community_desc",
          label: "Community Description",
          type: "textarea",
          placeholder: "Join our community of creators and developers...",
          defaultValue: ""
        }
      ]
    },
    {
      id: "content",
      title: "Content & Platforms",
      icon: "📺",
      order: 4,
      fields: [
        {
          id: "twitch",
          label: "Twitch Username",
          type: "text",
          placeholder: "taylorconnect",
          defaultValue: ""
        },
        {
          id: "medium",
          label: "Medium Username",
          type: "text",
          placeholder: "@taylorconnect",
          defaultValue: ""
        },
        {
          id: "devto",
          label: "Dev.to Username",
          type: "text",
          placeholder: "taylorconnect",
          defaultValue: ""
        }
      ]
    },
    {
      id: "stats",
      title: "Social Stats",
      icon: "📊",
      order: 5,
      fields: [
        {
          id: "followers",
          label: "Total Followers",
          type: "text",
          placeholder: "50K+",
          defaultValue: ""
        },
        {
          id: "views",
          label: "Content Views",
          type: "text",
          placeholder: "1M+",
          defaultValue: ""
        }
      ]
    }
  ],
  generateMarkdown: (data) => {
    let markdown = "";

    markdown += `# Hey! I'm ${data.name || "Social Connector"} 👋\n\n`;
    if (data.bio) {
      markdown += `${data.bio}\n\n`;
    }

    if (data.followers || data.views) {
      markdown += `## 📊 Reach\n\n`;
      const stats = [];
      if (data.followers) stats.push(`👥 **${data.followers}** Followers`);
      if (data.views) stats.push(`👀 **${data.views}** Views`);
      markdown += stats.join(" | ") + `\n\n`;
    }

    markdown += `## 🌐 Find Me On\n\n`;
    markdown += `<p align="center">\n`;
    
    if (data.twitter) {
      markdown += `  <a href="https://twitter.com/${data.twitter}">\n`;
      markdown += `    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />\n`;
      markdown += `  </a>\n`;
    }
    
    if (data.youtube) {
      markdown += `  <a href="https://youtube.com/channel/${data.youtube}">\n`;
      markdown += `    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" />\n`;
      markdown += `  </a>\n`;
    }
    
    if (data.instagram) {
      markdown += `  <a href="https://instagram.com/${data.instagram}">\n`;
      markdown += `    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />\n`;
      markdown += `  </a>\n`;
    }
    
    if (data.tiktok) {
      markdown += `  <a href="https://tiktok.com/${data.tiktok}">\n`;
      markdown += `    <img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" />\n`;
      markdown += `  </a>\n`;
    }
    
    if (data.linkedin) {
      markdown += `  <a href="https://linkedin.com/in/${data.linkedin}">\n`;
      markdown += `    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />\n`;
      markdown += `  </a>\n`;
    }
    
    markdown += `</p>\n\n`;

    if (data.discord || data.community_desc) {
      markdown += `## 💬 Join Our Community\n\n`;
      if (data.community_desc) {
        markdown += `${data.community_desc}\n\n`;
      }
      if (data.discord) {
        markdown += `[![Discord](https://img.shields.io/badge/Discord-Join_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](${data.discord})`;
        if (data.discord_members) {
          markdown += ` **${data.discord_members} Members**`;
        }
        markdown += `\n\n`;
      }
    }

    const platforms = [];
    if (data.twitch) platforms.push(`🎮 [Twitch](https://twitch.tv/${data.twitch})`);
    if (data.medium) platforms.push(`✍️ [Medium](https://medium.com/${data.medium})`);
    if (data.devto) platforms.push(`📝 [Dev.to](https://dev.to/${data.devto})`);
    
    if (platforms.length > 0) {
      markdown += `## 📺 More Content\n\n`;
      markdown += platforms.join(" | ") + `\n\n`;
    }

    markdown += `---\n\n`;
    markdown += `<p align="center">💙 Thanks for stopping by!</p>\n`;

    return markdown;
  }
};
