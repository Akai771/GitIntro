export interface Language {
  name: string;
  color: string;
  icon?: string;
  shield?: string;
}

export const languagesData: Language[] = [
  // Programming Languages
  { name: "JavaScript", color: "#F7DF1E", shield: "javascript" },
  { name: "TypeScript", color: "#3178C6", shield: "typescript" },
  { name: "Python", color: "#3776AB", shield: "python" },
  { name: "Java", color: "#007396", shield: "java" },
  { name: "C", color: "#A8B9CC", shield: "c" },
  { name: "C++", color: "#00599C", shield: "cplusplus" },
  { name: "C#", color: "#239120", shield: "csharp" },
  { name: "PHP", color: "#777BB4", shield: "php" },
  { name: "Ruby", color: "#CC342D", shield: "ruby" },
  { name: "Go", color: "#00ADD8", shield: "go" },
  { name: "Rust", color: "#000000", shield: "rust" },
  { name: "Swift", color: "#FA7343", shield: "swift" },
  { name: "Kotlin", color: "#7F52FF", shield: "kotlin" },
  { name: "Scala", color: "#DC322F", shield: "scala" },
  { name: "Dart", color: "#0175C2", shield: "dart" },
  { name: "R", color: "#276DC3", shield: "r" },
  { name: "Perl", color: "#39457E", shield: "perl" },
  { name: "Lua", color: "#2C2D72", shield: "lua" },
  { name: "Elixir", color: "#4B275F", shield: "elixir" },
  { name: "Haskell", color: "#5D4F85", shield: "haskell" },
  { name: "Clojure", color: "#5881D8", shield: "clojure" },
  { name: "Erlang", color: "#A90533", shield: "erlang" },
  { name: "Julia", color: "#9558B2", shield: "julia" },
  { name: "Objective-C", color: "#438EFF", shield: "objectivec" },
  { name: "Shell", color: "#89E051", shield: "shell" },
  { name: "PowerShell", color: "#012456", shield: "powershell" },
  { name: "Assembly", color: "#6E4C13", shield: "assembly" },
  { name: "Solidity", color: "#363636", shield: "solidity" },
  
  // Frontend Frameworks & Libraries
  { name: "React", color: "#61DAFB", shield: "react" },
  { name: "Vue.js", color: "#4FC08D", shield: "vuedotjs" },
  { name: "Angular", color: "#DD0031", shield: "angular" },
  { name: "Svelte", color: "#FF3E00", shield: "svelte" },
  { name: "Next.js", color: "#000000", shield: "nextdotjs" },
  { name: "Nuxt.js", color: "#00DC82", shield: "nuxtdotjs" },
  { name: "Gatsby", color: "#663399", shield: "gatsby" },
  { name: "Astro", color: "#FF5D01", shield: "astro" },
  { name: "Remix", color: "#000000", shield: "remix" },
  { name: "Solid.js", color: "#2C4F7C", shield: "soliddotjs" },
  { name: "Preact", color: "#673AB8", shield: "preact" },
  { name: "Alpine.js", color: "#8BC0D0", shield: "alpinedotjs" },
  { name: "Lit", color: "#324FFF", shield: "lit" },
  { name: "Ember.js", color: "#E04E39", shield: "emberdotjs" },
  { name: "Backbone.js", color: "#0071B5", shield: "backbonedotjs" },
  { name: "jQuery", color: "#0769AD", shield: "jquery" },
  { name: "Redux", color: "#764ABC", shield: "redux" },
  { name: "MobX", color: "#FF9955", shield: "mobx" },
  { name: "Zustand", color: "#000000", shield: "zustand" },
  { name: "Recoil", color: "#3578E5", shield: "recoil" },
  
  // Backend Frameworks
  { name: "Node.js", color: "#339933", shield: "nodedotjs" },
  { name: "Express", color: "#000000", shield: "express" },
  { name: "Django", color: "#092E20", shield: "django" },
  { name: "Flask", color: "#000000", shield: "flask" },
  { name: "FastAPI", color: "#009688", shield: "fastapi" },
  { name: "Spring", color: "#6DB33F", shield: "spring" },
  { name: "Spring Boot", color: "#6DB33F", shield: "springboot" },
  { name: "Laravel", color: "#FF2D20", shield: "laravel" },
  { name: "Ruby on Rails", color: "#CC0000", shield: "rubyonrails" },
  { name: "ASP.NET", color: "#512BD4", shield: "dotnet" },
  { name: "Nest.js", color: "#E0234E", shield: "nestjs" },
  { name: "Fastify", color: "#000000", shield: "fastify" },
  { name: "Koa", color: "#33333D", shield: "koa" },
  { name: "Hapi", color: "#F26C23", shield: "hapi" },
  { name: "Gin", color: "#00ADD8", shield: "gin" },
  { name: "Echo", color: "#00ADD8", shield: "echo" },
  { name: "Fiber", color: "#00ADD8", shield: "fiber" },
  { name: "Actix", color: "#000000", shield: "actix" },
  { name: "Rocket", color: "#D33847", shield: "rocket" },
  { name: "Phoenix", color: "#FD4F00", shield: "phoenixframework" },
  
  // Mobile Development
  { name: "React Native", color: "#61DAFB", shield: "react" },
  { name: "Flutter", color: "#02569B", shield: "flutter" },
  { name: "Ionic", color: "#3880FF", shield: "ionic" },
  { name: "Xamarin", color: "#3498DB", shield: "xamarin" },
  { name: "Cordova", color: "#E8E8E8", shield: "apachecordova" },
  { name: "SwiftUI", color: "#FA7343", shield: "swift" },
  { name: "Jetpack Compose", color: "#4285F4", shield: "jetpackcompose" },
  
  // Databases
  { name: "MySQL", color: "#4479A1", shield: "mysql" },
  { name: "PostgreSQL", color: "#4169E1", shield: "postgresql" },
  { name: "MongoDB", color: "#47A248", shield: "mongodb" },
  { name: "Redis", color: "#DC382D", shield: "redis" },
  { name: "SQLite", color: "#003B57", shield: "sqlite" },
  { name: "MariaDB", color: "#003545", shield: "mariadb" },
  { name: "Oracle", color: "#F80000", shield: "oracle" },
  { name: "Microsoft SQL Server", color: "#CC2927", shield: "microsoftsqlserver" },
  { name: "Cassandra", color: "#1287B1", shield: "apachecassandra" },
  { name: "DynamoDB", color: "#4053D6", shield: "amazondynamodb" },
  { name: "Firebase", color: "#FFCA28", shield: "firebase" },
  { name: "Supabase", color: "#3ECF8E", shield: "supabase" },
  { name: "CouchDB", color: "#E42528", shield: "couchdb" },
  { name: "Neo4j", color: "#008CC1", shield: "neo4j" },
  { name: "Elasticsearch", color: "#005571", shield: "elasticsearch" },
  { name: "InfluxDB", color: "#22ADF6", shield: "influxdb" },
  { name: "TimescaleDB", color: "#FDB515", shield: "timescale" },
  
  // Cloud & DevOps
  { name: "AWS", color: "#232F3E", shield: "amazonaws" },
  { name: "Azure", color: "#0078D4", shield: "microsoftazure" },
  { name: "Google Cloud", color: "#4285F4", shield: "googlecloud" },
  { name: "Docker", color: "#2496ED", shield: "docker" },
  { name: "Kubernetes", color: "#326CE5", shield: "kubernetes" },
  { name: "Terraform", color: "#7B42BC", shield: "terraform" },
  { name: "Ansible", color: "#EE0000", shield: "ansible" },
  { name: "Jenkins", color: "#D24939", shield: "jenkins" },
  { name: "GitHub Actions", color: "#2088FF", shield: "githubactions" },
  { name: "GitLab CI", color: "#FC6D26", shield: "gitlab" },
  { name: "CircleCI", color: "#343434", shield: "circleci" },
  { name: "Travis CI", color: "#3EAAAF", shield: "travisci" },
  { name: "Nginx", color: "#009639", shield: "nginx" },
  { name: "Apache", color: "#D22128", shield: "apache" },
  { name: "Vercel", color: "#000000", shield: "vercel" },
  { name: "Netlify", color: "#00C7B7", shield: "netlify" },
  { name: "Heroku", color: "#430098", shield: "heroku" },
  { name: "DigitalOcean", color: "#0080FF", shield: "digitalocean" },
  { name: "Railway", color: "#0B0D0E", shield: "railway" },
  { name: "Fly.io", color: "#7B3FF2", shield: "flydotio" },
  
  // CSS & Styling
  { name: "CSS3", color: "#1572B6", shield: "css3" },
  { name: "HTML5", color: "#E34F26", shield: "html5" },
  { name: "Sass", color: "#CC6699", shield: "sass" },
  { name: "Less", color: "#1D365D", shield: "less" },
  { name: "Tailwind CSS", color: "#06B6D4", shield: "tailwindcss" },
  { name: "Bootstrap", color: "#7952B3", shield: "bootstrap" },
  { name: "Material-UI", color: "#007FFF", shield: "mui" },
  { name: "Chakra UI", color: "#319795", shield: "chakraui" },
  { name: "Ant Design", color: "#0170FE", shield: "antdesign" },
  { name: "Styled Components", color: "#DB7093", shield: "styledcomponents" },
  { name: "Emotion", color: "#D36AC2", shield: "emotion" },
  { name: "PostCSS", color: "#DD3A0A", shield: "postcss" },
  
  // Testing
  { name: "Jest", color: "#C21325", shield: "jest" },
  { name: "Mocha", color: "#8D6748", shield: "mocha" },
  { name: "Cypress", color: "#17202C", shield: "cypress" },
  { name: "Playwright", color: "#2EAD33", shield: "playwright" },
  { name: "Selenium", color: "#43B02A", shield: "selenium" },
  { name: "Vitest", color: "#6E9F18", shield: "vitest" },
  { name: "Testing Library", color: "#E33332", shield: "testinglibrary" },
  { name: "Puppeteer", color: "#40B5A4", shield: "puppeteer" },
  { name: "JUnit", color: "#25A162", shield: "junit5" },
  { name: "PyTest", color: "#0A9EDC", shield: "pytest" },
  
  // Build Tools & Package Managers
  { name: "Webpack", color: "#8DD6F9", shield: "webpack" },
  { name: "Vite", color: "#646CFF", shield: "vite" },
  { name: "Rollup", color: "#EC4A3F", shield: "rollupdotjs" },
  { name: "Parcel", color: "#21374B", shield: "parcel" },
  { name: "esbuild", color: "#FFCF00", shield: "esbuild" },
  { name: "Turbopack", color: "#0D1117", shield: "turbopack" },
  { name: "npm", color: "#CB3837", shield: "npm" },
  { name: "Yarn", color: "#2C8EBB", shield: "yarn" },
  { name: "pnpm", color: "#F69220", shield: "pnpm" },
  { name: "Bun", color: "#000000", shield: "bun" },
  { name: "Maven", color: "#C71A36", shield: "apachemaven" },
  { name: "Gradle", color: "#02303A", shield: "gradle" },
  { name: "Cargo", color: "#000000", shield: "rust" },
  { name: "pip", color: "#3775A9", shield: "pypi" },
  { name: "Composer", color: "#885630", shield: "composer" },
  
  // Version Control & Collaboration
  { name: "Git", color: "#F05032", shield: "git" },
  { name: "GitHub", color: "#181717", shield: "github" },
  { name: "GitLab", color: "#FC6D26", shield: "gitlab" },
  { name: "Bitbucket", color: "#0052CC", shield: "bitbucket" },
  { name: "Mercurial", color: "#999999", shield: "mercurial" },
  { name: "SVN", color: "#809CC9", shield: "subversion" },
  
  // IDEs & Editors
  { name: "VS Code", color: "#007ACC", shield: "visualstudiocode" },
  { name: "IntelliJ IDEA", color: "#000000", shield: "intellijidea" },
  { name: "PyCharm", color: "#000000", shield: "pycharm" },
  { name: "WebStorm", color: "#000000", shield: "webstorm" },
  { name: "Android Studio", color: "#3DDC84", shield: "androidstudio" },
  { name: "Xcode", color: "#147EFB", shield: "xcode" },
  { name: "Vim", color: "#019733", shield: "vim" },
  { name: "Neovim", color: "#57A143", shield: "neovim" },
  { name: "Emacs", color: "#7F5AB6", shield: "gnuemacs" },
  { name: "Sublime Text", color: "#FF9800", shield: "sublimetext" },
  { name: "Atom", color: "#66595C", shield: "atom" },
  
  // Other Tools & Technologies
  { name: "GraphQL", color: "#E10098", shield: "graphql" },
  { name: "REST API", color: "#009688", shield: "fastapi" },
  { name: "WebSockets", color: "#010101", shield: "socketdotio" },
  { name: "Socket.io", color: "#010101", shield: "socketdotio" },
  { name: "gRPC", color: "#244C5A", shield: "grpc" },
  { name: "RabbitMQ", color: "#FF6600", shield: "rabbitmq" },
  { name: "Kafka", color: "#231F20", shield: "apachekafka" },
  { name: "Prisma", color: "#2D3748", shield: "prisma" },
  { name: "Sequelize", color: "#52B0E7", shield: "sequelize" },
  { name: "TypeORM", color: "#FE0902", shield: "typeorm" },
  { name: "Mongoose", color: "#880000", shield: "mongoose" },
  { name: "Drizzle", color: "#C5F74F", shield: "drizzle" },
  { name: "tRPC", color: "#2596BE", shield: "trpc" },
  { name: "Webpack", color: "#8DD6F9", shield: "webpack" },
  { name: "Babel", color: "#F9DC3E", shield: "babel" },
  { name: "ESLint", color: "#4B32C3", shield: "eslint" },
  { name: "Prettier", color: "#F7B93E", shield: "prettier" },
  { name: "Storybook", color: "#FF4785", shield: "storybook" },
  { name: "Figma", color: "#F24E1E", shield: "figma" },
  { name: "Adobe XD", color: "#FF61F6", shield: "adobexd" },
  { name: "Sketch", color: "#F7B500", shield: "sketch" },
  { name: "Postman", color: "#FF6C37", shield: "postman" },
  { name: "Insomnia", color: "#4000BF", shield: "insomnia" },
  { name: "Swagger", color: "#85EA2D", shield: "swagger" },
  { name: "Jira", color: "#0052CC", shield: "jira" },
  { name: "Confluence", color: "#172B4D", shield: "confluence" },
  { name: "Notion", color: "#000000", shield: "notion" },
  { name: "Slack", color: "#4A154B", shield: "slack" },
  { name: "Discord", color: "#5865F2", shield: "discord" },
  { name: "Linux", color: "#FCC624", shield: "linux" },
  { name: "Ubuntu", color: "#E95420", shield: "ubuntu" },
  { name: "Debian", color: "#A81D33", shield: "debian" },
  { name: "macOS", color: "#000000", shield: "macos" },
  { name: "Windows", color: "#0078D6", shield: "windows" },
];

export const getLanguageByName = (name: string): Language | undefined => {
  return languagesData.find(
    (lang) => lang.name.toLowerCase() === name.toLowerCase()
  );
};

export const getLanguagesByCategory = (category: string): Language[] => {
  const categories: Record<string, string[]> = {
    frontend: ["React", "Vue.js", "Angular", "Svelte", "Next.js", "Nuxt.js"],
    backend: ["Node.js", "Django", "Flask", "FastAPI", "Spring", "Laravel"],
    mobile: ["React Native", "Flutter", "Ionic", "SwiftUI", "Jetpack Compose"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
    devops: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"],
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
  };

  const categoryLanguages = categories[category.toLowerCase()] || [];
  return languagesData.filter((lang) =>
    categoryLanguages.includes(lang.name)
  );
};

export const searchLanguages = (query: string): Language[] => {
  const lowerQuery = query.toLowerCase();
  return languagesData.filter((lang) =>
    lang.name.toLowerCase().includes(lowerQuery)
  );
};
