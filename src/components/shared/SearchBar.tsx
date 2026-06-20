"use client";

// SearchBar — global reusable search component

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
  className?: string;
  defaultValue?: string;
  debounceMs?: number;
}

export function SearchBar({
  placeholder = "Search...",
  onSearch,
  onClear,
  className,
  defaultValue = "",
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  const handleSearch = useCallback(() => {
    onSearch(value.trim());
  }, [value, onSearch]);

  const handleClear = useCallback(() => {
    setValue("");
    onClear?.();
  }, [onClear]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
      if (e.key === "Escape") {
        handleClear();
      }
    },
    [handleSearch, handleClear]
  );

  return (
    <div className={`flex gap-2 ${className || ""}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-9"
        />
      </div>
      <Button variant="outline" onClick={handleSearch}>
        Search
      </Button>
      {value && (
        <Button variant="ghost" size="icon" onClick={handleClear}>
          <X className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
}
