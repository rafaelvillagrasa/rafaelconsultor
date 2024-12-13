import { motion } from 'framer-motion';
import { chatbots } from '../../data/chatbots';
import ChatbotCard from './ChatbotCard';
import { staggerChildren } from '../../utils/animations';

export default function ChatbotsSection() {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Chatbots destacados para emprendedores
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Herramientas de IA diseñadas para impulsar tu negocio
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {chatbots.map((chatbot) => (
          <ChatbotCard key={chatbot.id} chatbot={chatbot} />
        ))}
      </motion.div>
    </section>
  );
}