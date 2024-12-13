import { ComponentProps } from 'react';

export interface Chatbot {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: (props: ComponentProps<'svg'>) => JSX.Element;
  image: string;
  href: string;
}