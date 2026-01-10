import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import templates from "@/data/templateData";

// Mock data for templates with placeholder images

export default function Templates() {
  const navigate = useNavigate();
  const [savedDrafts] = useLocalStorage<Record<string, Record<string, string>>>(
    "readme-drafts",
    {}
  );

  const handleSelectTemplate = (templateId: string) => {
    console.log(`Selected template: ${templateId}`);
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 sm:py-24 selection:bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Badge
            variant="outline"
            className="mb-4 py-1.5 px-3 sm:px-4 rounded-full border-primary/20 text-primary bg-primary/5 text-xs sm:text-sm"
          >
            Step 1 of 2: Selection
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-4">
            Choose your starting point
          </h1>
          <p className="text-md sm:text-lg text-muted-foreground">
            Select a template structure to begin. You can fully customize the
            content later.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {templates.map((template, index) => {
            const hasSavedDraft =
              savedDrafts[template.id] &&
              Object.keys(savedDrafts[template.id]).length > 0;

            return (
              <div
                key={template.id}
                className="group relative w-full aspect-2/3 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <div>
                    <img
                    src={template.image}
                    alt={template.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay - Always Visible */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Popular Badge */}
                  {index === 0 && (
                    <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 bg-secondary/90 backdrop-blur-sm text-secondary-foreground shadow-lg border-0 text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Popular
                    </Badge>
                  )}

                  {/* Draft Badge */}
                  {hasSavedDraft && (
                    <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg border-0 text-xs">
                      <Clock className="w-3 h-3 mr-1" /> Draft Saved
                    </Badge>
                  )}

                  {/* Title - Always Visible */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {template.title}
                    </h3>
                    {hasSavedDraft && (
                      <p className="text-white/80 text-xs mt-1">
                        Continue where you left off
                      </p>
                    )}
                  </div>

                  {/* Hover Overlay with Additional Info */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 sm:p-6 text-center backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {template.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-3">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="rounded-full shadow-xl bg-primary hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      {hasSavedDraft ? (
                        <>
                          <Clock className="mr-2 w-4 h-4" />
                          Continue Editing
                        </>
                      ) : (
                        <>
                          Use Template <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
