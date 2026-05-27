import { motion } from "framer-motion";
type ExperienceProps = {
  darkMode: boolean;
};

function Experience({ darkMode }: ExperienceProps) {
  const experiences = [
    {
      company: "Smarten Spaces",
      role: "Senior Software Engineer",
      period: "2021 - 2024",
      project: "Space Booking Platform",
      points: [
        "Developed scalable backend services for enterprise booking and workspace management.",
        "Implemented OAuth and identity-based authentication mechanisms for secure access control.",
        "Integrated third-party systems including communication and identity services.",
        "Built event-driven workflows using Kafka and Azure Event Hub for booking-related processing.",
        "Collaborated across microservices and supported SIT, UAT, and production releases.",
      ],
    },
    {
      company: "L&T Infotech",
      role: "Software Engineer",
      period: "2019 - 2020",
      project: "Health Insurance Eligibility System",
      points: [
        "Contributed across full SDLC from requirements to production deployment.",
        "Developed Java and Spring-based web applications using Oracle database.",
        "Built citizen-facing workflows using JSP, JavaScript, and MVC architecture.",
        "Implemented reusable components and scheduled batch-processing solutions.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-8 md:py-12 ${
        darkMode ? "bg-slate-950" : "bg-slate-100/70"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Professional Experience
        </h2>

        <p
          className={`mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Professional journey and enterprise experience.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              key={exp.company}
              className={`rounded-xl p-6 border hover:border-cyan-400 transition-all duration-300 ${
                darkMode
                  ? "bg-slate-900/70 border-slate-800 backdrop-blur-md"
                  : "bg-white/70 border-slate-200 shadow-lg backdrop-blur-md"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>

                  <p className="text-cyan-400">{exp.company}</p>
                </div>

                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  {exp.period}
                </p>
              </div>

              <p
                className={`mb-4 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {exp.project}
              </p>

              <ul
                className={`space-y-2 list-disc list-inside ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
