import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OurWork } from './components/OurWork';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <OurWork />
          <About />
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
