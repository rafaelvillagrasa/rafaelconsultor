export interface Certification {
  title: string;
  provider: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: 'IA Generativa y Productividad Digital',
    provider: 'Microsoft y LinkedIn',
    description: 'Especialización en herramientas de IA y mejora de productividad para empresas.',
    icon: '/icons/microsoft.svg'
  },
  {
    title: 'Marketing Digital y Transformación Digital',
    provider: 'Google y Open University',
    description: 'Estrategias de marketing digital y transformación para PYMEs.',
    icon: '/icons/google.svg'
  },
  {
    title: 'Gestión de Proyectos con Metodologías Ágiles',
    provider: 'LinkedIn Learning',
    description: 'Aplicación de metodologías ágiles en la gestión de proyectos digitales.',
    icon: '/icons/linkedin.svg'
  }
];