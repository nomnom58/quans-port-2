'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const transitionOverlayRef = useRef<HTMLDivElement>(null)
    const svgPathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        if (!svgPathRef.current || !transitionOverlayRef.current) return;

        const length = svgPathRef.current.getTotalLength();
        
        // --- KHỞI TẠO TỨC THÌ ---
        // Hiện màn hình trắng che phủ ngay lập tức
        transitionOverlayRef.current.style.opacity = '1';
        
        gsap.set(svgPathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: 0,
            strokeWidth: 300, // Quay lại độ dày 300 theo ý Quân
            opacity: 1
        });

        // --- ANIMATION CHẠY KHÔNG DELAY ---
        const tl = gsap.timeline();

        tl.to(svgPathRef.current, {
            strokeDashoffset: -length, 
            strokeWidth: 2,           
            duration: 5.0,            // Chạy thong thả trong 5 giây
            ease: "power2.out",       // Vọt đi ngay lập tức khi vừa load
        })
        .to(transitionOverlayRef.current, {
            opacity: 0,
            duration: 1.0,
            ease: "power2.inOut",
            onComplete: () => {
                // Thu dọn chiến trường để không cản trở click chuột
                if (transitionOverlayRef.current) {
                    transitionOverlayRef.current.style.display = 'none';
                }
            }
        }, "-=1.0"); // Mờ dần trong 1 giây cuối cùng của quá trình vẽ

    }, [])

    return (
        <>
            {/* Lớp Overlay Intro */}
            <div 
                ref={transitionOverlayRef} 
                className='fixed inset-0 z-[10000] flex items-center justify-center bg-white pointer-events-none'
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
                        stroke="#82A0FF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Nội dung Portfolio */}
            <div className="relative">
                {children}
            </div>
        </>
    )
}

export default TransitionWrapper
