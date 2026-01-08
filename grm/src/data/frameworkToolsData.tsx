export interface FrameworkTool {
  name: string;
  category: string;
  color: string;
  icon?: string;
  shield?: string;
  description?: string;
}

export const frameworkToolsData: FrameworkTool[] = [
  // Frontend Frameworks
  { name: "React", category: "frontend", color: "#61DAFB", shield: "react", description: "JavaScript library for building user interfaces" },
  { name: "Vue.js", category: "frontend", color: "#4FC08D", shield: "vuedotjs", description: "Progressive JavaScript framework" },
  { name: "Angular", category: "frontend", color: "#DD0031", shield: "angular", description: "Platform for building web applications" },
  { name: "Svelte", category: "frontend", color: "#FF3E00", shield: "svelte", description: "Cybernetically enhanced web apps" },
  { name: "Next.js", category: "frontend", color: "#000000", shield: "nextdotjs", description: "React framework for production" },
  { name: "Nuxt.js", category: "frontend", color: "#00DC82", shield: "nuxtdotjs", description: "Vue.js framework" },
  { name: "Gatsby", category: "frontend", color: "#663399", shield: "gatsby", description: "React-based static site generator" },
  { name: "Astro", category: "frontend", color: "#FF5D01", shield: "astro", description: "Modern static site builder" },
  { name: "Remix", category: "frontend", color: "#000000", shield: "remix", description: "Full stack web framework" },
  { name: "Solid.js", category: "frontend", color: "#2C4F7C", shield: "solid", description: "Declarative JavaScript library" },
  { name: "Preact", category: "frontend", color: "#673AB8", shield: "preact", description: "Fast 3kB alternative to React" },
  { name: "Alpine.js", category: "frontend", color: "#8BC0D0", shield: "alpinedotjs", description: "Lightweight JavaScript framework" },
  { name: "Lit", category: "frontend", color: "#324FFF", shield: "lit", description: "Simple library for building web components" },
  { name: "Qwik", category: "frontend", color: "#AC7EF4", shield: "qwik", description: "Resumable framework" },
  { name: "SolidStart", category: "frontend", color: "#2C4F7C", shield: "solid", description: "Meta-framework for Solid" },

  // Backend Frameworks
  { name: "Express.js", category: "backend", color: "#000000", shield: "express", description: "Fast Node.js web framework" },
  { name: "Nest.js", category: "backend", color: "#E0234E", shield: "nestjs", description: "Progressive Node.js framework" },
  { name: "Fastify", category: "backend", color: "#000000", shield: "fastify", description: "Fast and low overhead web framework" },
  { name: "Koa", category: "backend", color: "#33333D", shield: "koa", description: "Next generation web framework" },
  { name: "Hapi", category: "backend", color: "#F26C23", shield: "hapi", description: "Rich framework for building applications" },
  { name: "Adonis.js", category: "backend", color: "#220052", shield: "adonisjs", description: "Node.js MVC framework" },
  { name: "Sails.js", category: "backend", color: "#14ACC2", shield: "sails", description: "MVC framework for Node.js" },
  { name: "Django", category: "backend", color: "#092E20", shield: "django", description: "High-level Python web framework" },
  { name: "Flask", category: "backend", color: "#000000", shield: "flask", description: "Lightweight Python web framework" },
  { name: "FastAPI", category: "backend", color: "#009688", shield: "fastapi", description: "Modern Python web framework" },
  { name: "Pyramid", category: "backend", color: "#E41C2E", shield: "pyramid", description: "Python web framework" },
  { name: "Tornado", category: "backend", color: "#00AFF0", shield: "tornado", description: "Python web framework and networking library" },
  { name: "Spring Boot", category: "backend", color: "#6DB33F", shield: "springboot", description: "Java-based framework" },
  { name: "Quarkus", category: "backend", color: "#4695EB", shield: "quarkus", description: "Kubernetes Native Java framework" },
  { name: "Micronaut", category: "backend", color: "#01B0E8", shield: "micronaut", description: "Modern JVM framework" },
  { name: "Laravel", category: "backend", color: "#FF2D20", shield: "laravel", description: "PHP web framework" },
  { name: "Symfony", category: "backend", color: "#000000", shield: "symfony", description: "PHP framework" },
  { name: "CodeIgniter", category: "backend", color: "#EE4623", shield: "codeigniter", description: "PHP framework" },
  { name: "Ruby on Rails", category: "backend", color: "#CC0000", shield: "rubyonrails", description: "Server-side web framework" },
  { name: "Sinatra", category: "backend", color: "#000000", shield: "sinatra", description: "Ruby web framework" },
  { name: "ASP.NET Core", category: "backend", color: "#512BD4", shield: "dotnet", description: ".NET web framework" },
  { name: "Gin", category: "backend", color: "#00ADD8", shield: "gin", description: "Go web framework" },
  { name: "Echo", category: "backend", color: "#00ADD8", shield: "echo", description: "High performance Go framework" },
  { name: "Fiber", category: "backend", color: "#00ADD8", shield: "gofiber", description: "Express inspired web framework" },
  { name: "Actix", category: "backend", color: "#000000", shield: "actix", description: "Rust web framework" },
  { name: "Rocket", category: "backend", color: "#D33847", shield: "rocket", description: "Rust web framework" },
  { name: "Phoenix", category: "backend", color: "#FD4F00", shield: "phoenixframework", description: "Elixir web framework" },

  // Mobile Frameworks
  { name: "React Native", category: "mobile", color: "#61DAFB", shield: "react", description: "Build native apps using React" },
  { name: "Flutter", category: "mobile", color: "#02569B", shield: "flutter", description: "UI toolkit for mobile, web, and desktop" },
  { name: "Ionic", category: "mobile", color: "#3880FF", shield: "ionic", description: "Mobile app development framework" },
  { name: "Xamarin", category: "mobile", color: "#3498DB", shield: "xamarin", description: "Cross-platform app development" },
  { name: "Cordova", category: "mobile", color: "#E8E8E8", shield: "apachecordova", description: "Mobile application development framework" },
  { name: "Capacitor", category: "mobile", color: "#119EFF", shield: "capacitor", description: "Cross-platform native runtime" },
  { name: "NativeScript", category: "mobile", color: "#3655FF", shield: "nativescript", description: "Open source framework for building apps" },
  { name: "Expo", category: "mobile", color: "#000020", shield: "expo", description: "Framework for React Native" },
  { name: "Tauri", category: "mobile", color: "#FFC131", shield: "tauri", description: "Build smaller, faster apps" },

  // CSS Frameworks
  { name: "Tailwind CSS", category: "css", color: "#06B6D4", shield: "tailwindcss", description: "Utility-first CSS framework" },
  { name: "Bootstrap", category: "css", color: "#7952B3", shield: "bootstrap", description: "Popular CSS framework" },
  { name: "Bulma", category: "css", color: "#00D1B2", shield: "bulma", description: "Modern CSS framework" },
  { name: "Foundation", category: "css", color: "#0B4D8C", shield: "foundation", description: "Responsive front-end framework" },
  { name: "Materialize", category: "css", color: "#EE6E73", shield: "materializecss", description: "Material Design framework" },
  { name: "Semantic UI", category: "css", color: "#35BDB2", shield: "semanticuireact", description: "Development framework" },
  { name: "UIKit", category: "css", color: "#2396F3", shield: "uikit", description: "Lightweight modular front-end framework" },
  { name: "PureCSS", category: "css", color: "#0084FF", shield: "purecss", description: "Set of small CSS modules" },
  { name: "Skeleton", category: "css", color: "#000000", shield: "skeleton", description: "Dead simple responsive boilerplate" },

  // UI Component Libraries
  { name: "Material-UI", category: "ui-library", color: "#007FFF", shield: "mui", description: "React components library" },
  { name: "Ant Design", category: "ui-library", color: "#0170FE", shield: "antdesign", description: "Design system for enterprise" },
  { name: "Chakra UI", category: "ui-library", color: "#319795", shield: "chakraui", description: "Simple modular component library" },
  { name: "shadcn/ui", category: "ui-library", color: "#000000", shield: "shadcnui", description: "Re-usable components" },
  { name: "Mantine", category: "ui-library", color: "#339AF0", shield: "mantine", description: "React components library" },
  { name: "NextUI", category: "ui-library", color: "#000000", shield: "nextui", description: "Beautiful React UI library" },
  { name: "Radix UI", category: "ui-library", color: "#161618", shield: "radixui", description: "Unstyled accessible components" },
  { name: "Headless UI", category: "ui-library", color: "#66E3FF", shield: "headlessui", description: "Unstyled accessible components" },
  { name: "DaisyUI", category: "ui-library", color: "#5A0EF8", shield: "daisyui", description: "Tailwind CSS component library" },
  { name: "PrimeReact", category: "ui-library", color: "#007ACC", shield: "primereact", description: "Rich UI component suite" },
  { name: "Blueprint", category: "ui-library", color: "#137CBD", shield: "blueprint", description: "React-based UI toolkit" },
  { name: "Vuetify", category: "ui-library", color: "#1867C0", shield: "vuetify", description: "Vue material component framework" },
  { name: "Quasar", category: "ui-library", color: "#1976D2", shield: "quasar", description: "Vue.js framework" },
  { name: "Element Plus", category: "ui-library", color: "#409EFF", shield: "elementplus", description: "Vue 3 component library" },
  { name: "PrimeVue", category: "ui-library", color: "#41B883", shield: "primevue", description: "Vue UI component library" },

  // Testing Frameworks
  { name: "Jest", category: "testing", color: "#C21325", shield: "jest", description: "JavaScript testing framework" },
  { name: "Vitest", category: "testing", color: "#6E9F18", shield: "vitest", description: "Blazing fast unit test framework" },
  { name: "Mocha", category: "testing", color: "#8D6748", shield: "mocha", description: "JavaScript test framework" },
  { name: "Jasmine", category: "testing", color: "#8A4182", shield: "jasmine", description: "Behavior-driven testing" },
  { name: "Cypress", category: "testing", color: "#17202C", shield: "cypress", description: "End-to-end testing" },
  { name: "Playwright", category: "testing", color: "#2EAD33", shield: "playwright", description: "Web testing and automation" },
  { name: "Selenium", category: "testing", color: "#43B02A", shield: "selenium", description: "Browser automation" },
  { name: "Puppeteer", category: "testing", color: "#40B5A4", shield: "puppeteer", description: "Node library for Chrome" },
  { name: "Testing Library", category: "testing", color: "#E33332", shield: "testinglibrary", description: "Simple testing utilities" },
  { name: "JUnit", category: "testing", color: "#25A162", shield: "junit5", description: "Java testing framework" },
  { name: "PyTest", category: "testing", color: "#0A9EDC", shield: "pytest", description: "Python testing framework" },
  { name: "RSpec", category: "testing", color: "#E71D32", shield: "rspec", description: "Ruby testing tool" },
  { name: "PHPUnit", category: "testing", color: "#3C9CD7", shield: "phpunit", description: "PHP testing framework" },
  { name: "Karma", category: "testing", color: "#429B42", shield: "karma", description: "Test runner" },
  { name: "Ava", category: "testing", color: "#8B6CFF", shield: "ava", description: "Node.js test runner" },
  { name: "TestCafe", category: "testing", color: "#36B6E5", shield: "testcafe", description: "Node.js tool for testing" },

  // Build Tools
  { name: "Webpack", category: "build-tool", color: "#8DD6F9", shield: "webpack", description: "Module bundler" },
  { name: "Vite", category: "build-tool", color: "#646CFF", shield: "vite", description: "Next generation frontend tooling" },
  { name: "Rollup", category: "build-tool", color: "#EC4A3F", shield: "rollupdotjs", description: "Module bundler" },
  { name: "Parcel", category: "build-tool", color: "#21374B", shield: "parcel", description: "Zero config build tool" },
  { name: "esbuild", category: "build-tool", color: "#FFCF00", shield: "esbuild", description: "Extremely fast bundler" },
  { name: "Turbopack", category: "build-tool", color: "#0D1117", shield: "turbo", description: "Incremental bundler" },
  { name: "Gulp", category: "build-tool", color: "#CF4647", shield: "gulp", description: "Toolkit for automating tasks" },
  { name: "Grunt", category: "build-tool", color: "#FBA919", shield: "grunt", description: "JavaScript task runner" },
  { name: "Babel", category: "build-tool", color: "#F9DC3E", shield: "babel", description: "JavaScript compiler" },
  { name: "SWC", category: "build-tool", color: "#F9DC3E", shield: "swc", description: "Super-fast compiler" },
  { name: "Rspack", category: "build-tool", color: "#FE7D37", shield: "rspack", description: "Fast Rust-based bundler" },
  { name: "Nx", category: "build-tool", color: "#143055", shield: "nx", description: "Smart monorepos" },
  { name: "Turborepo", category: "build-tool", color: "#EF4444", shield: "turborepo", description: "High-performance build system" },
  { name: "Lerna", category: "build-tool", color: "#9333EA", shield: "lerna", description: "Tool for managing monorepos" },

  // Package Managers
  { name: "npm", category: "package-manager", color: "#CB3837", shield: "npm", description: "Node package manager" },
  { name: "Yarn", category: "package-manager", color: "#2C8EBB", shield: "yarn", description: "Fast package manager" },
  { name: "pnpm", category: "package-manager", color: "#F69220", shield: "pnpm", description: "Fast, disk space efficient" },
  { name: "Bun", category: "package-manager", color: "#000000", shield: "bun", description: "All-in-one toolkit" },
  { name: "pip", category: "package-manager", color: "#3775A9", shield: "pypi", description: "Python package installer" },
  { name: "Composer", category: "package-manager", color: "#885630", shield: "composer", description: "PHP dependency manager" },
  { name: "Maven", category: "package-manager", color: "#C71A36", shield: "apachemaven", description: "Java build tool" },
  { name: "Gradle", category: "package-manager", color: "#02303A", shield: "gradle", description: "Build automation tool" },
  { name: "Cargo", category: "package-manager", color: "#000000", shield: "rust", description: "Rust package manager" },
  { name: "NuGet", category: "package-manager", color: "#004880", shield: "nuget", description: ".NET package manager" },
  { name: "RubyGems", category: "package-manager", color: "#CC342D", shield: "rubygems", description: "Ruby package manager" },

  // State Management
  { name: "Redux", category: "state-management", color: "#764ABC", shield: "redux", description: "Predictable state container" },
  { name: "MobX", category: "state-management", color: "#FF9955", shield: "mobx", description: "Simple scalable state management" },
  { name: "Zustand", category: "state-management", color: "#000000", shield: "zustand", description: "Small fast state-management" },
  { name: "Recoil", category: "state-management", color: "#3578E5", shield: "recoil", description: "State management library" },
  { name: "Jotai", category: "state-management", color: "#000000", shield: "jotai", description: "Primitive and flexible state management" },
  { name: "Valtio", category: "state-management", color: "#000000", shield: "valtio", description: "Proxy-state made simple" },
  { name: "XState", category: "state-management", color: "#2C3E50", shield: "xstate", description: "State machines and statecharts" },
  { name: "Vuex", category: "state-management", color: "#41B883", shield: "vuex", description: "State management for Vue" },
  { name: "Pinia", category: "state-management", color: "#FFD859", shield: "pinia", description: "Vue store" },
  { name: "NgRx", category: "state-management", color: "#B7178C", shield: "ngrx", description: "Reactive state for Angular" },

  // DevOps & CI/CD
  { name: "Docker", category: "devops", color: "#2496ED", shield: "docker", description: "Containerization platform" },
  { name: "Kubernetes", category: "devops", color: "#326CE5", shield: "kubernetes", description: "Container orchestration" },
  { name: "Jenkins", category: "devops", color: "#D24939", shield: "jenkins", description: "Automation server" },
  { name: "GitHub Actions", category: "devops", color: "#2088FF", shield: "githubactions", description: "CI/CD platform" },
  { name: "GitLab CI", category: "devops", color: "#FC6D26", shield: "gitlab", description: "CI/CD tool" },
  { name: "CircleCI", category: "devops", color: "#343434", shield: "circleci", description: "Continuous integration" },
  { name: "Travis CI", category: "devops", color: "#3EAAAF", shield: "travisci", description: "CI service" },
  { name: "Terraform", category: "devops", color: "#7B42BC", shield: "terraform", description: "Infrastructure as code" },
  { name: "Ansible", category: "devops", color: "#EE0000", shield: "ansible", description: "IT automation" },
  { name: "Pulumi", category: "devops", color: "#8A3391", shield: "pulumi", description: "Infrastructure as code" },
  { name: "Vagrant", category: "devops", color: "#1563FF", shield: "vagrant", description: "Development environments" },
  { name: "Chef", category: "devops", color: "#F09820", shield: "chef", description: "Configuration management" },
  { name: "Puppet", category: "devops", color: "#FFAE1A", shield: "puppet", description: "Infrastructure automation" },
  { name: "ArgoCD", category: "devops", color: "#EF7B4D", shield: "argo", description: "GitOps continuous delivery" },
  { name: "Flux", category: "devops", color: "#5468FF", shield: "flux", description: "GitOps for Kubernetes" },

  // API & Backend Tools
  { name: "GraphQL", category: "api", color: "#E10098", shield: "graphql", description: "Query language for APIs" },
  { name: "Apollo", category: "api", color: "#311C87", shield: "apollographql", description: "GraphQL implementation" },
  { name: "Prisma", category: "api", color: "#2D3748", shield: "prisma", description: "Next-gen ORM" },
  { name: "Sequelize", category: "api", color: "#52B0E7", shield: "sequelize", description: "ORM for Node.js" },
  { name: "TypeORM", category: "api", color: "#FE0902", shield: "typeorm", description: "ORM for TypeScript" },
  { name: "Mongoose", category: "api", color: "#880000", shield: "mongoose", description: "MongoDB object modeling" },
  { name: "Drizzle", category: "api", color: "#C5F74F", shield: "drizzle", description: "TypeScript ORM" },
  { name: "tRPC", category: "api", color: "#2596BE", shield: "trpc", description: "End-to-end typesafe APIs" },
  { name: "Socket.io", category: "api", color: "#010101", shield: "socketdotio", description: "Real-time communication" },
  { name: "gRPC", category: "api", color: "#244C5A", shield: "grpc", description: "High performance RPC framework" },
  { name: "Swagger", category: "api", color: "#85EA2D", shield: "swagger", description: "API development tools" },
  { name: "Postman", category: "api", color: "#FF6C37", shield: "postman", description: "API platform" },
  { name: "Insomnia", category: "api", color: "#4000BF", shield: "insomnia", description: "API client" },
  { name: "REST", category: "api", color: "#009688", shield: "rest", description: "Architectural style for APIs" },

  // Code Quality Tools
  { name: "ESLint", category: "code-quality", color: "#4B32C3", shield: "eslint", description: "Linting utility" },
  { name: "Prettier", category: "code-quality", color: "#F7B93E", shield: "prettier", description: "Code formatter" },
  { name: "Stylelint", category: "code-quality", color: "#263238", shield: "stylelint", description: "CSS linter" },
  { name: "TSLint", category: "code-quality", color: "#3178C6", shield: "tslint", description: "TypeScript linter" },
  { name: "Biome", category: "code-quality", color: "#60A5FA", shield: "biome", description: "Toolchain for web projects" },
  { name: "SonarQube", category: "code-quality", color: "#4E9BCD", shield: "sonarqube", description: "Code quality platform" },
  { name: "Husky", category: "code-quality", color: "#000000", shield: "husky", description: "Git hooks tool" },
  { name: "Commitlint", category: "code-quality", color: "#000000", shield: "commitlint", description: "Lint commit messages" },
  { name: "Lint-staged", category: "code-quality", color: "#000000", shield: "lintstaged", description: "Run linters on git staged files" },

  // Design & Prototyping Tools
  { name: "Figma", category: "design", color: "#F24E1E", shield: "figma", description: "Collaborative design tool" },
  { name: "Adobe XD", category: "design", color: "#FF61F6", shield: "adobexd", description: "UI/UX design tool" },
  { name: "Sketch", category: "design", color: "#F7B500", shield: "sketch", description: "Digital design platform" },
  { name: "InVision", category: "design", color: "#FF3366", shield: "invision", description: "Digital product design" },
  { name: "Framer", category: "design", color: "#0055FF", shield: "framer", description: "Interactive design tool" },
  { name: "Zeplin", category: "design", color: "#FDBD39", shield: "zeplin", description: "Design handoff tool" },
  { name: "Canva", category: "design", color: "#00C4CC", shield: "canva", description: "Graphic design platform" },
  { name: "Miro", category: "design", color: "#050038", shield: "miro", description: "Online whiteboard" },
  { name: "FigJam", category: "design", color: "#F24E1E", shield: "figma", description: "Collaborative brainstorming" },

  // Documentation Tools
  { name: "Storybook", category: "documentation", color: "#FF4785", shield: "storybook", description: "UI component explorer" },
  { name: "Docusaurus", category: "documentation", color: "#3ECC5F", shield: "docusaurus", description: "Documentation website generator" },
  { name: "VitePress", category: "documentation", color: "#646CFF", shield: "vitepress", description: "Static site generator" },
  { name: "VuePress", category: "documentation", color: "#4FC08D", shield: "vuepress", description: "Vue-powered static site generator" },
  { name: "GitBook", category: "documentation", color: "#3884FF", shield: "gitbook", description: "Documentation platform" },
  { name: "Sphinx", category: "documentation", color: "#000000", shield: "sphinx", description: "Documentation generator" },
  { name: "MkDocs", category: "documentation", color: "#526CFE", shield: "mkdocs", description: "Project documentation" },
  { name: "Read the Docs", category: "documentation", color: "#8CA1AF", shield: "readthedocs", description: "Documentation hosting" },
  { name: "JSDoc", category: "documentation", color: "#F7DF1E", shield: "jsdoc", description: "API documentation generator" },
  { name: "Typedoc", category: "documentation", color: "#3178C6", shield: "typedoc", description: "TypeScript documentation" },

  // Monitoring & Analytics
  { name: "Sentry", category: "monitoring", color: "#362D59", shield: "sentry", description: "Error tracking" },
  { name: "New Relic", category: "monitoring", color: "#008C99", shield: "newrelic", description: "Observability platform" },
  { name: "Datadog", category: "monitoring", color: "#632CA6", shield: "datadog", description: "Monitoring service" },
  { name: "Prometheus", category: "monitoring", color: "#E6522C", shield: "prometheus", description: "Monitoring system" },
  { name: "Grafana", category: "monitoring", color: "#F46800", shield: "grafana", description: "Analytics platform" },
  { name: "LogRocket", category: "monitoring", color: "#764ABC", shield: "logrocket", description: "Session replay" },
  { name: "Google Analytics", category: "monitoring", color: "#E37400", shield: "googleanalytics", description: "Web analytics" },
  { name: "Mixpanel", category: "monitoring", color: "#7856FF", shield: "mixpanel", description: "Product analytics" },
  { name: "Amplitude", category: "monitoring", color: "#0069FF", shield: "amplitude", description: "Digital analytics" },
  { name: "Plausible", category: "monitoring", color: "#5850EC", shield: "plausible", description: "Privacy-friendly analytics" },

  // Collaboration Tools
  { name: "Slack", category: "collaboration", color: "#4A154B", shield: "slack", description: "Team communication" },
  { name: "Discord", category: "collaboration", color: "#5865F2", shield: "discord", description: "Communication platform" },
  { name: "Microsoft Teams", category: "collaboration", color: "#6264A7", shield: "microsoftteams", description: "Unified communication" },
  { name: "Zoom", category: "collaboration", color: "#2D8CFF", shield: "zoom", description: "Video conferencing" },
  { name: "Notion", category: "collaboration", color: "#000000", shield: "notion", description: "Workspace for notes" },
  { name: "Confluence", category: "collaboration", color: "#172B4D", shield: "confluence", description: "Team workspace" },
  { name: "Jira", category: "collaboration", color: "#0052CC", shield: "jira", description: "Project management" },
  { name: "Trello", category: "collaboration", color: "#0052CC", shield: "trello", description: "Project boards" },
  { name: "Asana", category: "collaboration", color: "#F06A6A", shield: "asana", description: "Work management" },
  { name: "Linear", category: "collaboration", color: "#5E6AD2", shield: "linear", description: "Issue tracking" },
  { name: "Monday.com", category: "collaboration", color: "#FF3D57", shield: "monday", description: "Work management" },
  { name: "ClickUp", category: "collaboration", color: "#7B68EE", shield: "clickup", description: "Productivity platform" },
];

export const getFrameworkToolsByCategory = (category: string): FrameworkTool[] => {
  return frameworkToolsData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFrameworkToolByName = (name: string): FrameworkTool | undefined => {
  return frameworkToolsData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
};

export const searchFrameworkTools = (query: string): FrameworkTool[] => {
  const lowerQuery = query.toLowerCase();
  return frameworkToolsData.filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery)
  );
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(frameworkToolsData.map((item) => item.category)));
};

export const getPopularTools = (limit: number = 20): FrameworkTool[] => {
  // Returns the first N tools which are typically the most popular ones
  return frameworkToolsData.slice(0, limit);
};
