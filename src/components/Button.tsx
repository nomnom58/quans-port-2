import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'outline' | 'ghost' | 'maintenance';
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
        
        // --- 1. RADIUS & PADDING (ÉP CỨNG SPEC) ---
        // Mobile: Radius 12px, Pad 12x7
        "rounded-[12px] px-[12px] py-[7px]",
        // Laptop/Tablet (md): Radius 16px, Pad 12x10
        "md:rounded-[16px] md:px-[12px] md:py-[10px]",

        // --- 2. COLORS & STROKE (VARIANT PRIMARY) ---
        variant === 'primary' && "bg-[#E9E6E0] border border-[#CAC5BD] text-[#1D1D1D] hover:bg-[#DED9D0] active:scale-95",
        
        // Trạng thái DISABLED 50%
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        
        className
      )}
      {...props}
    >
      {/* --- 3. ICON LOGIC (16px Mobile | 24px Laptop) --- */}
      {Icon && (
        <Icon 
          className={cn(
                "mr-2 text-[#1D1D1D] shrink-0",
                "w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            )}
        />
      )}

      {/* --- 4. TEXT LOGIC (16px Mobile | 24px Laptop | Weight 500) --- */}
      {(text || children) && (
        <span className={cn(
            "leading-none text-[#1D1D1D] font-[500]",
            "text-[16px] md:text-[24px]"
        )}>
          {text || children}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';
