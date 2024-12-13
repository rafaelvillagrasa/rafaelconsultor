import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`pt-32 pb-24 sm:pt-40 sm:pb-32 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}