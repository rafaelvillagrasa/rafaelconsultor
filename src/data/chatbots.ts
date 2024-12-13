import { Chatbot } from '../types';
import { ChatBubbleBottomCenterTextIcon, UserCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const chatbots: Chatbot[] = [
  {
    id: 'gpt-automatic',
    title: 'GPT_AUTOmatic',
    description: 'Automatiza respuestas comunes y mejora la atención al cliente con este bot optimizado para PYMEs.',
    benefit: 'Reducción de tiempos de respuesta y mejor experiencia del cliente.',
    icon: ChatBubbleBottomCenterTextIcon,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop',
    href: '/recursos/chatbots/gpt-automatic'
  },
  {
    id: 'linkedin-copilot',
    title: 'LinkedIn_Copilot',
    description: 'Ayuda a optimizar perfiles profesionales y publicaciones en LinkedIn.',
    benefit: 'Incrementa la visibilidad en redes profesionales.',
    icon: UserCircleIcon,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop',
    href: '/recursos/chatbots/linkedin-copilot'
  },
  {
    id: 'hago-tu-prompts',
    title: 'Hago_tu_Prompts',
    description: 'Generador de prompts personalizados para mejorar tu contenido digital.',
    benefit: 'Acelera el proceso creativo y mejora la calidad de tus textos.',
    icon: SparklesIcon,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop',
    href: '/recursos/chatbots/hago-tu-prompts'
  }
];