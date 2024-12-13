import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ContactForm from '../forms/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import CTAButton from '../ui/CTAButton';
import { fadeInUp } from '../../utils/animations';

export default function Contact() {
  return (
    <Section className="bg-dark-secondary">
      <motion.div
        className="mx-auto max-w-2xl"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            ¡Hablemos sobre tu proyecto!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Contáctame para una consultoría gratuita y descubre cómo puedo ayudarte
          </p>
          <div className="mt-8">
            <CTAButton href="/contacto">
              Contáctame para una consultoría gratuita
              <span className="ml-2 text-xl">→</span>
            </CTAButton>
          </div>
        </div>
        
        <div className="mt-12">
          <ContactForm />
        </div>
        
        <div className="mt-12">
          <SocialLinks />
        </div>
      </motion.div>
    </Section>
  );
}