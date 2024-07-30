import { cn } from "../../lib/utils";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
  border?: boolean;
  shadow?: boolean;
  onClick?: () => void;
}

export const Button = ({
  className,
  children,
  variant = "warning",
  border = true,
  shadow = true,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `bg-[var(--${variant})] hover:bg-[var(--${variant})] ease-in-out duration-200 p-2 rounded-full shadow-button`,
        border && "border-2 border-black",
        shadow && "shadow-button",
        className
      )}
    >
      {children}
    </button>
  );
};
