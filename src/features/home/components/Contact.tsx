import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { CTAButton } from '@/components/ui/buttons';
import { ContactForm } from '@/features/contact';

export default function Contact() {
  return (
    <Section className="bg-dark-secondary">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¡Hablemos sobre tu proyecto!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Contáctame para una consultoría gratuita y descubre cómo puedo ayudarte
        </p>
        <div className="mt-8">
          <CTAButton href="/contacto" variant="gradient">
            Contáctame para una consultoría gratuita
          </CTAButton>
        </div>
      </motion.div>
      
      <div className="mt-16 max-w-xl mx-auto">
        <div className="card p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}