import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { staggerChildren } from '@/utils/animations';

export default function ServicesGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {services.map((service, index) => (
        <ServiceCard 
          key={service.name} 
          service={service} 
          index={index} 
        />
      ))}
    </motion.div>
  );
}