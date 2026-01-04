import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-150 rounded-sm bg-neutral-100 p-2 transition-colors dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "mt-6 mb-3 px-6 font-semibold text-neutral-900 dark:text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mb-4 px-6 font-sans text-sm text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardButton = ({
  className,
  children,
  href = "#",
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 px-6 text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};

export const CardImage = ({
  className,
  children,
  gradientFrom = "from-purple-500/20",
  gradientTo = "to-transparent",
  position = "left",
}: {
  className?: string;
  children?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  position?: "left" | "right";
}) => {
  return (
    <div
      className={cn(
        "relative h-100 overflow-hidden rounded-sm border border-neutral-200 bg-linear-to-br p-6 dark:border-neutral-800",
        gradientFrom,
        gradientTo,
        position === "left" ? "pt-6 pr-0 pb-0 pl-6" : "pt-6 pr-6 pb-0 pl-0",
        className,
      )}
    >
      {children}
    </div>
  );
};
