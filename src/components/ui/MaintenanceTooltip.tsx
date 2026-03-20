'use client'
import React, { useState } from 'react'
import { Github, Code } from 'lucide-react'
import { Button } from '../Button'

const MaintenanceTooltip = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="relative inline-block" 
             onMouseEnter={() => setIsVisible(true)} 
             onMouseLeave={() => setIsVisible(false)}
             onClick={() => setIsVisible(!isVisible)}>
            
            {children}

            {isVisible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[12px] z-[100] animate-in fade-in zoom-in duration-200">
                    <div className="bg-[#1D1D1D] text-white px-[16px] py-[16px] rounded-[16px] shadow-2xl flex flex-col items-start min-w-[280px] max-w-[320px] text-left border border-white/10">
                        
                        {/* Lớp 1: Icon */}
                        <div className="pb-3 md:pb-3">
                            <Code size={24} className="text-[#0360FF]" />
                        </div>

                        {/* Lớp 2: Text */}
                        <p className="font-medium text-[14px] leading-[20px] md:text-[16px] md:leading-normal mb-4">
                            The system is currently being upgraded to Batching V2 architecture to optimize the touch and swipe experience. We'll be back soon with improved performance!
                        </p>

                        {/* Lớp 3: Button GitHub - Gọi trực tiếp Base Component */}
                        <Button 
                            variant="primary"
                            text="View source code GitHub."
                            icon={Github}
                            onClick={() => window.open('https://github.com/nomnom58/untold', '_blank', 'noopener,noreferrer')}
                        />

                        {/* Mũi nhọn căn giữa */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1D1D1D]"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MaintenanceTooltip
