import { motion } from 'framer-motion';
import { Heading, Text } from '../ui/typography';
import Button from '../ui/Button';
import { fadeInUp } from '../../utils/animations';

export default function ServicesCTA() {
  return (
    <motion.div
      className="text-center"
      variants={fadeInUp}
    >
      <Heading level={2} className="text-gradient animate-gradient mb-6">
        ¿Listo para transformar tu negocio?
      </Heading>
      <Text variant="secondary" size="lg" className="mb-8">
        Descubre cómo puedo ayudarte a alcanzar tus objetivos
      </Text>
      <Button href="/contacto" variant="gradient" size="lg">
        Contáctame ahora
      </Button>
    </motion.div>
  );
}