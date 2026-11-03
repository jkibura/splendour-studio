import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const baseStyles =
  "group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.015em] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-zinc-950 bg-zinc-950 text-white hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.98]",

  secondary:
    "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-500 hover:bg-zinc-50 active:scale-[0.98]",

  ghost:
    "border border-transparent bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm sm:min-h-14 sm:px-7",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  type = "button",
  disabled = false,
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconElement = icon ? (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
}