import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="bg-transparent p-2 rounded-lg">
        <img
          src="/logo.svg"
          alt="Rafael Villagrasa Miranda Logo"
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
}