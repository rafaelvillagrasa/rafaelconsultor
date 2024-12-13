import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/ui/typography';
import { fadeInUp } from '@/utils/animations';

export default function ServicesHeader() {
  return (
    <motion.div
      className="text-center mb-16"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <Heading level={2} className="text-gradient animate-gradient mb-6">
        ¿Cómo puedo ayudarte?
      </Heading>
      <Text variant="secondary" size="lg" className="max-w-2xl mx-auto">
        Servicios diseñados para impulsar tu negocio en el mundo digital
      </Text>
    </motion.div>
  );
}