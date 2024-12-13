import { motion } from 'framer-motion';
import { resources } from '../../data/resources';
import ResourceCard from './ResourceCard';
import { staggerChildren } from '../../utils/animations';

export default function ResourcesList() {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {resources.map((resource, index) => (
        <ResourceCard key={resource.title} resource={resource} index={index} />
      ))}
    </motion.div>
  );
}