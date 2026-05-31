import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-900/20",
      outline: "border border-vulcan-700 bg-transparent hover:bg-vulcan-800 text-vulcan-100",
      ghost: "bg-transparent hover:bg-vulcan-800 text-vulcan-200",
      danger: "bg-red-900/40 text-red-400 border border-red-800 hover:bg-red-900/60",
      success: "bg-emerald-900/40 text-emerald-400 border border-emerald-800 hover:bg-emerald-900/60",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10 justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
