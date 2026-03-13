import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-300 overflow-hidden z-10 group active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        primary: "bg-primary/10 text-primary border border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-transparent text-foreground border border-white/20 hover:border-white/50 hover:bg-white/5",
        secondary: "bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/20 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm px-6 py-3",
        md: "text-sm px-6 py-3",
        sm: "text-xs px-4 py-2",
        lg: "text-base px-8 py-4 font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {/* Glow effect on hover */}
        {!asChild && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" />
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
