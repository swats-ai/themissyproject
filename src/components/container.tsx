import { cn } from "@/lib/utils";

/**
 * Site-wide content container — matches the source site's `.atlas-hero_content`
 * style wrappers: max-width 1200px, centered, with side gutters.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
