import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { Video, Palette, Megaphone, Share2, Code, Search, X, MessageCircle } from 'lucide-react';

export function Services() {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Video,
      image: 'https://images.unsplash.com/photo-1543235074-8257d766eb06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc3MzQwNjYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Production audiovisuelle',
        en: 'Audiovisual Production',
        ar: 'الإنتاج السمعي البصري'
      },
      shortDesc: {
        fr: 'Des vidéos captivantes qui font résonner votre message',
        en: 'Captivating videos that resonate your message',
        ar: 'فيديوهات جذابة تجعل رسالتك تصل'
      },
      fullDesc: {
        fr: 'Nous créons des vidéos captivantes — des clips promotionnels à la couverture d\'événements — pour que votre message résonne profondément auprès de votre audience. Notre équipe de professionnels utilise les dernières technologies pour produire du contenu vidéo de haute qualité qui raconte votre histoire de manière authentique et engageante. De la conception initiale au montage final, nous gérons chaque aspect de la production pour garantir un résultat exceptionnel.',
        en: 'We create captivating videos — from promotional clips to event coverage — so your message resonates deeply with your audience. Our team of professionals uses the latest technologies to produce high-quality video content that tells your story authentically and engagingly. From initial concept to final editing, we handle every aspect of production to ensure exceptional results.',
        ar: 'نقوم بإنشاء مقاطع فيديو جذابة - من المقاطع الترويجية إلى تغطية الأحداث - حتى تصل رسالتك بعمق إلى جمهورك. يستخدم فريقنا من المحترفين أحدث التقنيات لإنتاج محتوى فيديو عالي الجودة يروي قصتك بشكل أصيل وجذاب. من المفهوم الأولي إلى التحرير النهائي، نتعامل مع كل جانب من جوانب الإنتاج لضمان نتائج استثنائية.'
      },
      serviceName: {
        fr: 'Production audiovisuelle',
        en: 'Audiovisual Production',
        ar: 'الإنتاج السمعي البصري'
      }
    },
    {
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMzYwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Conception graphique',
        en: 'Graphic Design',
        ar: 'التصميم الجرافيكي'
      },
      shortDesc: {
        fr: 'Des designs visuellement saisissants qui donnent vie à votre marque',
        en: 'Visually stunning designs that bring your brand to life',
        ar: 'تصاميم بصرية مذهلة تحيي علامتك التجارية'
      },
      fullDesc: {
        fr: 'Nous donnons vie à votre marque avec des designs visuellement saisissants, des logos et brochures aux graphiques pour les réseaux sociaux qui captivent et communiquent efficacement. Notre approche créative combine l\'esthétique moderne avec une stratégie de marque solide pour créer des designs qui non seulement attirent l\'attention, mais qui transmettent également votre message de manière claire et mémorable. Chaque élément visuel est soigneusement conçu pour refléter l\'identité unique de votre marque.',
        en: 'We bring your brand to life with visually stunning designs, from logos and brochures to social media graphics that captivate and communicate effectively. Our creative approach combines modern aesthetics with solid brand strategy to create designs that not only attract attention but also convey your message clearly and memorably. Every visual element is carefully crafted to reflect your brand\'s unique identity.',
        ar: 'نحيي علامتك التجارية بتصاميم بصرية مذهلة، من الشعارات والكتيبات إلى رسومات وسائل التواصل الاجتماعي التي تجذب وتتواصل بفعالية. يجمع نهجنا الإبداعي بين الجماليات الحديثة واستراتيجية العلامة التجارية القوية لإنشاء تصاميم لا تجذب الانتباه فحسب، بل تنقل رسالتك بوضوح وبشكل لا يُنسى. تم تصميم كل عنصر بصري بعناية ليعكس الهوية الفريدة لعلامتك التجارية.'
      },
      serviceName: {
        fr: 'Conception graphique',
        en: 'Graphic Design',
        ar: 'التصميم الجرافيكي'
      }
    },
    {
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1762330464824-21e95b769038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBvbmxpbmUlMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzczNDA2NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Campagnes publicitaires',
        en: 'Advertising Campaigns',
        ar: 'الحملات الإعلانية'
      },
      shortDesc: {
        fr: 'Des stratégies publicitaires ciblées qui maximisent votre portée',
        en: 'Targeted advertising strategies that maximize your reach',
        ar: 'استراتيجيات إعلانية مستهدفة تزيد من انتشارك'
      },
      fullDesc: {
        fr: 'Nous élaborons des stratégies publicitaires ciblées sur les plateformes numériques pour maximiser la portée de votre marque, générer des conversions et faire entendre votre voix. En utilisant des analyses de données avancées et des techniques de ciblage précises, nous créons des campagnes publicitaires qui atteignent le bon public au bon moment. De Google Ads à Facebook Ads, nous optimisons chaque euro dépensé pour maximiser votre retour sur investissement.',
        en: 'We develop targeted advertising strategies on digital platforms to maximize your brand\'s reach, generate conversions, and make your voice heard. Using advanced data analytics and precise targeting techniques, we create advertising campaigns that reach the right audience at the right time. From Google Ads to Facebook Ads, we optimize every euro spent to maximize your return on investment.',
        ar: 'نقوم بتطوير استراتيجيات إعلانية مستهدفة على المنصات الرقمية لزيادة انتشار علامتك التجارية، وتوليد التحويلات، وجعل صوتك مسموعًا. باستخدام تحليلات البيانات المتقدمة وتقنيات الاستهداف الدقيقة، نقوم بإنشاء حملات إعلانية تصل إلى الجمهور المناسب في الوقت المناسب. من إعلانات جوجل إلى إعلانات فيسبوك، نقوم بتحسين كل يورو يتم إنفاقه لتحقيق أقصى عائد على الاستثمار.'
      },
      serviceName: {
        fr: 'Campagnes publicitaires',
        en: 'Advertising Campaigns',
        ar: 'الحملات الإعلانية'
      }
    },
    {
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1759215524472-1b0686fdbd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGVuZ2FnZW1lbnQlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzczNDA2NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Marketing des réseaux sociaux',
        en: 'Social Media Marketing',
        ar: 'تسويق وسائل التواصل الاجتماعي'
      },
      shortDesc: {
        fr: 'Développez votre présence sociale avec un contenu engageant',
        en: 'Grow your social presence with engaging content',
        ar: 'نمِّ حضورك الاجتماعي بمحتوى جذاب'
      },
      fullDesc: {
        fr: 'Nous développons votre présence sur les réseaux sociaux grâce à un contenu engageant et à une communauté active, transformant les abonnés en ambassadeurs fidèles de votre marque. Notre équipe de stratèges en médias sociaux crée du contenu qui résonne avec votre public cible, encourage l\'engagement et construit une communauté loyale autour de votre marque. De la planification de contenu à la gestion de communauté, nous gérons tous les aspects de votre présence sur les réseaux sociaux.',
        en: 'We grow your social media presence through engaging content and an active community, transforming followers into loyal brand ambassadors. Our team of social media strategists creates content that resonates with your target audience, encourages engagement, and builds a loyal community around your brand. From content planning to community management, we handle all aspects of your social media presence.',
        ar: 'نقوم بتنمية حضورك على وسائل التواصل الاجتماعي من خلال محتوى جذاب ومجتمع نشط، مما يحول المتابعين إلى سفراء مخلصين لعلامتك التجارية. يقوم فريقنا من استراتيجيي وسائل التواصل الاجتماعي بإنشاء محتوى يتردد صداه مع جمهورك المستهدف، ويشجع على المشاركة، ويبني مجتمعًا مخلصًا حول علامتك التجارية. من تخطيط المحتوى إلى إدارة المجتمع، نتعامل مع جميع جوانب حضورك على وسائل التواصل الاجتماعي.'
      },
      serviceName: {
        fr: 'Marketing des réseaux sociaux',
        en: 'Social Media Marketing',
        ar: 'تسويق وسائل التواصل الاجتماعي'
      }
    },
    {
      icon: Code,
      image: 'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzMzMjUwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Développement web',
        en: 'Web Development',
        ar: 'تطوير الويب'
      },
      shortDesc: {
        fr: 'Des sites web réactifs qui représentent authentiquement votre marque',
        en: 'Responsive websites that authentically represent your brand',
        ar: 'مواقع ويب متجاوبة تمثل علامتك التجارية بأصالة'
      },
      fullDesc: {
        fr: 'Nous concevons et développons des sites web réactifs et conviviaux qui représentent authentiquement votre marque et offrent des expériences utilisateur exceptionnelles. Notre équipe de développeurs experts utilise les dernières technologies web pour créer des sites rapides, sécurisés et optimisés pour tous les appareils. Que vous ayez besoin d\'un site vitrine, d\'une boutique en ligne ou d\'une application web complexe, nous transformons votre vision en réalité digitale.',
        en: 'We design and develop responsive and user-friendly websites that authentically represent your brand and deliver exceptional user experiences. Our team of expert developers uses the latest web technologies to create fast, secure, and optimized sites for all devices. Whether you need a showcase site, an online store, or a complex web application, we transform your vision into digital reality.',
        ar: 'نقوم بتصميم وتطوير مواقع ويب متجاوبة وسهلة الاستخدام تمثل علامتك التجارية بأصالة وتقدم تجارب استخدام استثنائية. يستخدم فريقنا من المطورين الخبراء أحدث تقنيات الويب لإنشاء مواقع سريعة وآمنة ومُحسَّنة لجميع الأجهزة. سواء كنت بحاجة إلى موقع عرض أو متجر إلكتروني أو تطبيق ويب معقد، فإننا نحول رؤيتك إلى واقع رقمي.'
      },
      serviceName: {
        fr: 'Développement web',
        en: 'Web Development',
        ar: 'تطوير الويب'
      }
    },
    {
      icon: Search,
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb24lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczNDA2NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: {
        fr: 'Optimisation SEO',
        en: 'SEO Optimization',
        ar: 'تحسين محركات البحث'
      },
      shortDesc: {
        fr: 'Améliorez votre visibilité en ligne avec des stratégies SEO puissantes',
        en: 'Improve your online visibility with powerful SEO strategies',
        ar: 'حسِّن ظهورك على الإنترنت باستراتيجيات SEO قوية'
      },
      fullDesc: {
        fr: 'Nous améliorons votre visibilité en ligne et générons du trafic organique grâce à des stratégies SEO puissantes — en optimisant la structure, le contenu et les performances de votre site pour obtenir des classements élevés dans les recherches. Notre approche SEO holistique comprend la recherche de mots-clés, l\'optimisation on-page et off-page, la création de contenu optimisé et l\'analyse continue des performances pour garantir que votre site reste en tête des résultats de recherche.',
        en: 'We improve your online visibility and generate organic traffic through powerful SEO strategies — optimizing your site\'s structure, content, and performance to achieve high search rankings. Our holistic SEO approach includes keyword research, on-page and off-page optimization, optimized content creation, and continuous performance analysis to ensure your site stays at the top of search results.',
        ar: 'نقوم بتحسين ظهورك على الإنترنت وتوليد حركة مرور عضوية من خلال استراتيجيات SEO قوية - من خلال تحسين بنية موقعك ومحتواه وأدائه لتحقيق تصنيفات بحث عالية. يتضمن نهجنا الشامل لتحسين محركات البحث البحث عن الكلمات الرئيسية، والتحسين داخل الصفحة وخارجها، وإنشاء محتوى محسّن، والتحليل المستمر للأداء لضمان بقاء موقعك في أعلى نتائج البحث.'
      },
      serviceName: {
        fr: 'Optimisation SEO',
        en: 'SEO Optimization',
        ar: 'تحسين محركات البحث'
      }
    },
  ];

  const handleWhatsApp = (serviceName: string) => {
    const message = t({
      fr: `Bonjour, je suis intéressé(e) par le service "${serviceName}". Pourriez-vous me fournir plus d'informations ?`,
      en: `Hello, I am interested in the "${serviceName}" service. Could you provide me with more information?`,
      ar: `مرحباً، أنا مهتم بخدمة "${serviceName}". هل يمكنك تزويدي بمزيد من المعلومات؟`
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212663097541?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] bg-clip-text text-transparent">
            {t({
              fr: 'Nos Services',
              en: 'Our Services',
              ar: 'خدماتنا'
            })}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#183ec2] to-[#4a6cf7] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              fr: 'Des solutions complètes pour propulser votre présence numérique',
              en: 'Complete solutions to boost your digital presence',
              ar: 'حلول كاملة لتعزيز حضورك الرقمي'
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#183ec2]" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {t(service.title)}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {t(service.shortDesc)}
                  </p>
                  <motion.button
                    onClick={() => setSelectedService(index)}
                    className="text-[#183ec2] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {t({
                      fr: 'En savoir plus',
                      en: 'Learn more',
                      ar: 'اعرف المزيد'
                    })}
                    <span>→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Service Image Header */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={services[selectedService].image}
                    alt={t(services[selectedService].title)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-4">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon className="w-8 h-8 text-[#183ec2]" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {t(services[selectedService].title)}
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {t(services[selectedService].fullDesc)}
                  </p>

                  {/* WhatsApp Button */}
                  <motion.button
                    onClick={() => handleWhatsApp(t(services[selectedService].serviceName))}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                    {t({
                      fr: 'Contactez-nous sur WhatsApp',
                      en: 'Contact us on WhatsApp',
                      ar: 'اتصل بنا عبر واتساب'
                    })}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
