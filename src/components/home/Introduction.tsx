import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Introduction() {
  return (
    <Section className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Quién soy?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Soy Rafael Villagrasa Miranda, consultor digital con experiencia en estrategias de marketing,
            redes sociales y herramientas tecnológicas. Ayudo a emprendedores y PYMEs a maximizar su
            potencial con soluciones prácticas y personalizadas.
          </p>
          <div className="mt-8">
            <Button href="/sobre-mi">
              Conoce más sobre mí
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[4/3] w-full"
        >
          <img
            src="/profile.jpg"
            alt="Rafael Villagrasa Miranda"
            className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </Section>
  );
}