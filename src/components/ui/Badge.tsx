import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'purple';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: "bg-vulcan-800 text-vulcan-100 border-vulcan-700",
    success: "bg-emerald-900/30 text-emerald-400 border-emerald-800/50",
    warning: "bg-amber-900/30 text-amber-400 border-amber-800/50",
    danger: "bg-red-900/30 text-red-400 border-red-800/50",
    purple: "bg-primary-900/30 text-primary-300 border-primary-800/50"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
