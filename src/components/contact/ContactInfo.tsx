import { contactInfo } from '../../data/contact';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="card p-6 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </h3>
        <a 
          href={`mailto:${contactInfo.email}`}
          className="text-gray-400 hover:text-apple-blue transition-colors duration-300 text-lg"
        >
          {contactInfo.email}
        </a>
      </div>
      
      <div className="card p-6 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-apple-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Teléfono
        </h3>
        <a 
          href={`tel:${contactInfo.phone}`}
          className="text-gray-400 hover:text-apple-blue transition-colors duration-300 text-lg"
        >
          {contactInfo.phone}
        </a>
      </div>
      
      <div className="card p-6 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-apple-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </h3>
        <a 
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-apple-blue transition-colors duration-300 text-lg inline-flex items-center"
        >
          Ver perfil profesional
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}