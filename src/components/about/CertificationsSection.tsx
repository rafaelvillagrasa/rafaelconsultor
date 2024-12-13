import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { staggerChildren } from '../../utils/animations';

export default function CertificationsSection() {
  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <ScrollReveal>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
          Certificaciones
        </h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.title} delay={index * 0.1}>
            <div className="bg-dark-card p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="h-12 w-12 mb-4">
                <img
                  src={cert.icon}
                  alt={cert.provider}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{cert.provider}</p>
              <p className="text-gray-100">{cert.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </motion.div>
  );
}