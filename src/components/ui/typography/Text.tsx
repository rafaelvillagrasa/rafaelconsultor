import { ReactNode } from 'react';

interface TextProps {
  variant?: 'primary' | 'secondary' | 'muted';
  size?: 'sm' | 'base' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Text({ 
  variant = 'primary',
  size = 'base',
  children, 
  className = '' 
}: TextProps) {
  const variants = {
    primary: 'text-white font-medium',         // Texto blanco con peso medio
    secondary: 'text-gray-100 font-normal',    // Gris muy claro
    muted: 'text-gray-300 font-normal',        // Gris medio-claro
  };

  const sizes = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
  };

  return (
    <p className={`${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </p>
  );
}