import { motion } from "framer-motion";

type ProjectsProps = {
  darkMode: boolean;
};
const projects = [
  {
    title: "Authentication Service",
    tech: "Spring Boot • JWT • OAuth2 • MySQL",
    description:
      "Authentication and authorization service implementing JWT security, OAuth2 login, and role-based access control.",
    github: "#",
  },
  {
    title: "Movie Booking Microservices",
    tech: "Spring Boot • Kafka • Docker • MySQL",
    description:
      "Microservices-based movie booking platform with theater, movie, and show services using Kafka event-driven communication.",
    github: "#",
  },
  {
    title: "Ticket Booking System",
    tech: "Spring Boot • Redis • JPA • Docker",
    description:
      "Ticket booking application using Redis caching and optimized booking workflows for better performance and scalability.",
    github: "#",
  },
];

function Projects({ darkMode }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={`py-8 md:py-12 ${
        darkMode ? "bg-slate-950" : "bg-slate-100/70"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6"
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
      >
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-3">
          Featured Projects
        </h2>
        <p
          className={`mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Backend and microservices projects built for learning and practice.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl p-6 border hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ${
                darkMode
                  ? "bg-slate-900/70 border-slate-800 backdrop-blur-md"
                  : "bg-white/70 border-slate-200 shadow-lg backdrop-blur-md"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-cyan-400 text-sm mb-3">{project.tech}</p>

              <p
                className={`leading-7 mb-5 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                GitHub →
              </motion.a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
