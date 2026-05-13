import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: { fr: 'Authenticité', en: 'Authenticity', ar: 'الأصالة' },
      description: {
        fr: 'Nous croyons en des histoires vraies et des connexions humaines',
        en: 'We believe in true stories and human connections',
        ar: 'نؤمن بالقصص الحقيقية والروابط الإنسانية'
      }
    },
    {
      icon: Lightbulb,
      title: { fr: 'Créativité', en: 'Creativity', ar: 'الإبداع' },
      description: {
        fr: 'Chaque projet est une opportunité d\'innover',
        en: 'Every project is an opportunity to innovate',
        ar: 'كل مشروع هو فرصة للابتكار'
      }
    },
    {
      icon: Users,
      title: { fr: 'Collaboration', en: 'Collaboration', ar: 'التعاون' },
      description: {
        fr: 'Nous sommes vos partenaires créatifs, pas seulement une agence',
        en: 'We are your creative partners, not just an agency',
        ar: 'نحن شركاؤك المبدعون، وليس مجرد وكالة'
      }
    },
    {
      icon: Target,
      title: { fr: 'Excellence', en: 'Excellence', ar: 'التميز' },
      description: {
        fr: 'Nous visons toujours le plus haut niveau de qualité',
        en: 'We always aim for the highest level of quality',
        ar: 'نهدف دائمًا إلى أعلى مستوى من الجودة'
      }
    },
  ];

  return (
    <section id="about" className="pt-10 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight pb-2 mb-7 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] bg-clip-text text-transparent">
            {t({
              fr: 'À propos de nous',
              en: 'About Us',
              ar: 'من نحن'
            })}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] mx-auto mb-8 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              {t({
                fr: 'Qui nous sommes',
                en: 'Who We Are',
                ar: 'من نكون'
              })}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t({
                fr: 'Chez CLOUT Agency, nous croyons que chaque histoire mérite d\'être racontée avec authenticité, soin et créativité. Nous ne sommes pas seulement une agence de marketing numérique — nous sommes vos compagnons créatifs, marchant avec vous sur votre chemin pour exprimer, connecter et grandir.',
                en: 'At CLOUT Agency, we believe every story deserves to be told with authenticity, care, and creativity. We are not just a digital marketing agency — we are your creative companions, walking with you on your journey to express, connect, and grow.',
                ar: 'في وكالة كلاوت، نؤمن بأن كل قصة تستحق أن تُروى بأصالة وعناية وإبداع. نحن لسنا مجرد وكالة تسويق رقمي - نحن رفاقك المبدعون، نسير معك في رحلتك للتعبير والتواصل والنمو.'
              })}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t({
                fr: 'Que vous lanciez une nouvelle idée, rafraîchissiez votre marque ou diffusiez votre message à un public plus large — nous sommes là pour donner vie à votre vision sur toutes les plateformes numériques.',
                en: 'Whether you are launching a new idea, refreshing your brand, or broadcasting your message to a wider audience — we are here to bring your vision to life across all digital platforms.',
                ar: 'سواء كنت تطلق فكرة جديدة، أو تجدد علامتك التجارية، أو تبث رسالتك إلى جمهور أوسع - نحن هنا لإحياء رؤيتك عبر جميع المنصات الرقمية.'
              })}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#183ec2] to-[#4a6cf7] flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {t(value.title)}
                </h4>
                <p className="text-gray-600">
                  {t(value.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
