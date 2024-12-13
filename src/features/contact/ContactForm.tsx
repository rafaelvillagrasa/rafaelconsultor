import { motion } from 'framer-motion';
import { Button } from '@/components/ui/buttons';
import useContactForm from './useContactForm';

export default function ContactForm() {
  const { formData, setFormData, isSubmitting, submitStatus, handleSubmit } = useContactForm();

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>

      <div className="pt-4">
        <Button 
          type="submit"
          variant="gradient"
          className="w-full px-6 py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : 'Enviar mensaje'}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-sm mt-2"
        >
          ¡Mensaje enviado con éxito!
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-2"
        >
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </motion.div>
      )}
    </motion.form>
  );
}