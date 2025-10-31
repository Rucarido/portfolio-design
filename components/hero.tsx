"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 400

    // Animation variables
    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const baseRadius = 100

      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius)

      gradient.addColorStop(0, `rgba(30, 144, 255, ${0.8 + Math.sin(time) * 0.2})`)
      gradient.addColorStop(0.3, `rgba(0, 212, 255, 1)`)
      gradient.addColorStop(0.6, `rgba(255, 0, 128, 1)`)
      gradient.addColorStop(0.8, `rgba(255, 107, 0, 1)`)
      gradient.addColorStop(1, `rgba(255, 215, 0, ${0.3 + Math.sin(time + 1) * 0.2})`)

      // Draw rotating orb with 3D effect
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(time * 0.5)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2)
      ctx.fill()

      // Add inner glow
      ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time * 2) * 0.05})`
      ctx.beginPath()
      ctx.arc(0, 0, baseRadius * 0.6, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      // Draw outer ring
      ctx.strokeStyle = `rgba(30, 144, 255, ${0.3 + Math.sin(time) * 0.2})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, baseRadius + 15, 0, Math.PI * 2)
      ctx.stroke()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center mb-8">
          <canvas
            ref={canvasRef}
            className="w-80 h-80 drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(30, 144, 255, 0.3))" }}
          />
        </div>

        <div className="space-y-6">
          <p className="text-primary text-sm tracking-widest font-semibold uppercase">Welcome to my universe</p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Aakash Hariram
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Full-Stack Developer & Cybersecurity Enthusiast
          </p>
        </div>

        <p className="text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
          B. Tech student at VIT Chennai exploring the frontiers of web development and cybersecurity. Building
          innovative solutions with modern tech stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-primary/50"
          >
            View My Work <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-white hover:bg-primary/10 rounded-full font-semibold transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        <div className="pt-12 animate-bounce">
          <ChevronDown size={24} className="text-white/50 mx-auto" />
        </div>
      </div>
    </section>
  )
}
