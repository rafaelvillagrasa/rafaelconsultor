import { motion } from 'framer-motion';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import { staggerChildren } from '../../utils/animations';

export default function ServicesList() {
  return (
    <motion.div
      className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </dl>
    </motion.div>
  );
}