export interface TemplateField {
  id: string;
  label: string;
  type: "text" | "textarea" | "email" | "url" | "list" | "checkbox";
  placeholder: string;
  defaultValue: string;
  description?: string;
  required?: boolean;
  /** For checkbox fields - only show when this field has a value */
  showWhen?: string;
}

export interface TemplateSection {
  id: string;
  title: string;
  icon?: string;
  fields: TemplateField[];
  order: number;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  sections: TemplateSection[];
  generateMarkdown: (data: Record<string, string>) => string;
}
