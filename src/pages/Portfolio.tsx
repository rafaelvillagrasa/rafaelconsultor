import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <main className="bg-dark">
      <Section>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Proyectos Destacados
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Conoce algunos de los proyectos en los que he trabajado y los resultados obtenidos
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>
    </main>
  );
}