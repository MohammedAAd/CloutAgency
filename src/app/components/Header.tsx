import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
      href: '#home'
    },
    { 
      label: { fr: 'À propos', en: 'About', ar: 'من نحن' },
      href: '#about'
    },
    { 
      label: { fr: 'Services', en: 'Services', ar: 'الخدمات' },
      href: '#services'
    },
    { 
      label: { fr: 'Nos travaux', en: 'Our Work', ar: 'أعمالنا' },
      href: '#work'
    },
    { 
      label: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
      href: '#contact'
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo plus grand sans texte */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/src/assets/logo_clout.png" 
            alt="CLOUT Agency Logo"
            className="h-12 w-auto object-contain" // Augmenté de h-12 à h-16
            onError={(e) => {
              console.error('Erreur chargement logo');
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#183ec2] ${
                scrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
              whileHover={{ y: -2 }}
            >
              {t(link.label)}
            </motion.a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <motion.button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200 hover:border-[#183ec2] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">{language}</span>
          </motion.button>

          {showLangMenu && (
            <motion.div
              className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[120px]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {(['fr', 'en', 'ar'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    language === lang ? 'bg-blue-50 text-[#183ec2] font-medium' : 'text-gray-700'
                  }`}
                >
                  {lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'العربية'}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </motion.header>
  );
}