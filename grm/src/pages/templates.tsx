import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import templates from "@/data/templateData";

// Mock data for templates with placeholder images

export default function Templates() {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId: string) => {
    console.log(`Selected template: ${templateId}`);
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-24 selection:bg-primary/20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Badge variant="outline" className="mb-4 py-1.5 px-4 rounded-full border-primary/20 text-primary bg-primary/5">
            Step 1 of 2: Selection
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Choose your starting point
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a template structure to begin. You can fully customize the content later.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group relative w-full aspect-2/3 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleSelectTemplate(template.id)}
            >
              {/* Background Image */}
              <img 
                src={template.image} 
                alt={template.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Always Visible */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Popular Badge */}
              {index === 0 && (
                <Badge className="absolute top-4 left-4 z-20 bg-secondary/90 backdrop-blur-sm text-secondary-foreground shadow-lg border-0">
                  <Star className="w-3 h-3 mr-1 fill-current" /> Popular
                </Badge>
              )}

              {/* Title - Always Visible */}
              <div className="absolute bottom-6 left-6 right-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">
                  {template.title}
                </h3>
              </div>

              {/* Hover Overlay with Additional Info */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {template.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {template.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="rounded-full shadow-xl bg-primary hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  Use Template <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
