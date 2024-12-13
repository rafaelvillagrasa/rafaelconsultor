import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { staggerChildren } from '@/utils/animations';

export default function Services() {
  return (
    <Section className="bg-dark-secondary">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent sm:text-4xl">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Servicios diseñados para impulsar tu negocio en el mundo digital
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {services.map((service, index) => (
          <ScrollReveal key={service.name} delay={index * 0.1}>
            <ServiceCard service={service} index={index} />
          </ScrollReveal>
        ))}
      </motion.div>
    </Section>
  );
}