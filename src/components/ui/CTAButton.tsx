import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface CTAButtonProps {
  href: string;
  variant?: 'default' | 'gradient';
  className?: string;
  children: React.ReactNode;
}

export default function CTAButton({ 
  variant = 'default', 
  className = '', 
  children,
  ...props 
}: CTAButtonProps) {
  const baseStyles = "relative text-base font-semibold text-white shadow-xl rounded-full transition-all duration-300 border border-white/10 flex items-center justify-center min-w-[200px] px-8 py-4";
  
  const variants = {
    default: `
      bg-apple-blue
      hover:bg-apple-blue/90
      hover:shadow-2xl
      hover:shadow-apple-blue/30
    `,
    gradient: `
      bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink
      hover:shadow-2xl
      hover:shadow-apple-purple/30
      animate-gradient
      bg-[length:200%_auto]
    `
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      <Button
        {...props}
        variant="cta"
        className={`${baseStyles} ${variants[variant]}`}
      >
        <span className="truncate">{children}</span>
        <span className="ml-3 text-lg shrink-0" aria-hidden="true">→</span>
      </Button>
    </motion.div>
  );
}