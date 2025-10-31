import { Mail, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 space-scene-alt relative">
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Let's Connect</h2>
          <p className="text-xl text-white/75">
            I'm always open to new opportunities, collaborations, and learning experiences. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:aakashhariram22@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/30 hover:border-cyan-400/60 transition-all font-medium glow-accent"
          >
            <Mail size={20} />
            aakashhariram22@gmail.com
          </a>
          <a
            href="https://github.com/Rucarido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/30 hover:border-cyan-400/60 transition-all font-medium glow-accent"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-white/70">
            Looking for help with learning programming and open to collaborations.
          </p>
        </div>
      </div>
    </section>
  )
}
