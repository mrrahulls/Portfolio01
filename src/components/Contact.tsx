import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  Send,
  MapPin,
  Download
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hi Rahul! I visited your portfolio website and I'm interested in discussing a potential project/opportunity with you. Looking forward to connecting!`
    );
    window.open(`https://wa.me/919352153079?text=${message}`, '_blank');
  };

  const handleDirectWhatsApp = (customMessage: string) => {
    const message = encodeURIComponent(customMessage);
    window.open(`https://wa.me/919352153079?text=${message}`, '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Rahul_Singh_Data_Analyst_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9352153079',
      href: 'tel:+919352153079',
      action: 'Call Now'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mrrahul9352@gmail.com',
      href: 'mailto:mrrahul9352@gmail.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: '#',
      action: 'Start Chat',
      onClick: handleWhatsAppMessage
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, South Ex',
      href: '#',
      action: 'View Location'
    }
  ];

  const quickWhatsAppMessages = [
    {
      title: 'Project Inquiry',
      message: 'Hi Rahul! I have a data analysis project and would like to discuss it with you.'
    },
    {
      title: 'Job Opportunity',
      message: 'Hello Rahul! I came across your portfolio and have a job opportunity that might interest you.'
    },
    {
      title: 'Consultation',
      message: 'Hi! I need consultation on data visualization and analytics. Can we schedule a call?'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-singh-8b0aa2284/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/mrrahulls',
      color: 'hover:text-gray-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/mr_.rrahul/',
      color: 'hover:text-pink-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L74 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Ready to turn your data into actionable insights? Let's discuss your next project
          </motion.p>
          {/* Resume Download Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full font-semibold text-white shadow-lg hover:shadow-purple-primary/25 transition-all duration-300 mb-8"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Single centered column for all contact info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-2xl space-y-8 text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-purple-light">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, 
              or potential collaborations. Whether you need data analysis, visualization, 
              or consulting services, I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col sm:flex-row items-center justify-center p-4 glass-effect rounded-xl hover:neon-border transition-all duration-300 group cursor-pointer"
                onClick={contact.onClick || (() => {
                  if (contact.href !== '#') {
                    if (contact.href.startsWith('http')) {
                      window.open(contact.href, '_blank');
                    } else {
                      window.location.href = contact.href;
                    }
                  }
                })}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-primary/20 rounded-lg mr-0 sm:mr-4 mb-2 sm:mb-0 group-hover:bg-purple-primary/30 transition-colors">
                  <contact.icon className="text-purple-light" size={20} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm text-gray-400">{contact.label}</p>
                  <p className="text-white font-medium">{contact.value}</p>
                </div>
                <div className="text-purple-light opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send size={16} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick WhatsApp Messages */}
          <motion.div variants={itemVariants} className="pt-8">
            <h4 className="text-lg font-semibold mb-4 text-purple-light">
              Quick WhatsApp Messages
            </h4>
            <div className="space-y-3">
              {quickWhatsAppMessages.map((msg) => (
                <motion.button
                  key={msg.title}
                  onClick={() => handleDirectWhatsApp(msg.message)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 glass-effect rounded-lg hover:neon-border transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-light">{msg.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{msg.message.substring(0, 50)}...</p>
                    </div>
                    <MessageCircle size={16} className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="pt-8">
            <h4 className="text-lg font-semibold mb-4 text-purple-light">
              Follow Me
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center w-12 h-12 glass-effect rounded-lg hover:neon-border transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;