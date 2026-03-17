import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  text: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, icon: Icon, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        px-3 py-[7px] md:py-2.5
        bg-btn-bg border border-btn-border
        rounded-[12px] md:rounded-[16px]
        transition-all hover:brightness-95 active:scale-95
        ${className}
      `}
    >
      {Icon && (
        <Icon 
          className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] mr-2 text-text-primary"
        />
      )}
      <span className="text-[16px] md:text-[24px] font-medium text-text-primary leading-none">
        {text}
      </span>
    </button>
  );
};
