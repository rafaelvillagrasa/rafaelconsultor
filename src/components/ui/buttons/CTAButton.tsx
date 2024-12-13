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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      <Button
        {...props}
        variant="cta"
        className={`text-lg font-semibold px-8 py-4 ${className}`}
      >
        <span className="truncate">{children}</span>
        <span className="ml-3 text-lg shrink-0" aria-hidden="true">→</span>
      </Button>
    </motion.div>
  );
}