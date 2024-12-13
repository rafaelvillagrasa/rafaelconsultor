import { motion } from 'framer-motion';
import { Button } from '@/components/ui/buttons';
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
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Button 
                href="/servicios" 
                variant="primary"
                size="lg"
                className="group relative overflow-hidden hover:scale-105"
              >
                <span className="relative z-10">Descubre mis servicios</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                href="/contacto" 
                variant="gradient"
                size="lg"
                className="group relative overflow-hidden hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Contáctame para una consultoría gratuita
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block flex-1 max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2940&auto=format&fit=crop"
                alt="Visualización de datos y análisis digital"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              
              {/* Elementos decorativos flotantes */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}