import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, icon: Icon, onClick, className = '', disabled, variant = 'primary', size = 'md', children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center transition-all focus:outline-none font-medium",
        "rounded-full", // Forcing rounded-full as requested
        // DISABLED State
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        // Sizes
        size === 'sm' && "px-4 py-1.5 text-sm",
        size === 'md' && "px-6 py-2.5",
        size === 'lg' && "px-8 py-3 text-lg",
        // Variants
        variant === 'primary' && "bg-[#E9E6E0] border border-[#CAC5BD] text-[#1D1D1D] hover:bg-[#DED9D0] active:scale-95",
        variant === 'outline' && "border border-white/20 bg-transparent text-white hover:bg-white/5",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon 
          className={cn(
                "mr-2 text-[#1D1D1D]", // Force icon color
                size === 'sm' ? "w-4 h-4" : "w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            )}
        />
      )}
      {(text || children) && (
        <span className={cn(
            "leading-none text-[#1D1D1D]", // Force text color
            size === 'md' ? "text-[16px] md:text-[24px]" : "text-base"
        )}>
          {text || children}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';
