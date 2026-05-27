import { motion } from "framer-motion";

type SkillsProps = {
  darkMode: boolean;
};

const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "JPA",
      "Hibernate",
    ],
  },
  {
    title: "Security",
    skills: ["OAuth2", "JWT", "Authentication"],
  },
  {
    title: "Messaging",
    skills: ["Kafka", "Event-Driven Architecture", "Third-Party Integrations"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Docker", "Git", "SonarQube", "Maven"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
];

function Skills({ darkMode }: SkillsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id="skills"
      className={`py-8 md:py-12 ${
        darkMode ? "bg-slate-950" : "bg-slate-100/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-3">
          Skills
        </h2>

        <p
          className={`mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Technologies and tools I work with.
        </p>

        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border ${
                darkMode
                  ? "bg-slate-900/70 border-slate-800 backdrop-blur-md"
                  : "bg-white/70 border-slate-200 shadow-xl hover:shadow-2xl backdrop-blur-md"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-5">
                {group.skills.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={skill}
                    className={`px-3 py-1 rounded-md text-sm ${
                      darkMode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
