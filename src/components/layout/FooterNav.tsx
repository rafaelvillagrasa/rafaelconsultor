import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavigation } from '../../constants/navigation';

export default function FooterNav() {
  return (
    <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8" aria-label="Footer">
      {footerNavigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-base text-gray-400 hover:text-white transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}