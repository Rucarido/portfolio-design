import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Open Source Yearbook",
    description:
      "A user-interactive platform where users can create, add, and share their personal profiles, complete with memories and bio data.",
    tags: ["Full-Stack", "Web App", "React"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Image Processing Pipeline",
    description:
      "A Python project using OpenCV that reads images and processes various tasks, such as converting to grayscale, detecting edges, and more.",
    tags: ["Python", "OpenCV", "Image Processing"],
    links: {
      github: "#",
    },
  },
  {
    title: "College Team Projects",
    description:
      "Collaborated with teams at VIT Chennai on various academic projects, focusing on backend logic and practical problem-solving.",
    tags: ["Collaboration", "Teamwork", "Academics"],
    links: {},
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 space-scene relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden glow-accent"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300 text-white">
                  {project.title}
                </h3>
                <p className="text-white/75 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/40 font-medium hover:bg-cyan-500/30 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
