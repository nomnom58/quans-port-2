import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ShowcaseToggleV2Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const ShowcaseToggleV2: React.FC<ShowcaseToggleV2Props> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full bg-[#F8F8F8] border border-dashed border-[#D3D3D3] rounded-[12px] md:rounded-[16px] shadow-[4px_4px_8px_rgba(0,0,0,0.06)] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-[10px] flex items-start justify-between group"
      >
        <span className={`text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-left transition-colors duration-200 ${isOpen ? 'font-[600] text-[#212121]' : 'font-[500] text-[#575757]'}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#575757] shrink-0 ml-2 mt-[2px] md:mt-[3px]"
        >
          <ChevronDown size={20} strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-3 pb-[10px]">
              <div className="mt-[10px] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] text-[#575757] font-medium">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
