import { useState, useRef, useEffect } from "react";
import { X, Search, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { languagesData } from "@/data/languagesData";
import { frameworkToolsData } from "@/data/frameworkToolsData";

interface TechStackSelectorProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "languages" | "frameworks" | "all";
}

export default function TechStackSelector({
  id,
  label,
  value,
  onChange,
  placeholder = "Search and add technologies...",
  type = "all",
}: TechStackSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize selected tags from value
  useEffect(() => {
    if (value) {
      setSelectedTags(value.split(",").map((tag) => tag.trim()).filter(Boolean));
    }
  }, [value]);

  // Update parent when tags change - only when tags actually differ from current value
  useEffect(() => {
    const newValue = selectedTags.join(", ");
    if (newValue !== value) {
      onChange(newValue);
    }
  }, [selectedTags]); // intentionally omitting onChange and value to prevent loops

  // Get combined data based on type
  const getTechData = () => {
    if (type === "languages") {
      return languagesData.map(lang => ({ ...lang, category: "language" }));
    } else if (type === "frameworks") {
      return frameworkToolsData;
    } else {
      return [
        ...languagesData.map(lang => ({ ...lang, category: "language" })),
        ...frameworkToolsData,
      ];
    }
  };

  const techData = getTechData();

  // Filter technologies based on search
  const filteredTech = techData.filter((tech) => {
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
    const notSelected = !selectedTags.includes(tech.name);
    return matchesSearch && notSelected;
  });

  // Get technology details by name
  const getTechDetails = (name: string) => {
    return techData.find((tech) => tech.name === name);
  };

  const handleAddTag = (name: string) => {
    if (!selectedTags.includes(name)) {
      setSelectedTags([...selectedTags, name]);
      setSearchQuery("");
      setIsDropdownOpen(false);
    }
  };

  const handleRemoveTag = (name: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== name));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>

      {/* Selected Tags Display */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 rounded-md border border-border bg-background/50">
          {selectedTags.map((tag) => {
            const tech = getTechDetails(tag);
            return (
              <Badge
                key={tag}
                variant="default"
                className="px-3 py-1.5 flex items-center gap-2 border border-foreground/20 bg-transparent hover:bg-muted-foreground/20 transition-colors"
              >
                {tech && (
                  <img
                    src={`https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color.replace("#", "")}?style=flat&logo=${tech.shield || tech.name.toLowerCase().replace(/\s+/g, "")}&logoColor=white`}
                    alt={tech.name}
                    className="h-5"
                  />
                )}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 hover:text-destructive transition-colors"
                  aria-label={`Remove ${tag}`}
                >
                  <X className="w-3 h-3 text-foreground" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}

      {/* Search Input */}
      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
            className="w-full pl-10 pr-3 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Dropdown */}
        {isDropdownOpen && searchQuery && (
          <div className="absolute z-50 w-full mt-1 max-h-60 overflow-auto rounded-md border border-border bg-background shadow-lg">
            {filteredTech.length > 0 ? (
              <div className="py-1">
                {filteredTech.slice(0, 10).map((tech) => (
                  <button
                    key={tech.name}
                    onClick={() => handleAddTag(tech.name)}
                    className="w-full px-3 py-2 flex items-center gap-3 hover:bg-accent transition-colors text-left"
                  >
                    <img
                      src={`https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color.replace("#", "")}?style=flat&logo=${tech.shield || tech.name.toLowerCase().replace(/\s+/g, "")}&logoColor=white`}
                      alt={tech.name}
                      className="h-5"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{tech.name}</div>
                      {"description" in tech && tech.description ? (
                        <div className="text-xs text-muted-foreground truncate">
                          {tech.description as string}
                        </div>
                      ) : null}
                    </div>
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-3 py-4 text-sm text-muted-foreground text-center">
                No technologies found
              </div>
            )}
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Search and click to add technologies. Click the X to remove.
      </p>
    </div>
  );
}
