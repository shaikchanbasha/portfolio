import { motion } from "framer-motion";

type ContactProps = {
  darkMode: boolean;
};
function Contact({ darkMode }: ContactProps) {
  return (
    <section
      id="contact"
      className={`py-8 md:py-12 ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-3">
          Contact
        </h2>
        <p
          className={`mb-10 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Let's connect and discuss opportunities.
        </p>
        <p className={`mb-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Open to backend and microservices opportunities. Feel free to connect.
        </p>

        <div className="space-y-4">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className={darkMode ? "text-slate-300" : "text-slate-700"}
          >
            📧 chanbashaprofile@gmail.com
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className={darkMode ? "text-slate-300" : "text-slate-700"}
          >
            📱 +91 9491644008
          </motion.p>

          <div className="flex justify-center gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 text-slate-900 px-5 py-2 rounded-lg font-medium"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              className={`border hover:border-cyan-400 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-lg ${
                darkMode
                  ? "border-slate-600 text-white"
                  : "border-slate-400 text-slate-900"
              }`}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
