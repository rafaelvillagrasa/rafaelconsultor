import React from 'react';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-6">
            <FooterNav />
          </div>
        </div>
        <div className="border-t border-gray-800/50 pt-8">
          <FooterSocial />
          <FooterCopyright />
        </div>
      </Container>
    </footer>
  );
}