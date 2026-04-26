import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Props = {
    moneyPileUrl?: string
    noteUrls?: string[]
    gap?: number
    noteSize?: number
    pileSize?: number
}

export default function MoneyTrail({
    gap = 140,
    noteSize = 45,
    pileSize = 75,
    moneyPileUrl = "https://i.postimg.cc/Y4fX1D3q/pillar.png",
    noteUrls = [
        "https://i.postimg.cc/kVd1RPxG/dolar-1.png",
        "https://i.postimg.cc/4Kb8z25f/dolar-2.png",
    ],
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const pileRef = useRef<HTMLImageElement>(null)
    const notesRefs = useRef<(HTMLImageElement | null)[]>([])

    useEffect(() => {
        const notes = notesRefs.current.filter((n): n is HTMLImageElement => n !== null)
        let index = 0
        const wrapper = gsap.utils.wrap(0, notes.length)
        let lastMousePos = { x: 0, y: 0 }
        let currentMousePos = { x: 0, y: 0 }
        let accumulatedScroll = 0

        if (!pileRef.current) return

        const xTo = gsap.quickTo(pileRef.current, "x", {
            duration: 0.15,
            ease: "power2.out",
        })
        const yTo = gsap.quickTo(pileRef.current, "y", {
            duration: 0.15,
            ease: "power2.out",
        })

        const playAnimation = (shape: HTMLImageElement, isClick = false) => {
            const tl = gsap.timeline()
            gsap.set(shape, { opacity: 1, scale: 0, rotation: 0, y: 0, x: 0 })

            // Logic bay ra: Nếu click thì văng cao và rộng hơn
            const moveUp = isClick ? gsap.utils.random(-150, -80) : 0
            const moveSide = isClick
                ? gsap.utils.random(-100, 100)
                : gsap.utils.random(-60, 60)

            tl.to(shape, {
                scale: 1,
                y: moveUp,
                x: moveSide,
                ease: "back.out(1.7)",
                duration: 0.4,
            })
                .to(
                    shape,
                    {
                        rotation: gsap.utils.random(-180, 180),
                    },
                    "<"
                )
                .to(
                    shape,
                    {
                        y: "110vh",
                        ease: "power1.in",
                        duration: 2,
                        opacity: 0,
                    },
                    0.2
                )
        }

        const triggerAt = (x: number, y: number, isClick = false) => {
            const note = notes[wrapper(index)]
            if (note) {
                gsap.killTweensOf(note)
                gsap.set(note, {
                    left: x,
                    top: y,
                    xPercent: -50,
                    yPercent: -50,
                    position: "fixed",
                    width: noteSize,
                    zIndex: 9998,
                })
                playAnimation(note, isClick)
                index++
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            currentMousePos = { x: e.clientX, y: e.clientY }
            xTo(e.clientX)
            yTo(e.clientY)
            const travelDistance = Math.hypot(
                lastMousePos.x - e.clientX,
                lastMousePos.y - e.clientY
            )
            if (travelDistance > gap) {
                triggerAt(e.clientX, e.clientY)
                lastMousePos = { x: e.clientX, y: e.clientY }
            }
        }

        const handleWheel = (e: WheelEvent) => {
            accumulatedScroll += Math.abs(e.deltaY)
            if (accumulatedScroll > gap) {
                triggerAt(currentMousePos.x, currentMousePos.y)
                accumulatedScroll = 0
            }
        }

        const handleMouseDown = (e: MouseEvent) => {
            if (!pileRef.current) return
            const rect = pileRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            for (let i = 0; i < 4; i++) {
                triggerAt(centerX, centerY, true)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("wheel", handleWheel)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("wheel", handleWheel)
            // Clean up GSAP animations
            notes.forEach(note => gsap.killTweensOf(note))
            if (pileRef.current) gsap.killTweensOf(pileRef.current)
        }
    }, [noteUrls, gap, noteSize])

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
                overflow: "hidden",
                userSelect: "none",
            }}
        >
            <img
                ref={pileRef}
                src={moneyPileUrl}
                style={{
                    position: "fixed",
                    width: pileSize,
                    left: 0,
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: "none",
                    zIndex: 10000,
                    willChange: "transform",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                }}
            />
            {Array.from({ length: 40 }).map((_, i) => (
                <img
                    key={i}
                    ref={(el) => { notesRefs.current[i] = el; }}
                    src={noteUrls[i % noteUrls.length]}
                    style={{
                        position: "fixed",
                        opacity: 0,
                        width: noteSize,
                        left: -500,
                        pointerEvents: "none",
                        willChange: "transform",
                    }}
                />
            ))}
        </div>
    )
}
