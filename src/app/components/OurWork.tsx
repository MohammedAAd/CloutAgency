import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function OurWork() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      image: '/src/assets/abfaraj_logo.jpg',
      title: 'AB Faraj',
      category: 'Logo & Branding',
      description: 'نادي الأب فرج لكرة القدم - Club AB Faraj Football',
      link: null
    },
    {
      image: '/src/assets/autoecole-ALMATAR-ad-final.png',
      title: 'Auto-école ALMATAR',
      category: 'Publicité',
      description: 'Campagne publicitaire',
      link: null
    },
    {
      image: '/src/assets/layaliV2.jpg',
      title: 'Layali lmadih',
      category: 'Publicité',
      description: 'Campagne publicitaire',
      link: null
    },
    {
      image: '/src/assets/lightframewebsite.png',
      title: 'Lightframe Website',
      category: 'Web Design',
      description: 'Site web moderne et responsive',
      link: 'https://lightframe.ma/'
    },
    {
      image: '/src/assets/logo-ataoufiqueFINAL.jpg',
      title: 'Ataoufique',
      category: 'Logo Design',
      description: 'Création de logo',
      link: null
    },
    {
      image: '/src/assets/smartschool.jpg',
      title: 'Smart School',
      category: 'Logo Design',
      description: 'Création de logo',
      link: null
    },
    {
      image: '/src/assets/santé-logo1.png',
      title: 'Santé',
      category: 'Branding Santé',
      description: 'Identité pour marque santé',
      link: null
    },
    {
      image: '/src/assets/wadii pescados.png',
      title: 'Wadii pescados',
      category: 'Logo Design',
      description: 'Création de logo',
      link: null
    },
    {
      image: '/src/assets/sohbat-alkhaire-B-1_logo.png',
      title: 'Sohbat Alkhaire',
      category: 'Logo & Branding',
      description: 'Identité visuelle complète',
      link: null
    },
  ];

  const duplicatedProjects = [...projects, ...projects, ...projects];

  const handleProjectClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] bg-clip-text text-transparent">
            {t({
              fr: 'Nos Réalisations',
              en: 'Our Work',
              ar: 'أعمالنا'
            })}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] mx-auto mb-8 rounded-full" />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              fr: 'Découvrez nos projets récents et laissez-vous inspirer par notre créativité',
              en: 'Discover our recent projects and be inspired by our creativity',
              ar: 'اكتشف مشاريعنا الأخيرة ودع إبداعنا يلهمك'
            })}
          </p>
        </motion.div>
      </div>

      {/* Scroll container */}
      <div className="relative">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }}
            style={{
              width: "max-content",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
          {duplicatedProjects.map((project, index) => (

            <motion.div
              key={index}
              className="flex-shrink-0 w-64 h-64 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => handleProjectClick(project.link)}
              whileHover={{ scale: 1.05 }}
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x400';
                }}
              />

              {/* LIVE BADGE */}
              {project.link && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                    Live
                  </span>
                </div>
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#183ec2] via-[#183ec2]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-2">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>

                </div>
              </div>

            </motion.div>

          ))}
        </motion.div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-500">
          {t({
            fr: 'Survolez une image pour voir les détails',
            en: 'Hover over an image to see details',
            ar: 'مرر فوق الصورة لرؤية التفاصيل'
          })}
        </p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#183ec2] text-white rounded-full font-semibold hover:bg-[#4a6cf7] transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {t({
            fr: 'Discuter de votre projet',
            en: 'Discuss Your Project',
            ar: 'ناقش مشروعك'
          })}
        </motion.a>
      </motion.div>

    </section>
  );
}