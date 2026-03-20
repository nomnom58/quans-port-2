'use client'
import React, { useState } from 'react'
import { Code, Github } from 'lucide-react'

// TẠO MỘT COMPONENT NÚT RIÊNG - KHÔNG GỌI TỪ FILE BÊN NGOÀI ĐỂ TRÁNH BUG STYLE
const MobileButton = ({ text, icon: Icon, href }: { text: string, icon: any, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="no-underline inline-flex items-center justify-center font-[500] transition-all bg-[#E9E6E0] border border-[#CAC5BD] text-[#1D1D1D] hover:bg-[#DED9D0] active:scale-95 rounded-[12px] px-[12px] py-[7px] text-[16px]"
  >
    {Icon && <Icon size={16} className="mr-2 text-[#1D1D1D] shrink-0" />}
    <span className="leading-none text-[#1D1D1D]">{text}</span>
  </a>
)

export default function MaintenanceTooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <div className="cursor-help">{children}</div>
      
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[12px] z-[50] animate-in fade-in zoom-in duration-200">
          <div className="bg-[#1D1D1D] p-[12px] rounded-[16px] flex flex-col items-start min-w-[300px] max-w-[340px] border border-white/10 shadow-2xl relative">
            
            {/* Icon Code màu trắng căn trái */}
            <Code size={24} className="text-[#FFFFFF] mb-2" />
            
            <p className="text-left text-white font-[500] text-[14px] leading-[20px] md:text-[16px] mb-4">
              The system is currently being upgraded to Batching V2 architecture to optimize the touch and swipe experience. We'll be back soon with improved performance!
            </p>

            {/* GỌI NÚT MOBILE ĐÃ CỐ ĐỊNH THÔNG SỐ */}
            <MobileButton 
              href="https://github.com/nomnom58/untold"
              icon={Github}
              text="View source code GitHub."
            />

            {/* Mũi nhọn */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1D1D1D]"></div>
          </div>
        </div>
      )}
    </div>
  )
}
