import { Link } from 'react-router-dom';
import { mainNavigation } from '../../../constants/navigation';
import Button from '../../ui/Button';

interface DesktopNavProps {
  currentPath: string;
}

export default function DesktopNav({ currentPath }: DesktopNavProps) {
  return (
    <>
      <div className="hidden lg:flex lg:gap-x-8">
        {mainNavigation.map((item) => (
          <Button
            key={item.name}
            href={item.href}
            variant="secondary"
            className={`text-sm font-semibold ${
              currentPath === item.href 
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
    </>
  );
}