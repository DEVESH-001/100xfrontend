import { cn } from "@/lib/utils";

const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p";
}) => {
  const Component = as;

  return (
    <Component
      className={cn(
        "max-w-xl text-base text-[#4A4A3B] md:text-lg lg:text-lg dark:text-[#ABAB9C]",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default SubHeading;
