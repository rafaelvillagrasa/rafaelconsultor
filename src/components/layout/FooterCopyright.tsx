import React from 'react';

export default function FooterCopyright() {
  return (
    <p className="text-center text-sm leading-6 text-gray-500">
      &copy; {new Date().getFullYear()} Rafael Villagrasa Miranda. Todos los derechos reservados.
    </p>
  );
}