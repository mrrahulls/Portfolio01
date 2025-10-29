import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, ExternalLink, Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master in Data Science and Analytics',
      institution: 'It Vedant Education Private Limited',
      duration: '2024',
      location: 'New Delhi',
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Jaipur Engineering College and Research Center',
      duration: '2021-2024',
      location: 'Jaipur',
    },
  ];

  const experiences = [
    {
      title: 'Data Analyst And Scraper',
      company: 'Share Samadhan',
      location: 'New Delhi',
      duration: 'October 2024 - Present',
      description: 'Since October 2024, I have been working as a Data Analyst and Data Scraper at Share Samadhan, using Python and web scraping libraries like BeautifulSoup, Selenium, and Scrapy. My role focuses on extracting and analyzing data to support business growth. I also automate data pipelines to streamline processes and provide actionable insights. This contributes to the company\'s strategic decision-making and operational success.',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Scrapy', 'Data Analysis', 'Automation'],
      icon: Building,
    },
    {
      title: 'Accounting Software Operator (Busy)',
      company: 'Hardik Solution',
      location: 'Kota',
      duration: '2021-2022',
      description: 'As a Software Support Executive, I provided exceptional support, ensured client satisfaction, and resolved queries promptly. This role enhanced my customer-centric approach and reinforced the importance of clear communication and problem-solving.',
      technologies: ['Software Support', 'Client Management', 'Problem Solving', 'Communication'],
      icon: Briefcase,
    },
  ];

  const certificates = [
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia',
      date: 'June 2025',
      skills: ['Data Management', 'Data Visualization'],
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_qvZ2WdNzYNAz8cBa3_1750139665495_completion_certificate.pdf',
      icon: Award,
    },
    {
      title: 'Python',
      issuer: 'HackerRank',
      date: 'April 2025',
      skills: ['Python (Programming Language)'],
      link: 'https://www.hackerrank.com/certificates/iframe/39dba9aee87e',
      icon: Award,
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      date: 'August 2024',
      skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy'],
      link: 'https://courses.itvedant.skillsnetwork.site/certificates/144bb1c36dc74f01991aae535dd776a2',
      icon: Award,
    },
    {
      title: 'Developing SQL Databases',
      issuer: 'Itvedant Education Pvt. Ltd.',
      date: 'May 2024',
      skills: ['SQL', 'Database Management', 'MySQL'],
      link: 'sql_184_1728297518.jpg',
      icon: Award,
    },
    {
      title: 'Tableau',
      issuer: 'Itvedant Education Pvt. Ltd.',
      date: 'April 2024',
      skills: ['Tableau', 'Data Visualization'],
      link: 'tableau.jpg',
      icon: Award,
    },
    {
      title: 'Data Science & Analytics',
      issuer: 'Itvedant Education Pvt. Ltd.',
      date: 'Sept 2024',
      skills: ['Data Science', 'Analytics'],
      link: 'datascien.jpg',
      icon: Award,
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
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Education, Experience & <span className="text-gradient">Certificates</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A summary of my academic and professional journey.
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center text-purple-light"
          >
            Education
          </motion.h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl neon-border hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-primary/20 rounded-lg flex-shrink-0">
                    <GraduationCap className="text-purple-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center text-purple-light"
          >
            Work Experience
          </motion.h3>
          
          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl neon-border hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-primary/20 rounded-lg flex-shrink-0">
                    <exp.icon className="text-purple-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-primary/20 text-purple-light text-xs rounded-full border border-purple-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center text-purple-light"
          >
            Certificates & Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl neon-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-primary/20 rounded-lg flex-shrink-0 group-hover:bg-purple-primary/30 transition-colors">
                    <cert.icon className="text-purple-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-light transition-colors">
                        {cert.title}
                      </h4>
                      {cert.link !== '#' && (
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-purple-light hover:text-purple-secondary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-400 text-xs mb-3">
                      Issued {cert.date}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 