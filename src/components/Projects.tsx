import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Star, GitFork } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showStarAlert, setShowStarAlert] = useState<string | null>(null);

  const handleStarClick = (projectTitle: string, starCount: number) => {
    setShowStarAlert(`${projectTitle} has ${starCount} stars!`);
    setTimeout(() => setShowStarAlert(null), 3000);
  };

  const projects = [
    {
      title: 'AI Desktop Assistant',
      description: 'Built a Python desktop assistant using speech recognition and text-to-speech. Added features like Wikipedia searches, web browsing, and system commands. Enabled voice-based task execution and personalized greetings.',
      technologies: ['Python', 'Speech Recognition', 'Text-to-Speech', 'Wikipedia API'],
      github: 'https://github.com/mrrahulls/Voice-Activated-Personal-Assistant',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'jarvish.jpg',
    },
    {
      title: 'Web Scraping Project',
      description: 'Developed a Python-based tool to scrape business data from online directories. Extracted key information like addresses, ratings, Phone No. and opening hours. Automated data processing and storage for seamless analysis.',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas', 'Automate'],
      github: 'https://github.com/mrrahulls/Web-Scraping',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Mobile Sales Analysis',
      description: 'Analyzed a dataset using Python, Pandas, and Seaborn. Performed exploratory data analysis (EDA) and visualized trends using count plots. Generated insights through data visualization to support decision-making.',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib','Statsmodels'],
      github: 'https://github.com/mrrahulls/Modile-Sale-Analysis',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales performance with real-time KPIs, trend analysis, and predictive forecasting.',
      technologies: ['Power BI', 'Python', 'SQL', 'Excel'],
      github: '#',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Customer Segmentation ML',
      description: 'Machine learning project using Python to segment customers based on purchasing behavior and demographics for targeted marketing.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Financial Data Analyzer',
      description: 'Comprehensive financial analysis tool with portfolio optimization, risk assessment, and performance tracking capabilities.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Plotly'],
      github: '#',
      demo: '#',
      stars: 0,
      forks: 0,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238B5CF6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Explore my latest data science and analytics projects showcasing real-world problem solving
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="https://github.com/mrrahulls"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full neon-border hover:text-purple-light transition-all duration-300"
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div 
                    className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-black/70 transition-colors"
                    onClick={() => handleStarClick(project.title, project.stars)}
                  >
                    <Star size={12} className="text-yellow-400" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-xs">
                    <GitFork size={12} className="text-gray-400" />
                    {project.forks}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-primary/20 text-purple-light text-xs rounded-full border border-purple-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-lg text-sm transition-colors w-full justify-center"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Star Alert */}
        {showStarAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 bg-purple-primary text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {showStarAlert}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;