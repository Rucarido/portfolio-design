export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
    },
    {
      title: "Frontend & Web",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Areas of Expertise",
      skills: ["Full-Stack Development", "Cybersecurity Basics", "Image Processing", "OpenCV"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Quick Learner", "Adaptability"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 space-scene-alt relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">My Toolkit</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/20 text-white rounded-lg border border-primary/30 hover:border-cyan-400/60 hover:bg-primary/40 hover:text-cyan-300 transition-all text-sm font-medium glow-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
