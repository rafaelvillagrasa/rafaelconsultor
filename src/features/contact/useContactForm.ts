import { useState, FormEvent } from 'react';
import { contactInfo } from '@/data/contact';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aquí iría la lógica real de envío
      const mailtoLink = `mailto:${contactInfo.email}?subject=Consulta de ${formData.name}&body=${formData.message}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    submitStatus,
    handleSubmit
  };
}