import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { resources } from '../../data/resources';
import ResourceCard from './ResourceCard';

export default function Resources() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Herramientas y consejos para tu negocio
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Recursos gratuitos para impulsar tu presencia digital
        </p>
      </div>
      <motion.div 
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {resources.map((resource, index) => (
          <ResourceCard key={resource.title} resource={resource} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}