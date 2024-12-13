import React from 'react';
import { socialLinks } from '../../data/social';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}