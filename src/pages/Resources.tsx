import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ResourcesList from '../components/resources/ResourcesList';
import ChatbotsSection from '../components/resources/ChatbotsSection';
import { fadeInUp } from '../utils/animations';

export default function Resources() {
  return (
    <main className="bg-dark">
      <Section>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Herramientas y Consejos para tu Negocio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Recursos gratuitos para impulsar tu presencia digital
          </p>
        </motion.div>
        
        <div className="mt-16">
          <ResourcesList />
        </div>

        <ChatbotsSection />
      </Section>
    </main>
  );
}