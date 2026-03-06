const projects = [
  {
    title: "AI Personal OS",
    description: "Multi agent AI system to manage life, goals and productivity"
  },
  {
    title: "eDiscovery Client",
    description: "Download client handling large legal data pipelines"
  },
  {
    title: "Blockchain Energy Trading",
    description: "Decentralized solar energy marketplace"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((p,i)=>(
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.description}</p>
          </div>
        ))}

      </div>

    </section>
  )
}