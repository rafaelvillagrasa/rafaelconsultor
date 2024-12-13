import { motion } from 'framer-motion';
import { Heading, Text } from '../ui/typography';
import Button from '../ui/Button';
import { fadeInUp } from '../../utils/animations';

export default function ProfileSection() {
  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={fadeInUp}
    >
      <div>
        <Heading level={2} className="text-gradient animate-gradient mb-6">
          ¿Quién soy?
        </Heading>
        <Text variant="secondary" size="lg" className="mb-8">
          Soy Rafael Villagrasa Miranda, consultor digital con más de 6 años ayudando a emprendedores 
          y PYMEs a transformar ideas en resultados reales. Mi pasión es diseñar soluciones accesibles 
          y efectivas que potencien el éxito de los negocios.
        </Text>
        <Button href="/servicios" variant="gradient" size="lg">
          Descubre cómo puedo ayudarte
        </Button>
      </div>
      <motion.div
        className="relative aspect-[4/3] w-full"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/profile.jpg"
          alt="Rafael Villagrasa Miranda"
          className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl bg-white"
        />
      </motion.div>
    </motion.div>
  );
}