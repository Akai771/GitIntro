import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Code2, Copy } from "lucide-react";
import type { Template } from "@/templates/types";
import TechStackSelector from "@/components/TechStackSelector";
import { CodeBlock } from "@/components/ui/code-block";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";

interface EditingComponentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  template: Template | null;
  readmeData: Record<string, string>;
  handleInputChange: (field: string, value: string) => void;
  markdown: string;
  handleCopy: () => void;
}

export default function EditingComponent({
  activeTab,
  setActiveTab,
  template,
  readmeData,
  handleInputChange,
  markdown,
  handleCopy,
}: EditingComponentProps) {
  const { theme } = useTheme();
  const colorMode = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Panel - Form Editor */}
      <div className="border-r border-border flex flex-col overflow-hidden min-h-0">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-muted/30 shrink-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-2 h-10 sm:h-11">
              <TabsTrigger value="edit" className="gap-1 sm:gap-2 data-[state=active]:bg-background text-xs sm:text-sm">
                <Code2 className="w-4 h-4 hidden sm:block" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="markdown" className="gap-1 sm:gap-2 data-[state=active]:bg-background text-xs sm:text-sm">
                <Code2 className="w-4 h-4 hidden sm:block" />
                Code
              </TabsTrigger>
              <TabsTrigger value="preview" className="gap-1 sm:gap-2 data-[state=active]:bg-background text-xs sm:text-sm lg:hidden">
                <Eye className="w-4 h-4 hidden sm:block" />
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === "edit" && (
            <div className="h-full overflow-y-auto">
              <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
                {template && Object.values(template.sections)
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <div key={section.order} className="space-y-4 pb-6 border-b border-border last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                      </div>
                      {section.fields.map((field) => {
                        // Check if field should be shown (for conditional fields)
                        if (field.showWhen && !readmeData[field.showWhen]) {
                          return null;
                        }

                        // Checkbox field rendering - check BEFORE tech field detection
                        if (field.type === "checkbox") {
                          return (
                            <div key={field.id} className="flex items-center space-x-3 py-2">
                              <Checkbox
                                id={field.id}
                                checked={readmeData[field.id] === "true"}
                                onCheckedChange={(checked) => 
                                  handleInputChange(field.id, checked ? "true" : "")
                                }
                              />
                              <Label 
                                htmlFor={field.id} 
                                className="text-sm font-medium cursor-pointer"
                              >
                                {field.label}
                              </Label>
                            </div>
                          );
                        }

                        const isTechField = 
                          field.id.toLowerCase().includes("language") ||
                          field.id.toLowerCase().includes("skill") ||
                          field.id.toLowerCase().includes("tech") ||
                          field.id.toLowerCase().includes("framework") ||
                          field.id.toLowerCase().includes("tool");

                        if (isTechField) {
                          const techType = 
                            field.id.toLowerCase().includes("framework") || 
                            field.id.toLowerCase().includes("tool")
                              ? "frameworks"
                              : field.id.toLowerCase().includes("language")
                              ? "languages"
                              : "all";

                          return (
                            <TechStackSelector
                              key={field.id}
                              id={field.id}
                              label={field.label}
                              value={readmeData[field.id] || ""}
                              onChange={(value) => handleInputChange(field.id, value)}
                              placeholder={field.placeholder}
                              type={techType}
                            />
                          );
                        }

                        return (
                          <div key={field.id}>
                            <Label htmlFor={field.id} className="text-sm font-medium mb-2 block">
                              {field.label}
                            </Label>
                            {field.type === "textarea" ? (
                              <textarea
                                id={field.id}
                                placeholder={field.placeholder}
                                value={readmeData[field.id] || ""}
                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                              />
                            ) : (
                              <input
                                id={field.id}
                                type={field.type || "text"}
                                placeholder={field.placeholder}
                                value={readmeData[field.id] || ""}
                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                            )}
                            {field.description && (
                              <p className="text-xs text-muted-foreground mt-1.5">{field.description}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === "markdown" && (
            <div className="h-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Label className="text-sm font-medium">
                  Raw Markdown
                </Label>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleCopy}
                  className="gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
              </div>
              <div className="flex-1 overflow-auto">
                <CodeBlock
                  language="markdown"
                  filename="README.md"
                  code={markdown}
                />
              </div>
            </div>
          )}

          {/* Mobile Preview Tab */}
          {activeTab === "preview" && (
            <div className="h-full overflow-y-auto lg:hidden">
              <div className="px-4 py-4">
                <div className="prose prose-neutral dark:prose-invert max-w-none bg-background rounded-lg border border-border p-4 min-h-[calc(100vh-200px)]">
                  <MarkdownPreview 
                    source={markdown} 
                    style={{ 
                      backgroundColor: 'transparent',
                      color: 'inherit'
                    }}
                    wrapperElement={{
                      'data-color-mode': colorMode
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Live Preview (Desktop only) */}
      <div className="hidden lg:flex flex-col bg-muted/20 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-border bg-muted/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Live Preview</h2>
          </div>
          <Badge variant="default" className="gap-1.5 bg-green-500/10 text-green-500 border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Real-time
          </Badge>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-6">
            <div className="prose prose-neutral dark:prose-invert max-w-none bg-background rounded-lg border border-border p-8 min-h-[calc(100vh-200px)]">
              <MarkdownPreview 
                source={markdown} 
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'inherit'
                }}
                wrapperElement={{
                  'data-color-mode': colorMode
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}