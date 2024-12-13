import { motion } from 'framer-motion';
import { values } from '../../data/values';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export default function ValuesSection() {
  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
        Valores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
          <motion.div
            key={value.title}
            className="relative group"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-3">
              <value.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" aria-hidden="true" />
              <h3 className="text-lg">{value.title}</h3>
            </div>
            <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}