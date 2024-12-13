import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export default function ExperienceSection() {
  return (
    <motion.div
      className="relative bg-dark-card rounded-2xl p-8"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
        Experiencia
      </h2>
      <div className="space-y-8">
        {experience.map((item) => (
          <motion.div
            key={item.title}
            className="relative pl-8 border-l-2 border-blue-400/30 hover:border-blue-400 transition-colors duration-300"
            variants={fadeInUp}
          >
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400" />
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-blue-300">{item.period}</p>
            <p className="mt-4 text-gray-100">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}