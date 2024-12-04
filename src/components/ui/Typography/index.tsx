import { cn } from "@/lib/utils";

const titleSizes = {
  display2xl: "text-display-2xl font-semibold",
  displayXl: "text-display-xl font-semibold",
  displayLg: "text-display-lg font-semibold",
  displayMd: "text-display-md font-semibold",
  displaySm: "text-display-sm font-semibold",
  displayXs: "text-display-xs font-semibold",
  xl: "text-xl",
  lg: "text-lg",
  base: "text-base",
  sm: "text-sm",
  xs: "text-xs",
};

export default function Typography({
  as: Comp = "h1",
  className,
  size = "displayXl",
  children,
  ...restProps
}: {
  as?: React.ElementType;
  size?: keyof typeof titleSizes;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Comp
      className={cn(
        "leading-10 text-inherit sm:leading-none",
        titleSizes[size],
        className,
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
