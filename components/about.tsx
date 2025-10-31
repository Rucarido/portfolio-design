export default function About() {
  return (
    <section id="about" className="py-20 px-6 space-scene relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl blur-2xl opacity-30" />
            <div className="relative w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-xl" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                My Journey
              </h3>
              <p className="text-white/80 leading-relaxed">
                I'm currently pursuing an undergraduate degree in B. Tech Electronics and Computer Engineering at VIT
                Chennai (Class of 2028). I started my coding journey with curiosity and have developed a genuine passion
                for building things with code.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                My Passion
              </h3>
              <p className="text-white/80 leading-relaxed">
                I have a deep passion towards learning computer programming. I enjoy coding difficult problems even
                though they challenge me! There's something magical about solving complex problems and bringing ideas to
                life through code.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Current Focus
              </h3>
              <p className="text-white/80 leading-relaxed">
                I'm actively learning full-stack development and cybersecurity. My toolkit includes Python, C, C++,
                Java, and React. I'm determined to excel in this field and make a meaningful impact in the tech
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
