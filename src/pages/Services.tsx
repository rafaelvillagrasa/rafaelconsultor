import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Heading, Text } from '../components/ui/typography';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';
import { fadeInUp } from '../utils/animations';

export default function Services() {
  return (
    <main className="bg-dark">
      <Section>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Heading level={1} className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Servicios Diseñados para Impulsar tu Negocio
          </Heading>
          <Text variant="secondary" size="lg" className="text-gray-100">
            Soluciones prácticas y efectivas para emprendedores y PYMEs
          </Text>
        </motion.div>
        
        <div className="mt-16 space-y-20">
          <ServicesList />
          <ServicesCTA />
        </div>
      </Section>
    </main>
  );
}