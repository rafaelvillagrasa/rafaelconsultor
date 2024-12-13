import { motion } from 'framer-motion';
import { Service } from '@/types';
import { fadeInUp } from '@/utils/animations';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="card group hover:scale-[1.02]"
      variants={fadeInUp}
    >
      <div className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white mb-4">
        <service.icon className="h-6 w-6 text-apple-blue" aria-hidden="true" />
        {service.name}
      </div>
      <p className="text-gray-400 mb-6">{service.description}</p>
      <a
        href={`/servicios/${service.name.toLowerCase().replace(/ /g, '-')}`}
        className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300"
      >
        Más información
        <span className="ml-2 text-xl">→</span>
      </a>
    </motion.div>
  );
}