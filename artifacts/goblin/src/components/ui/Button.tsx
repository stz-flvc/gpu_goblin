import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-300 overflow-hidden z-10 group active:scale-95";
    
    const variants = {
      primary: "bg-primary/10 text-primary border border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
      secondary: "bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/20 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]",
      outline: "bg-transparent text-foreground border border-white/20 hover:border-white/50 hover:bg-white/5",
      ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4 font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
      </button>
    );
  }
);
Button.displayName = "Button";
