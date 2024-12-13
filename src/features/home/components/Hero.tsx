import { motion } from 'framer-motion';
import { Button, CTAButton } from '@/components/ui/buttons';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-dark-secondary/20 pt-24">
      <Container>
        <div className="flex min-h-[75vh] items-center justify-between gap-12 py-12">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Soluciones digitales prácticas para emprendedores
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Te ayudo a optimizar tu negocio con estrategias digitales accesibles y efectivas. 
              Transforma tu presencia digital y automatiza tareas para impulsar tu crecimiento.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                href="/servicios" 
                variant="primary"
                className="text-lg"
              >
                Descubre mis servicios
              </Button>
              <CTAButton 
                href="/contacto" 
                variant="gradient"
                className="text-lg"
              >
                Contáctame para una consultoría gratuita
              </CTAButton>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block flex-1 max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Dashboard de análisis digital"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-dark/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}