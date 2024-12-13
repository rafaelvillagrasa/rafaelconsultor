import React, { useState, FormEvent } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-lg border-gray-700 bg-dark-accent text-gray-100 shadow-sm focus:border-apple-blue focus:ring-apple-blue"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-lg border-gray-700 bg-dark-accent text-gray-100 shadow-sm focus:border-apple-blue focus:ring-apple-blue"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border-gray-700 bg-dark-accent text-gray-100 shadow-sm focus:border-apple-blue focus:ring-apple-blue"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <div className="pt-4">
        <Button 
          type="submit"
          variant="gradient"
          className="w-full px-6 py-3"
        >
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
}