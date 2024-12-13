import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { mainNavigation } from '../../../constants/navigation';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  return (
    <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-secondary px-6 py-6 sm:max-w-sm">
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5" onClick={onClose}>
            <Logo className="h-10" />
          </Link>
          <button
            type="button"
            className="rounded-full p-2.5 text-gray-300 hover:bg-gray-800/50"
            onClick={onClose}
          >
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-8 flow-root">
          <div className="space-y-4">
            {mainNavigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                variant="secondary"
                className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium ${
                  currentPath === item.href 
                    ? 'bg-apple-blue/10 text-apple-blue' 
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
                onClick={onClose}
              >
                {item.name}
              </Button>
            ))}
            <div className="pt-4">
              <Button
                href="/contacto"
                variant="gradient"
                className="w-full text-center py-4"
                onClick={onClose}
              >
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}