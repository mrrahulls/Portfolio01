import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Database, BarChart3, Code, TrendingUp, MessageCircle } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Data Analyst', 'Python Developer', 'Visualization Expert', 'SQL Specialist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hi Rahul! I visited your portfolio website and I'm impressed with your work. I'd like to discuss a potential opportunity with you.`
    );
    window.open(`https://wa.me/919352153079?text=${message}`, '_blank');
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black z-10" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 text-purple-primary/30"
        >
          <Database size={40} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 text-purple-secondary/30"
        >
          <BarChart3 size={35} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 text-purple-light/30"
        >
          <Code size={38} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/3 text-purple-primary/30"
        >
          <TrendingUp size={42} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-purple-light text-sm font-semibold mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="text-gradient">Rahul Singh</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 h-12"
        >
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-purple-light"
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming raw data into actionable insights through advanced analytics, 
          visualization, and machine learning techniques. Passionate about uncovering 
          stories hidden within numbers and driving data-driven decisions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full font-semibold text-white shadow-lg hover:shadow-purple-primary/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect neon-border rounded-full font-semibold text-purple-light hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={handleWhatsAppMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium text-white shadow-lg transition-all duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;