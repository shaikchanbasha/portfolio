import { motion } from "framer-motion";
import profileImg from "../assets/profile_photo.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
type HeroProps = {
  darkMode: boolean;
};

function Hero({ darkMode }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`min-h-[85vh] flex items-center pt-32 md:pt-24 text-center lg:text-left ${
        darkMode
          ? "linear-gradient-to-br from-slate-950 to-slate-900"
          : "linear-gradient-to-br from-slate-50 to-slate-200"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        {/* Left Content */}
        <div>
          <p className="text-cyan-400 font-medium mb-3">Hello, I'm</p>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Chanbasha Shaik
          </h1>

          <h2
            className={`text-2xl md:text-3xl mb-6 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Java Backend Developer
          </h2>

          <p
            className={`max-w-2xl leading-8 text-lg mb-6 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Backend developer with 5+ years of experience building scalable
            microservices, REST APIs, authentication systems, and event-driven
            integrations using Java and Spring Boot.
          </p>

          <div className="flex flex-row justify-center lg:justify-start gap-2 md:gap-3">
            {/* Primary */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="whitespace-nowrap px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold
             hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>View Projects</span>
              </div>
            </motion.a>

            {/* Secondary */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`${import.meta.env.BASE_URL}Chanbasha_Shaik_Resume.pdf`}
              download
              className="whitespace-nowrap px-4 md:px-6 py-2.5 md:py-3 rounded-xl border border-cyan-400 text-cyan-400
             hover:bg-cyan-400/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <FaDownload />
                <span>Download Resume</span>
              </div>
            </motion.a>

            {/* Ghost */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="whitespace-nowrap px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-slate-500 hover:text-cyan-400
              transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin />
                <span>Contact Me</span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Right Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end mt-6 lg:mt-0"
        >
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400
              shadow-[0_0_60px_rgba(34,211,238,0.45)]
              hover:scale-105 transition-all duration-500
              ${darkMode ? "bg-slate-800" : "bg-slate-200"}`}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover object-[center_5%] scale-125"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
