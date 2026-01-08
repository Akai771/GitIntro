import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  Layout, 
  Code2, 
  Palette, 
  Zap, 
  Github,
  Download,
  Terminal,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactLenis } from 'lenis/react'
import { Badge } from "@/components/ui/badge";


export default function Home() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Templates",
      description: "Start with professionally designed templates."
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Customizable",
      description: "Tweak colors and layouts to match your vibe."
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Snippets",
      description: "Drop in common widgets and stats effortlessly."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Preview",
      description: "Real-time rendering as you edit your profile."
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Export Ready",
      description: "Get raw Markdown ready for your repository."
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub Optimized",
      description: "Built specifically for GitHub profile constraints."
    }
  ];


  return (<>
    <ReactLenis root />
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/20">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50 dark:opacity-20" />
      <div className="absolute bottom-0 right-0 w-200 h-150 bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10 opacity-30" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
        <Badge variant="default" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary text-sm text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Terminal className="w-4 h-4" />
          <span>v1.0 is now available</span>
        </Badge>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          Craft Your <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">GitHub Identity</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          The minimalist editor for developers to create stunning, professional profile READMEs in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <Button 
            onClick={() => navigate("/templates")}
            size="lg" 
            className="rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            Start Building <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-medium bg-background/50 backdrop-blur-sm border-border hover:bg-secondary/50 transition-all">
            <Github className="mr-2 w-4 h-4" /> View Examples
          </Button>
        </div>

        {/* Hero Image / Preview Placeholder */}
        <div className="mt-20 w-full max-w-5xl rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl p-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="aspect-video rounded-lg bg-linear-to-br from-secondary/30 to-background border border-border/30 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white/5 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <Sparkles className="w-16 h-16 text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500" />
            <p className="absolute bottom-4 text-sm text-muted-foreground font-mono">Interactive Editor Preview</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need. <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-6 border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="container mx-auto px-6 py-24 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground px-6 py-16 md:py-24 text-center">
            {/* Background elements for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Ready to stand out?
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl font-light">
                Join the community of developers crafting their digital presence.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Create Your README <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
        </div>
      </section>
    </div>
  </>);
}
