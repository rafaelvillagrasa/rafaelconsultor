import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Heading, Text } from '../components/ui/typography';
import ProfileSection from '../components/about/ProfileSection';
import ExperienceSection from '../components/about/ExperienceSection';
import ValuesSection from '../components/about/ValuesSection';
import CertificationsSection from '../components/about/CertificationsSection';
import { fadeInUp } from '../utils/animations';

export default function AboutMe() {
  return (
    <main className="bg-dark">
      <Section>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Heading level={1} className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Conoce más sobre mí
          </Heading>
          <Text variant="secondary" size="lg" className="text-gray-100">
            Mi pasión es diseñar soluciones accesibles y efectivas que potencien el éxito de los negocios
          </Text>
        </motion.div>
        
        <div className="mt-16 space-y-20">
          <ProfileSection />
          <ExperienceSection />
          <CertificationsSection />
          <ValuesSection />
        </div>
      </Section>
    </main>
  );
}