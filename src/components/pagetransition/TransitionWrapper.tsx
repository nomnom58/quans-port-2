'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const transitionOverlayRef = useRef<HTMLDivElement>(null)
    const svgPathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        if (!svgPathRef.current || !transitionOverlayRef.current) return;

        const length = svgPathRef.current.getTotalLength();
        
        // --- SETUP TỨC THÌ ---
        // Nội dung bên dưới hiện ngay, dải lụa xanh pastel đè lên
        gsap.set(svgPathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: 0,
            strokeWidth: 300, 
            opacity: 1
        });

        // Lớp bọc trong suốt để lộ Logo/Hero bên dưới
        gsap.set(transitionOverlayRef.current, { 
            opacity: 1,
            backgroundColor: 'transparent' 
        });

        // --- ANIMATION VÉN MÀN (4.0s) ---
        const tl = gsap.timeline();

        tl.to(svgPathRef.current, {
            strokeDashoffset: -length, 
            strokeWidth: 2,           
            duration: 4.0,            // Giữ 4 giây theo ý Quân
            ease: "power2.out",       // Chạy ngay lập tức không chờ đợi
        })
        .to(transitionOverlayRef.current, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                // Thu dọn để không chặn click chuột vào nội dung
                if (transitionOverlayRef.current) {
                    transitionOverlayRef.current.style.display = 'none';
                }
            }
        }, "-=0.8");

    }, [])

    return (
        <>
            {/* Overlay dải lụa xanh Pastel #809FF3 */}
            <div 
                ref={transitionOverlayRef} 
                className='fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none bg-transparent'
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1316 664"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full scale-[1.7] h-full"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path
                        ref={svgPathRef}
                        d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
                        stroke="#809FF3" // ĐỔI LẠI MÀU CŨ PASTEL TẠI ĐÂY
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Nội dung Portfolio - Luôn ở đó từ giây đầu tiên */}
            <div className="relative z-0">
                {children}
            </div>
        </>
    )
}

export default TransitionWrapper
