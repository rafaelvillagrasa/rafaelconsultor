import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  variant = 'primary',
  size = 'md',
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'relative rounded-full font-semibold transition-all duration-300 ease-in-out flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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