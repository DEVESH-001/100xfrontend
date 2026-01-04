import { cn } from "@/lib/utils";

const sizeClasses = {
  h1: "text-3xl md:text-5xl lg:text-6xl",
  h2: "text-2xl md:text-4xl lg:text-5xl",
};

export const Heading = ({
  children,
  className,
  size = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "h1" | "h2";
}) => {
  const Component = size;

  return (
    <Component
      className={cn(
        "font-display font-bold tracking-tight",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
};

//badge for hero-section

export const Badge = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-md border border-neutral-800 bg-neutral-100 px-2 text-sm transition-all duration-200 hover:bg-neutral-200 md:flex md:w-fit md:rounded-full md:px-3 md:py-1.5 dark:bg-neutral-900 hover:dark:bg-neutral-700",
        className,
      )}
    >
      <p>{text}</p>
      <span className="px-1 text-neutral-600">|</span>
      <p className="px-1 font-semibold"> Learn more &gt;</p>
    </div>
  );
};
