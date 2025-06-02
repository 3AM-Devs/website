import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 hover:glow-effect";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_hsl(var(--primary))]",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_10px_hsl(var(--secondary))]",
    outline:
      "border-2 border-primary bg-transparent hover:bg-primary/10 text-foreground shadow-[0_0_10px_hsl(var(--primary))]",
    ghost:
      "hover:bg-primary/10 text-foreground hover:shadow-[0_0_10px_hsl(var(--primary))]",
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 py-2",
    lg: "h-12 px-8 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${className || ""}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
