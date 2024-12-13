import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { mainNavigation } from '../../constants/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-secondary/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <Container>
        <nav className="flex items-center justify-between py-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <Logo className="h-14 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {mainNavigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                variant="secondary"
                className={`text-sm font-semibold ${
                  location.pathname === item.href 
                    ? 'text-apple-blue' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href="/contacto" variant="gradient">
              Contáctame
            </Button>
          </div>
        </nav>
      </Container>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark-secondary/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <Logo className="h-10" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700/50">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    variant="secondary"
                    className={`w-full text-left ${
                      location.pathname === item.href 
                        ? 'text-apple-blue' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
              <div className="py-6">
                <Button
                  href="/contacto"
                  variant="gradient"
                  className="w-full"
                >
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}