import { Button } from "@/components/ui/button";
import {
  Layout,
  Code2,
  Palette,
  Zap,
  Github,
  Download,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Badge } from "@/components/ui/badge";
import SplitText from "@/components/ui/react-bits/splitText";
import HomeEditorPreview from "@/components/HomeEditorPreview";
import { useEffect, useRef } from "react";
import { AuroraText } from "@/components/ui/aurora-text";

export default function Home() {
  const navigate = useNavigate();
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const heroElements = heroRef.current?.querySelectorAll("[data-animate]");
    const featureCards = featuresRef.current?.querySelectorAll("[data-animate]");
    const ctaElements = ctaRef.current?.querySelectorAll("[data-animate]");
    const marqueeElement = marqueeRef.current;

    heroElements?.forEach((el) => observer.observe(el));
    featureCards?.forEach((el) => observer.observe(el));
    ctaElements?.forEach((el) => observer.observe(el));
    if (marqueeElement) observer.observe(marqueeElement);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Templates",
      description: "Start with professionally designed templates.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Customizable",
      description: "Tweak colors and layouts to match your vibe.",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Snippets",
      description: "Drop in common widgets and stats effortlessly.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Preview",
      description: "Real-time rendering as you edit your profile.",
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Export Ready",
      description: "Get raw Markdown ready for your repository.",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub Optimized",
      description: "Built specifically for GitHub profile constraints.",
    },
  ];

  return (
    <>
      <ReactLenis root />
      <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/20">
        {/* Abstract Background Blobs */}

        {/* Hero Section */}
        <section ref={heroRef} className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative z-10">
          <Badge
            data-animate
            variant="default"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary text-sm text-muted-foreground mb-4 opacity-0 translate-y-5 transition-all duration-500 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-y-0 hover:scale-105 hover:bg-primary/20 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>v1.0 is now available</span>
          </Badge>

          <h1 
            data-animate
            className="h-54 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 opacity-0 translate-y-7.5 transition-all duration-700 delay-100 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-y-0"
          >
            Craft Your{" "}
            <AuroraText colors={["oklch(0.869 0.088 60.682)", "oklch(0.869 0.088 60.682 / 0.5)", "oklch(0.869 0.088 60.682)"]}>Github</AuroraText>
            {" "}Identity
          </h1>

          <p 
            data-animate
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed opacity-0 translate-y-7.5 transition-all duration-1000 delay-200 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-y-0"
          >
            The minimalist editor for developers to create stunning,
            professional profile READMEs in minutes.
          </p>

          <div 
            data-animate
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 translate-y-7.5 transition-all duration-1000 delay-300 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-y-0"
          >
            <Button
              onClick={() => navigate("/templates")}
              size="lg"
              className="group rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Start Building{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Hero Image / Editor Preview */}
          <HomeEditorPreview />
        </section>

        {/* Features Grid */}
        <section ref={featuresRef} className="container mx-auto px-6 py-32 z-10 relative">
          <div className="flex flex-col items-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60 mb-4 font-medium">
              Features
            </p>
            <SplitText
              className="text-5xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                className="group relative p-8 md:p-10 bg-background hover:bg-muted/30 opacity-0 translate-y-7.5 transition-all duration-500 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 flex items-center justify-center text-foreground/70 mb-6 group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-medium mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed font-light group-hover:text-muted-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/0 group-hover:via-primary/40 to-transparent transition-all duration-500" />
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section with Template Grid */}
        <section ref={ctaRef} className="container mx-auto px-6 py-24 mb-12">
          <div className="relative rounded-3xl bg-linear-to-br from-background via-muted/20 to-background border border-border/40 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative flex flex-col lg:flex-row items-center gap-30 p-8 md:p-12 lg:p-16 lg:pr-0">
              {/* Left Content */}
              <div 
                data-animate
                className="shrink-0 lg:max-w-xl space-y-8 opacity-0 -translate-x-12.5 transition-all duration-700 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-x-0 lg:pr-12"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Take Your Profile to the{" "}
                    <span className="text-primary">
                      Next Level!
                    </span>
                  </h2>
                  <p className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    With a variety of unique templates, you can effortlessly
                    create a stunning profile without any coding. Build your
                    next README with ease.
                  </p>
                </div>

                <Button
                  onClick={() => navigate("/templates")}
                  size="lg"
                  className="group rounded-full px-8 h-12 text-base font-semibold hover:scale-105 transition-all duration-300"
                >
                  Browse Templates{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right Template Grid - Vertical Marquee */}
              <div 
                ref={marqueeRef}
                data-animate
                className="hidden lg:block relative left-20 h-125 flex-1 lg:ml-auto opacity-0 translate-x-12.5 transition-all duration-1000 delay-300 [&.animate-in-view]:opacity-100 [&.animate-in-view]:translate-x-0"
              >
                <div className="grid grid-cols-2 gap-2 -rotate-6">
                  {/* Vertical Marquee Container */}
                  <div className="flex flex-col gap-2 animate-marquee-vertical">
                    {/* First complete set */}
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/minimalist.png" 
                        alt="Minimalist Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/portfolio.png" 
                        alt="Portfolio Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/social.png" 
                        alt="Social Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/startup.png" 
                        alt="Startup Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/technicalWriter.png" 
                        alt="Technical Writer Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/blank.png" 
                        alt="Blank Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                  </div>
                  
                  {/* Vertical Marquee Container Reversed */}
                  <div className="flex flex-col gap-2 animate-marquee-vertical" style={{ animationDirection: 'reverse' }}>
                    {/* First complete set */}
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/minimalist.png" 
                        alt="Minimalist Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/portfolio.png" 
                        alt="Portfolio Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/social.png" 
                        alt="Social Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/startup.png" 
                        alt="Startup Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/technicalWriter.png" 
                        alt="Technical Writer Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-border/40 hover:scale-105 transition-transform duration-300 group/card">
                      <img 
                        src="/templates/blank.png" 
                        alt="Blank Template" 
                        className="w-full h-48 object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
