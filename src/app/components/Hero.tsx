import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Rocket, Users, Trophy, Zap } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at bottom left, #183ec2, #eaeefe 70%)',
      }}
    >
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cercles flous décoratifs plus subtils */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Particules subtiles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-900/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content - Taille réduite */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            {/* Badge plus petit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-4 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-gray-700 text-xs font-medium">
                {t({
                  fr: 'Votre partenaire créatif digital',
                  en: 'Your Creative Digital Partner',
                  ar: 'شريكك الإبداعي الرقمي'
                })}
              </span>
            </motion.div>

            {/* Titre principal - Plus petit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900 block">
                  {t({
                    fr: 'Construisons une',
                    en: 'Build a',
                    ar: 'نبني'
                  })}
                </span>
                <span className="text-gray-900 block">
                  {t({
                    fr: 'présence numérique',
                    en: 'Digital Presence',
                    ar: 'حضوراً رقمياً'
                  })}
                </span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent block text-2xl md:text-3xl lg:text-4xl mt-1"
                  animate={{
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  {t({
                    fr: 'qui dépasse toutes les attentes',
                    en: 'Beyond All Expectations',
                    ar: 'يتجاوز كل التوقعات'
                  })}
                </motion.span>
              </h1>
            </motion.div>

            {/* Description plus courte */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed"
            >
              {t({
                fr: 'Des solutions digitales sur mesure, créatives et performantes.',
                en: 'Tailored digital solutions, creative and high-performing.',
                ar: 'حلول رقمية مخصصة، إبداعية وعالية الأداء.'
              })}
            </motion.p>

            {/* Stats plus compactes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 mb-6"
            >
              {[
                { value: '150+', label: { fr: 'Projets', en: 'Projects', ar: 'مشاريع' } },
                { value: '75+', label: { fr: 'Clients', en: 'Clients', ar: 'عملاء' } },
                { value: '3+', label: { fr: 'Ans', en: 'Years', ar: 'سنوات' } },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-200/50"
                >
                  <div className="text-xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{t(stat.label)}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons plus compacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#contact"
                className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t({
                  fr: 'Commencer',
                  en: 'Start',
                  ar: 'ابدأ'
                })}
                <Zap className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#work"
                className="px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg font-medium text-sm border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t({
                  fr: 'Nos réalisations',
                  en: 'Our Work',
                  ar: 'أعمالنا'
                })}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
            className="relative order-2 lg:order-2"
          >
            {/* Effet de glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Image avec animation flottante */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.img
                src="/src/assets/cloutheroF.png"
                alt="Digital Marketing Agency"
                className="relative w-full h-auto drop-shadow-xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.4
                }}
              />
            </motion.div>

            {/* Petits éléments flottants minimalistes */}
            {[
              { icon: Zap, color: 'bg-yellow-400', delay: 0, top: '10%', left: '5%' },
              { icon: Rocket, color: 'bg-blue-500', delay: 0.5, top: '15%', right: '5%' },
              { icon: Trophy, color: 'bg-purple-500', delay: 1, bottom: '15%', left: '10%' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`absolute w-8 h-8 rounded-lg ${item.color} shadow-lg flex items-center justify-center`}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.icon className="w-4 h-4 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator minimal */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 h-7 rounded-full border border-gray-400/50 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1 bg-gray-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}