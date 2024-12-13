import { motion } from 'framer-motion';
import { Service } from '@/types';
import { fadeInUp } from '@/utils/animations';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const gradients = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-green-400 to-green-600',
    'from-yellow-400 to-yellow-600',
    'from-orange-400 to-orange-600',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className="group bg-background-card rounded-xl p-6 hover:bg-gradient-to-br hover:from-background-card hover:to-background-card/50 border border-white/10 hover:border-white/20 transition-all duration-500"
      variants={fadeInUp}
    >
      <div className="flex items-center gap-x-3 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient} group-hover:scale-110 transition-transform duration-300`}>
          <service.icon 
            className="h-6 w-6 text-white" 
            aria-hidden="true" 
          />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent group-hover:text-gradient animate-gradient">
          {service.name}
        </h3>
      </div>
      
      <p className="text-gray-100 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
        {service.description}
      </p>
      
      <a
        href={`/servicios/${service.name.toLowerCase().replace(/ /g, '-')}`}
        className={`inline-flex items-center text-white bg-gradient-to-r ${gradient} bg-clip-text text-transparent hover:text-white transition-colors duration-300`}
      >
        Más información
        <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </motion.div>
  );
}