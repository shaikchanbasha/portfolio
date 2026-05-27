import { motion } from "framer-motion";
type AboutProps = {
  darkMode: boolean;
};

function About({ darkMode }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id="about"
      className={`py-8 md:py-12 ${
        darkMode ? "bg-slate-950" : "bg-slate-100/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-5xl tracking-tight font-bold mb-3 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Get to know more about my background and experience.
        </motion.p>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`leading-8 mb-2 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Experienced Java backend developer with 5+ years of experience
            building scalable enterprise applications using Spring Boot, REST
            APIs, microservices, and event-driven architecture.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`leading-8  mb-4${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Worked on authentication systems, third-party integrations,
            Kafka-based messaging, and communication services. Currently
            expanding frontend expertise using React and TypeScript while
            continuing to focus on backend engineering.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
