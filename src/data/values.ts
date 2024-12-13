import { 
  LightBulbIcon,
  WrenchScrewdriverIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export interface Value {
  title: string;
  description: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export const values: Value[] = [
  {
    title: 'Innovación',
    description: 'Comprometido con adoptar herramientas tecnológicas que impulsen la eficiencia y creatividad de los negocios.',
    icon: LightBulbIcon
  },
  {
    title: 'Enfoque Práctico',
    description: 'Diseño de soluciones simples, accesibles y alineadas a las necesidades reales de los clientes.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Compromiso',
    description: 'Trabajo dedicado para asegurar el éxito y la satisfacción de cada cliente.',
    icon: HeartIcon
  }
];