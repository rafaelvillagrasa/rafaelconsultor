import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'gradient' | 'cta';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  variant = 'primary', 
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'rounded-full text-base font-semibold transition-all duration-300 ease-in-out flex items-center justify-center whitespace-nowrap px-6 py-3';
  
  const variants = {
    primary: 'bg-apple-blue text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-apple-blue/30',
    secondary: 'text-gray-200 hover:text-white',
    gradient: 'bg-gradient-to-r from-apple-blue to-apple-purple text-white hover:shadow-lg hover:shadow-apple-purple/30',
    cta: 'bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink text-white shadow-xl hover:shadow-2xl hover:shadow-apple-purple/30 animate-gradient bg-[length:200%_auto]'
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={buttonStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}