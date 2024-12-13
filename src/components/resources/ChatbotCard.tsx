import { motion } from 'framer-motion';
import { Chatbot } from '../../types';
import { fadeInUp } from '../../utils/animations';

interface ChatbotCardProps {
  chatbot: Chatbot;
}

export default function ChatbotCard({ chatbot }: ChatbotCardProps) {
  return (
    <motion.div
      className="flex flex-col bg-dark-secondary rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
      variants={fadeInUp}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={chatbot.image}
          alt={`${chatbot.title} preview`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <chatbot.icon className="h-6 w-6 text-apple-blue" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">
            {chatbot.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-400">
          {chatbot.description}
        </p>
        
        <div className="mt-4 p-4 bg-dark-accent rounded-lg">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-apple-blue">Beneficio:</span> {chatbot.benefit}
          </p>
        </div>
        
        <div className="mt-6">
          <a
            href={chatbot.href}
            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300"
          >
            Descubrir más
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}