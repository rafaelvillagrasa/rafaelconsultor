import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Container from '../../ui/Container';
import Logo from '../../ui/Logo';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import { useScrollState } from '../../../hooks/useScrollState';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollState();
  const location = useLocation();

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-secondary/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <Container>
        <nav className="flex items-center justify-between py-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <Logo className="h-12 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="rounded-full p-2.5 text-gray-300 hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <DesktopNav currentPath={location.pathname} />
        </nav>
      </Container>

      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={location.pathname}
      />
    </header>
  );
}