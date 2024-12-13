import { motion } from 'framer-motion';
import { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={resource.image}
          alt={resource.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">
            {resource.title}
          </h3>
          <p className="mt-3 text-base text-gray-500">
            {resource.description}
          </p>
        </div>
        <div className="mt-6">
          <a
            href={resource.href}
            className="text-base font-semibold text-blue-600 hover:text-blue-500"
          >
            Descargar recurso
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}