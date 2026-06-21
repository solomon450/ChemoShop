// Loader — reusable loading spinner/skeleton component

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LoaderProps {
  variant?: "spinner" | "skeleton" | "dots";
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function Loader({
  variant = "spinner",
  size = "md",
  text,
  className,
}: LoaderProps) {
  if (variant === "skeleton") {
    return (
      <div className={cn("space-y-3", className)}>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-1", className)}>
        <span className="sr-only">{text || "Loading"}</span>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "rounded-full bg-primary animate-bounce",
              size === "sm" && "h-1.5 w-1.5",
              size === "md" && "h-2 w-2",
              size === "lg" && "h-3 w-3"
            )}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    );
  }

  // Spinner variant
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-muted border-t-primary",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-6 w-6",
          size === "lg" && "h-10 w-10"
        )}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
