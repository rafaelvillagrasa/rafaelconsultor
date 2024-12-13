import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <main className="bg-dark">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}