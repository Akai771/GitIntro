import { Copy, Download } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

export default function HomeEditorPreview() {
  return (
    <div className="relative mt-20 w-full max-w-6xl rounded-2xl border border-border/40 bg-background/90 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/50 ring-1 ring-white/5 overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 hover-lift group/preview">
      <ShineBorder
        borderWidth={2}
        duration={10}
        shineColor={["oklch(0.869 0.088 60.682)", "oklch(0.869 0.088 60.682 / 0.5)", "oklch(0.869 0.088 60.682)"]}
        className="opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500"
      />

      {/* Mock Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-muted/20">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-2">
            <div className="w-1.5 md:w-3.5 h-1.5 md:h-3.5 rounded-full bg-[#ff5f57] shadow-sm hover:scale-110 transition-transform cursor-pointer" />
            <div className="w-1.5 md:w-3.5 h-1.5 md:h-3.5 rounded-full bg-[#febc2e] shadow-sm hover:scale-110 transition-transform cursor-pointer" />
            <div className="w-1.5 md:w-3.5 h-1.5 md:h-3.5 rounded-full bg-[#28c840] shadow-sm hover:scale-110 transition-transform cursor-pointer" />
          </div>
          <div className="h-5 w-px bg-border/50" />
          <span className="text-xs md:text-sm text-foreground/70 font-light text-left md:font-medium">minimal template</span>
        </div>
        <div className="flex gap-3">
          <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-muted/60 text-muted-foreground border border-border/30 flex items-center gap-1.5 hover:bg-muted hover:scale-105 transition-all cursor-pointer">
            <Copy className="w-3 h-3" /> Copy
          </div>
          <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground flex items-center gap-1.5 hover:bg-primary/90 hover:scale-105 transition-all cursor-pointer">
            <Download className="w-3 h-3" /> Download
          </div>
        </div>
      </div>

      {/* Split View Mock */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Form Inputs */}
        <div className="p-8 lg:p-10 space-y-6 bg-background border-r border-border/30">
          {/* Section Header */}
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-700">
            <div className="w-1 h-5 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-foreground tracking-tight">
              Profile Information
            </span>
          </div>

          <div className="space-y-5">
            <div className="space-y-2 flex-col animate-in fade-in slide-in-from-left-4 duration-500 delay-[800ms]">
              <label className="text-xs flex items-start font-medium text-muted-foreground">
                Your Name
              </label>
              <div className="h-11 rounded-lg border border-border/60 bg-muted/10 px-4 flex items-center transition-all hover:border-primary/50 hover:bg-muted/20 group/input">
                <span className="text-sm text-foreground">John Doe</span>
              </div>
            </div>
            <div className="space-y-2 flex-col animate-in fade-in slide-in-from-left-4 duration-500 delay-[900ms]">
              <label className="text-xs flex items-start font-medium text-muted-foreground">
                Title / Role
              </label>
              <div className="h-11 rounded-lg border border-border/60 bg-muted/10 px-4 flex items-center transition-all hover:border-primary/50 hover:bg-muted/20">
                <span className="text-left text-sm text-foreground truncate">
                  Full Stack Developer | Open Source Enthusiast
                </span>
              </div>
            </div>
            <div className="space-y-2 flex-col animate-in fade-in slide-in-from-left-4 duration-500 delay-1000">
              <label className="text-xs flex items-start font-medium text-muted-foreground">
                About You
              </label>
              <div className="min-h-25 rounded-lg border border-border/60 bg-muted/10 px-4 py-3 transition-all hover:border-primary/50 hover:bg-muted/20">
                <span className=" text-foreground leading-relaxed">
                  Passionate about crafting elegant solutions and building
                  products that make a difference. Open source enthusiast.
                </span>
              </div>
            </div>
            <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-[1100ms]">
              <label className="text-xs font-medium text-muted-foreground">
                Tech Stack
              </label>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:scale-105 hover:bg-blue-500/20 transition-all cursor-pointer">
                  React
                </div>
                <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-500 border border-sky-500/20 hover:scale-105 hover:bg-sky-500/20 transition-all cursor-pointer">
                  TypeScript
                </div>
                <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 hover:scale-105 hover:bg-green-500/20 transition-all cursor-pointer">
                  Node.js
                </div>
                <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500 border border-purple-500/20 hover:scale-105 hover:bg-purple-500/20 transition-all cursor-pointer">
                  GraphQL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Markdown Preview (GitHub Style) */}
        <div className="p-8 lg:p-10 bg-[#0d1117] text-[#e6edf3] overflow-hidden">
          <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-right-4 duration-500 delay-700">
            <div className="w-1 h-5 bg-green-500 rounded-full" />
            <span className="text-sm font-semibold text-[#e6edf3] tracking-tight">
              Live Preview
            </span>
            <div className="ml-auto px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20 animate-pulse">
              LIVE
            </div>
          </div>

          {/* GitHub README Content */}
          <div className="space-y-6 font-sans">
            {/* Title */}
            <h1 className="text-2xl font-semibold text-[#e6edf3] animate-in fade-in slide-in-from-right-4 duration-500 delay-[800ms]">
              Hi there, I'm John Doe{" "}
              <span className="inline-block animate-wiggle hover:animate-wiggle">
                👋
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#8b949e] flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-500 delay-[900ms]">
              <span className="text-yellow-500">⚡</span> Full Stack Developer |
              Open Source Enthusiast
            </p>

            {/* About Section */}
            <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-500 delay-1000">
              <h3 className="text-base font-semibold text-[#e6edf3] flex items-center gap-2">
                <span>📝</span> About Me
              </h3>
              <p className="text-left text-sm text-[#8b949e] leading-relaxed">
                Passionate about crafting elegant solutions and building
                products that make a difference.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-500 delay-[1100ms]">
              <h3 className="text-base font-semibold text-[#e6edf3] flex items-center gap-2">
                <span>🛠</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <img
                  src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"
                  alt="React"
                  className="h-5 hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"
                  alt="TypeScript"
                  className="h-5 hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"
                  alt="Node.js"
                  className="h-5 hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
                  alt="Python"
                  className="h-5 hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* GitHub Stats Mock */}
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-500 delay-[1200ms]">
              <h3 className="text-base font-semibold text-[#e6edf3] flex items-center gap-2">
                <span>📊</span> GitHub Stats
              </h3>
              <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-4 hover:border-[#58a6ff]/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#8b949e]">
                    johndoe's GitHub Stats
                  </span>
                  <span className="text-[10px] text-[#8b949e]">⭐ 1.2k</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[#8b949e]">Commits</span>
                    <span className="ml-auto text-[#e6edf3] font-medium">
                      847
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[#8b949e]">PRs</span>
                    <span className="ml-auto text-[#e6edf3] font-medium">
                      156
                    </span>
                  </div>
                </div>
                {/* Mini contribution graph */}
                <div className="mt-3 flex gap-0.5">
                  <div className="w-2 h-2 rounded-sm bg-[#0e4429] animate-contribution"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#006d32] animate-contribution stagger-1"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#161b22]"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#26a641] animate-contribution stagger-2"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#39d353] animate-contribution stagger-3"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#006d32] animate-contribution stagger-4"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#0e4429] animate-contribution stagger-5"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#161b22]"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#26a641] animate-contribution stagger-1"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#39d353] animate-contribution stagger-2"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#006d32] animate-contribution stagger-3"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#0e4429] animate-contribution stagger-4"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#26a641] animate-contribution stagger-5"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#161b22]"></div>
                  <div className="w-2 h-2 rounded-sm bg-[#39d353] animate-contribution stagger-6"></div>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-500 delay-[1300ms]">
              <h3 className="text-base font-semibold text-[#e6edf3] flex items-center gap-2">
                <span>🌐</span> Connect with me
              </h3>
              <div className="flex gap-2">
                <div className="px-2 py-1 rounded text-xs bg-[#161b22] border border-[#30363d] text-[#58a6ff] hover:bg-[#1f2937] hover:border-[#58a6ff]/50 transition-all cursor-pointer">
                  GitHub
                </div>
                <div className="px-2 py-1 rounded text-xs bg-[#161b22] border border-[#30363d] text-[#58a6ff] hover:bg-[#1f2937] hover:border-[#58a6ff]/50 transition-all cursor-pointer">
                  LinkedIn
                </div>
                <div className="px-2 py-1 rounded text-xs bg-[#161b22] border border-[#30363d] text-[#58a6ff] hover:bg-[#1f2937] hover:border-[#58a6ff]/50 transition-all cursor-pointer">
                  Twitter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
