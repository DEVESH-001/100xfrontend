import { cn } from "@/lib/utils";

const sizeClasses = {
  h1: "text-3xl md:text-5xl lg:text-6xl",
  h2: "text-2xl md:text-4xl lg:text-5xl",
};

const Heading = ({
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
      className={cn("font-bold tracking-tight", sizeClasses[size], className)}
    >
      {children}
    </Component>
  );
};

export default Heading;
