'use client'
import React, { useState } from 'react'
import { Github, Construction } from 'lucide-react' // Hoặc icon của Quân

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
                    <div className="bg-[#1D1D1D] text-white px-[12px] py-[8px] rounded-lg shadow-2xl flex flex-col items-center min-w-[280px] max-w-[320px] text-center border border-white/10">
                        
                        {/* Lớp 1: Icon */}
                        <div className="pb-2 md:pb-2">
                            <Construction size={24} className="text-yellow-500" />
                        </div>

                        {/* Lớp 2: Text */}
                        <p className="font-medium text-[14px] leading-[20px] md:text-[16px] md:leading-normal mb-2">
                            The system is currently being upgraded to Batching V2 architecture to optimize the touch and swipe experience. We'll be back soon with improved performance!
                        </p>

                        {/* Lớp 3: Button GitHub */}
                        <a 
                            href="https://github.com/nomnom58/untold" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-all text-[13px] md:text-[14px]"
                        >
                            <Github size={16} />
                            <span>View source code GitHub.</span>
                        </a>

                        {/* Mũi nhọn căn giữa */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1D1D1D]"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MaintenanceTooltip
