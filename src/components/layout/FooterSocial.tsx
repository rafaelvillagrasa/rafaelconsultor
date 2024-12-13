import React from 'react';
import { socialLinks } from '../../data/social';

export default function FooterSocial() {
  return (
    <div className="flex justify-center space-x-8 mb-8">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-8 w-8" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}