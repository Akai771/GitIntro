import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Templates", path: "/templates" },
      { name: "Home", path: "/" },
    ],
    resources: [
      { name: "GitHub", href: "https://github.com" },
      { name: "Markdown Guide", href: "https://www.markdownguide.org/" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-primary">
                    GitIntro
                </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Create beautiful and professional README files for your GitHub projects in minutes.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Connect</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/akai771"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-shetty18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="mailto:rishabh.shetty123@gmail.com"
                className="w-9 h-9 rounded-md bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} GitIntro. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by <Button variant="link" size="sm" className="p-0" onClick={() => window.open("https://github.com/akai771", "_blank")}>Akai771</Button></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
