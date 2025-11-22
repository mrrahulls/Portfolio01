import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Data Visualization',
      skills: ['Power BI', 'Excel', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Data Analysis & Manipulation',
      skills: ['Python', 'Pandas', 'NumPy'],
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS'],
    },
    {
      category: 'Database Management',
      skills: ['MySQL', 'PostgreSQL', 'Mongo DB'],
    },
    {
      category: 'Webscraping Libraries',
      skills: ['BeautifulSoup', 'Requests', 'Selenium', 'Scrapy'],
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
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Passionate about turning complex data into meaningful insights
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl neon-border">
              <h3 className="text-2xl font-semibold mb-4 text-purple-light">
                Data Analyst & Python Eng
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Proficient in data analysis, data scraping, and software support, with a BCA from JECRC University, 
                Jaipur, and a Master's in Data Science from ITVedant, Delhi. Currently excelling as a Data Analyst 
                at Share Samadhan, delivering actionable insights and automation solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dedicated to advancing into a Data Scientist role, leveraging machine learning and big data technologies. 
                I want to excel in this field with hard work, perseverance and dedication, using my skills and knowledge 
                for organizational and personal growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With experience in web scraping, data visualization, and automation, I help organizations unlock 
                the power of their data through comprehensive analysis and intuitive visualizations.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-purple-light">
              Technical Skills
            </h3>
            <div className="grid gap-6">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="glass-effect p-4 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-purple-light">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-primary/20 text-purple-light text-xs rounded-full border border-purple-primary/30"
                      >
                        {skill}
                    </span>
                    ))}
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
