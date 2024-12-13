import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface BaseButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function BaseButton({ 
  href, 
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: BaseButtonProps) {
  if (href) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}