import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/9] w-full rounded-2xl bg-dark-accent object-cover sm:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={project.date} className="text-gray-400">
            {project.date}
          </time>
          {project.category && (
            <span className="relative z-10 rounded-full bg-dark-accent px-3 py-1.5 font-medium text-gray-300">
              {project.category}
            </span>
          )}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            {project.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-400">{project.description}</p>
          {project.impact && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-300">Impacto:</h4>
              <p className="mt-2 text-sm text-gray-400">{project.impact}</p>
            </div>
          )}
        </div>
        <div className="mt-8">
          <a
            href={project.href}
            className="text-sm font-semibold leading-6 text-apple-blue hover:text-apple-blue/80"
          >
            Ver más detalles <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}