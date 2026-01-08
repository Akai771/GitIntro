import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Save,
  Copy,
  ArrowLeft,
  CircleQuestionMark,
} from "lucide-react";
import { getTemplate } from "@/templates";
import type { Template } from "@/templates/types";
import EditingComponent from "@/components/editingComponent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Editor() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("edit");
  const [template, setTemplate] = useState<Template | null>(null);
  const [readmeData, setReadmeData] = useState<Record<string, string>>({});

  // Load template on mount
  useEffect(() => {
    if (!templateId) {
      navigate("/templates");
      return;
    }

    const loadedTemplate = getTemplate(templateId);
    if (!loadedTemplate) {
      navigate("/templates");
      return;
    }

    setTemplate(loadedTemplate);

    // Initialize readmeData with default values from template fields
    const initialData: Record<string, string> = {};
    Object.values(loadedTemplate.sections).forEach(section => {
      section.fields.forEach(field => {
        initialData[field.id] = field.defaultValue || "";
      });
    });
    setReadmeData(initialData);
  }, [templateId, navigate]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setReadmeData(prev => ({ ...prev, [field]: value }));
  }, []);

  const markdown = useMemo(() => {
    if (!template) return "";
    return template.generateMarkdown(readmeData);
  }, [template, readmeData]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [markdown]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(markdown);
    // Could add a toast notification here
  }, [markdown]);

  return (
    <div className="h-screen py-18 flex flex-col bg-background text-foreground overflow-hidden">
      {/* Top Bar */}
      <div className="border-b border-border bg-background">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/templates")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="h-6 w-px bg-border" />
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
              Step 2 of 2: Editor
            </Badge>
            <span className="text-sm font-medium text-foreground capitalize">{templateId} template</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button size="sm" onClick={handleDownload} className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Dialog>
              <DialogTrigger>
                <Tooltip>
                  <TooltipTrigger><CircleQuestionMark className="w-5 h-5 mt-1" /></TooltipTrigger>
                  <TooltipContent>
                    <p>How to Add README to Your GitHub Profile</p>
                  </TooltipContent>
                </Tooltip>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-xl">How to Add README to Your GitHub Profile</DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <p>Follow these steps to display your README on your GitHub profile:</p>
                      
                      <ol className="list-decimal list-inside space-y-3">
                        <li>
                          <strong className="text-foreground">Create a special repository</strong>
                          <p className="ml-5 mt-1">Create a new repository with the <strong>same name as your GitHub username</strong>. For example, if your username is <code className="bg-muted px-1.5 py-0.5 rounded text-xs">johndoe</code>, create a repo named <code className="bg-muted px-1.5 py-0.5 rounded text-xs">johndoe</code>.</p>
                        </li>
                        <li>
                          <strong className="text-foreground">Make it public</strong>
                          <p className="ml-5 mt-1">Ensure the repository visibility is set to <strong>Public</strong>.</p>
                        </li>
                        <li>
                          <strong className="text-foreground">Initialize with a README</strong>
                          <p className="ml-5 mt-1">Check the option "Add a README file" when creating the repo, or create a <code className="bg-muted px-1.5 py-0.5 rounded text-xs">README.md</code> file manually.</p>
                        </li>
                        <li>
                          <strong className="text-foreground">Add your content</strong>
                          <p className="ml-5 mt-1">Copy the markdown from this editor and paste it into your README.md file.</p>
                        </li>
                        <li>
                          <strong className="text-foreground">Commit and push</strong>
                          <p className="ml-5 mt-1">Save and commit your changes. Your profile README will appear on your GitHub profile page!</p>
                        </li>
                      </ol>

                      <div className="bg-primary/5 border border-primary/20 rounded-md p-3 mt-4">
                        <p className="text-primary text-xs">
                          💡 <strong>Tip:</strong> You can edit your profile README anytime by updating the README.md file in your special repository.
                        </p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      

      {/* Main Editor Layout - Split View */}
      <EditingComponent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        template={template}
        readmeData={readmeData}
        handleInputChange={handleInputChange}
        markdown={markdown}
        handleCopy={handleCopy}
      />
    </div>
  );
}
