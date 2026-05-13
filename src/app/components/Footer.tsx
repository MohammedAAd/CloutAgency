import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';
import { Mail, Phone, Linkedin, Instagram, Facebook, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Footer() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ✅ Vos identifiants EmailJS correctement configurés
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/cloutagency0/',
      label: 'LinkedIn',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/cloutagency.ma?igsh=MWl2azhsczg0NXlrZg==',
      label: 'Instagram',
      color: 'hover:text-[#E4405F]'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/980374008766366/',
      label: 'Facebook',
      color: 'hover:text-[#1877F2]'
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cloutmedia.ma@gmail.com',
      href: 'mailto:cloutmedia.ma@gmail.com'
    },
    {
      icon: Phone,
      label: {
        fr: 'Téléphone',
        en: 'Phone',
        ar: 'الهاتف'
      },
      value: '+212 663-097541',
      href: 'tel:+212663097541'
    },
  ];

  const quickLinks = [
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
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Obtenir l'heure actuelle formatée
      const currentTime = new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'medium'
      });

      // Préparer les données pour EmailJS selon votre template
      const templateParams = {
        name: formData.name,        // Correspond à {{name}}
        email: formData.email,      // Correspond à {{email}} pour le Reply To
        message: formData.message,  // Correspond à {{message}}
        time: currentTime,          // Correspond à {{time}}
      };

      console.log('📧 Envoi du formulaire avec:', templateParams);

      // Initialiser EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Envoyer l'email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Réponse EmailJS:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Réinitialiser le statut après 5 secondes
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(`Erreur ${response.status}: ${response.text}`);
      }
    } catch (error) {
      console.error('❌ Erreur détaillée lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-[#183ec2] to-[#0d2573] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Existing Content */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  
                  <div>
                    <h3 className="text-2xl font-bold">CLOUT Agency</h3>
                    <p className="text-sm text-blue-200">
                      {t({
                        fr: 'Votre partenaire créatif',
                        en: 'Your creative partner',
                        ar: 'شريكك الإبداعي'
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  {t({
                    fr: 'Nous donnons vie à votre vision sur toutes les plateformes numériques avec créativité, authenticité et excellence.',
                    en: 'We bring your vision to life across all digital platforms with creativity, authenticity and excellence.',
                    ar: 'نحيي رؤيتك عبر جميع المنصات الرقمية بالإبداع والأصالة والتميز.'
                  })}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-lg font-bold mb-6">
                  {t({
                    fr: 'Liens rapides',
                    en: 'Quick Links',
                    ar: 'روابط سريعة'
                  })}
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-white transition-colors" />
                        {t(link.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-lg font-bold mb-6">
                  {t({
                    fr: 'Contact',
                    en: 'Contact',
                    ar: 'اتصل بنا'
                  })}
                </h4>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      <a
                        href={info.href}
                        className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-200">
                            {typeof info.label === 'string' ? info.label : t(info.label)}
                          </p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          >
            <h4 className="text-2xl font-bold mb-2">
              {t({
                fr: 'Envoyez-nous un message',
                en: 'Send us a message',
                ar: 'أرسل لنا رسالة'
              })}
            </h4>
            <p className="text-blue-200 mb-6">
              {t({
                fr: 'Nous vous répondrons dans les plus brefs délais',
                en: "We'll get back to you as soon as possible",
                ar: 'سوف نرد عليك في أقرب وقت ممكن'
              })}
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Nom complet */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                  {t({
                    fr: 'Nom complet',
                    en: 'Full name',
                    ar: 'الاسم الكامل'
                  })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t({
                    fr: 'Votre nom',
                    en: 'Your name',
                    ar: 'اسمك'
                  })}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                  {t({
                    fr: 'Email',
                    en: 'Email',
                    ar: 'البريد الإلكتروني'
                  })}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="exemple@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                  {t({
                    fr: 'Message',
                    en: 'Message',
                    ar: 'الرسالة'
                  })}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t({
                    fr: 'Votre message...',
                    en: 'Your message...',
                    ar: 'رسالتك...'
                  })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-[#183ec2] rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#183ec2] border-t-transparent rounded-full animate-spin" />
                    {t({
                      fr: 'Envoi en cours...',
                      en: 'Sending...',
                      ar: 'جاري الإرسال...'
                    })}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t({
                      fr: 'Envoyer le message',
                      en: 'Send message',
                      ar: 'إرسال الرسالة'
                    })}
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-100 text-center"
                >
                  {t({
                    fr: '✓ Message envoyé avec succès ! Nous vous répondrons bientôt.',
                    en: '✓ Message sent successfully! We will get back to you soon.',
                    ar: '✓ تم إرسال الرسالة بنجاح! سوف نرد عليك قريباً.'
                  })}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-center"
                >
                  {t({
                    fr: '❌ Erreur lors de l\'envoi. Veuillez réessayer.',
                    en: '❌ Error sending message. Please try again.',
                    ar: '❌ خطأ في الإرسال. يرجى المحاولة مرة أخرى.'
                  })}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} CLOUT Agency. {t({
                fr: 'Tous droits réservés.',
                en: 'All rights reserved.',
                ar: 'كل الحقوق محفوظة.'
              })}
            </p>
          
          </div>
        </motion.div>
      </div>
    </footer>
  );
}