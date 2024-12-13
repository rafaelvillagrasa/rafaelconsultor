import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import ContactForm from '../components/forms/ContactForm';
import { fadeInUp } from '../utils/animations';

export default function Contact() {
  return (
    <main className="bg-dark">
      <Section>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            ¡Hablemos sobre tu proyecto!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Contáctame para una consultoría gratuita y descubre cómo puedo ayudarte
          </p>
        </motion.div>
        
        <div className="mt-16 max-w-xl mx-auto">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Envíame un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}