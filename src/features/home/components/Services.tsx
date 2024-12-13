import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { staggerChildren } from '@/utils/animations';

export default function Services() {
  return (
    <Section className="bg-dark-secondary">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Cómo puedo ayudarte?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Servicios diseñados para impulsar tu negocio en el mundo digital
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}