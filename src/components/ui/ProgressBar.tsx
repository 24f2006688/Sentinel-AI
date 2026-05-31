import React from 'react';
import { cn } from '../../utils/cn';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  indicatorColor?: string;
}

export function ProgressBar({ className, value, max = 100, indicatorColor = "bg-primary-500", ...props }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-vulcan-800", className)} {...props}>
      <div 
        className={cn("h-full transition-all duration-500 ease-in-out", indicatorColor)} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
