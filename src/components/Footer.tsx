import { motion } from 'framer-motion';
import { Heart, Code, Database } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">
              Rahul Singh
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming data into insights, one analysis at a time. 
              Passionate about creating meaningful visualizations and 
              data-driven solutions. Currently pursuing Master in Data Science.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-purple-light">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-purple-light transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-purple-light">
              Expertise
            </h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Python', 'SQL', 'Power BI', 'Excel', 'Web Scraping', 'Data Viz'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-primary/20 text-purple-light text-xs rounded-full border border-purple-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-purple-primary/50"
            >
              <Code size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-purple-secondary/50"
            >
              <Database size={24} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-purple-light/50"
            >
              <Heart size={24} />
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Rahul Singh. Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              and lots of data.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;