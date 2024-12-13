import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { Service } from '../types';

export const services: Service[] = [
  {
    name: 'Consultoría en Estrategias Digitales',
    description: 'Diseñamos planes prácticos para optimizar la presencia en línea de tu negocio.',
    icon: ChartBarIcon,
  },
  {
    name: 'Optimización de Redes Sociales',
    description: 'Mejora tus perfiles y crea contenido estratégico para maximizar tu impacto.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Automatización Básica',
    description: 'Implementamos soluciones accesibles para simplificar tus tareas repetitivas.',
    icon: CogIcon,
  },
  {
    name: 'Capacitación en Marketing Digital',
    description: 'Aprende a gestionar tus redes sociales y usar herramientas digitales efectivamente.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Chatbots Básicos',
    description: 'Automatiza respuestas a preguntas frecuentes y mejora la atención al cliente.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Soporte en Proyectos Digitales',
    description: 'Organiza y ejecuta tus proyectos con herramientas y metodologías efectivas.',
    icon: ClipboardDocumentCheckIcon,
  }
];