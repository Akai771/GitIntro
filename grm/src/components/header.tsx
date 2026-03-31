import { Github, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const { setCrazyDarkTheme, setCrazyLightTheme , isDark } = useThemeToggle({
    variant: "circle",
    start: "top-right",
  });

  const CustomToggle = () => {
    return (
      <div className="flex gap-2">
        {isDark ? (
          <Button variant="ghost" size="icon" onClick={setCrazyLightTheme}>
            <Sun />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={setCrazyDarkTheme}>
            <Moon />
          </Button>
        )}
      </div>
    );
  };

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div onClick={() => navigate("/")} className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="GitIntro Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              GitIntro
            </span>
          </div>
          <CustomToggle />
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
          <img 
            src={isDark ? "/logo_Dark.png" : "/logo_Light.png"}
            alt="GitIntro Logo" 
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-xl font-bold text-primary">
            GitIntro
          </span>
        </div>
        <div className="flex flex-row">
          <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => window.open("https://github.com/akai771/", "_blank")}><Github className="w-5 h-5 text-foreground" /></Button>
          {/* Theme Switcher */}
          <CustomToggle />
        </div>
      </div>
    </header>
  );
}
