import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, Award, Code, Briefcase, GraduationCap, User, Calendar, MapPin, Trophy, Star, Sparkles, Zap } from 'lucide-react';
import pfp from './assets/pfp.png';
import zenith from './assets/isource.JPG';
import cit from './assets/cit_win.JPG';
import pd from './assets/pd_win.JPG';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for animated backgrounds
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tech stack logos mapping with better fallbacks
  const techLogos = {
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Unsloth.ai':'data:image/jpeg;base64,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',
    'NLP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'LLMs': 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
    'Transformers': 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
    'AWS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'LLaMA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'CoT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Optimization': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Deepseek-R1': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'JSON': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Analytics': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Classification': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Kaggle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Responsive Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    'Java', 'Python', 'SQL', 'JavaScript', 'React.js', 'Next.js', 'Vue.js', 'Nuxt.js',
    'FastAPI', 'Unsloth.ai', 'PyTorch', 'TensorFlow', 'LLMs', 'Transformers', 'AWS', 'Firebase'
  ];

  const achievements = [
    {
      title: "AlgosQuest'24 Winner",
      prize: "₹1,00,000",
      description: "AI-powered application with generative AI for data transformations and interactive dashboards",
      tech: "Finetuned Deepseek-R1 distill 8B model",
      image: zenith
    },
    {
      title: "Smart Industry 4.0 Hackathon Winner",
      prize: "₹1,25,000", 
      description: "Collaborative robot with humanoid features using RL algorithms and 3D Gaussian splatting",
      tech: "50% efficiency increase, 2-3X performance gains",
      image: cit
    },
    {
      title: "Sensathon 2024 Runner-up",
      prize: "₹15,000",
      description: "Wearable device for Parkinson's patients with tremor prediction and emergency notifications",
      tech: "ML models with embedded sensors",
      image: pd
    }
  ];

  const projects = [
    {
      title: "Enabling Reasoning Capabilities (CoT) for SmolLMs",
      description: "Enhanced reasoning capabilities of compact LLMs like LlaMa 3.2 1B and Gemma 3 1B using Chain-of-Thought prompting",
      tech: ["LLaMA", "Transformers", "CoT", "Optimization"],
      highlight: "Significant improvements with minimal parameter increase"
    },
    {
      title: "Deepseek-R1 Distill LlaMa 8B Finetuning",
      description: "Finetuned models to generate structured JSON config for data analytics tasks",
      tech: ["Deepseek-R1", "LlaMa 8B", "JSON", "Analytics"],
      highlight: "High accuracy on analytics-specific tasks"
    },
    {
      title: "Kaggle Competition CrimeCast",
      description: "Developed models for accurate crime category prediction",
      tech: ["Machine Learning", "Classification", "Kaggle"],
      highlight: "96% accuracy (surpassed 80% cutoff)"
    },
    {
      title: "Genio 2k25 Website",
      description: "Complete renovation of college symposium website with modern tech stack",
      tech: ["Vue.js", "FastAPI", "Responsive Design"],
      highlight: "Enhanced UX with authentication system"
    }
  ];

  // Animated background components
  const FloatingShapes = ({ count = 6, section }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-10 ${
              section === 'hero' ? 'text-blue-300' : 
              section === 'about' ? 'text-purple-300' :
              section === 'experience' ? 'text-green-300' :
              section === 'achievements' ? 'text-yellow-300' :
              section === 'projects' ? 'text-pink-300' :
              section === 'education' ? 'text-indigo-300' :
              'text-gray-300'
            }`}
            style={{
              left: `${(i * 15 + 10) % 90}%`,
              top: `${(i * 20 + 10) % 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
              transform: `translateY(${scrollY * 0.1 * (i + 1)}px)`
            }}
          >
            {i % 3 === 0 ? <Sparkles size={20 + i * 2} /> : 
             i % 3 === 1 ? <Zap size={18 + i * 2} /> : 
             <div className="w-3 h-3 bg-current rounded-full"></div>}
          </div>
        ))}
      </div>
    );
  };

  const NavItem = ({ href, children, icon: Icon }) => (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
        activeSection === href.slice(1)
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
          : 'text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
      }`}
    >
      <Icon size={16} className={`transition-colors duration-300 ${
        activeSection === href.slice(1) ? 'text-white' : 'text-current'
      }`} />
      <span className={`transition-colors duration-300 ${
        activeSection === href.slice(1) ? 'text-white' : 'text-current'
      }`}>
        {children}
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200/50 shadow-lg">
        <div className="w-full px-8 md:px-16 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Janarthanan GM
            </div>
            <div className="hidden md:flex gap-2">
              <NavItem href="#home" icon={User}>Home</NavItem>
              <NavItem href="#about" icon={User}>About</NavItem>
              <NavItem href="#experience" icon={Briefcase}>Experience</NavItem>
              <NavItem href="#achievements" icon={Trophy}>Achievements</NavItem>
              <NavItem href="#projects" icon={Code}>Projects</NavItem>
              <NavItem href="#education" icon={GraduationCap}>Education</NavItem>
              <NavItem href="#contact" icon={Mail}>Contact</NavItem>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
        <FloatingShapes count={8} section="hero" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        
        <div className="w-full px-8 md:px-16 lg:px-24 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Profile Picture */}
            <div className="mb-8 relative inline-block">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 ">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={pfp} 
                    alt="JG" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="text-white" size={20} />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Janarthanan
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text animate-gradient">
                Gnanamurthy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI Engineer & Data Scientist crafting intelligent solutions with cutting-edge technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 font-medium border border-blue-400/30 hover:bg-white/20 transition-all duration-300">
                Machine Learning Expert
              </span>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-purple-300 font-medium border border-purple-400/30 hover:bg-white/20 transition-all duration-300">
                LLM Specialist
              </span>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-green-300 font-medium border border-green-400/30 hover:bg-white/20 transition-all duration-300">
                Full Stack Developer
              </span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="mailto:janagnanam12@gmail.com" className="p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30 hover:bg-white/30">
                <Mail className="text-white" size={24} />
              </a>
              <a href="https://linkedin.com/in/janarthanangm" className="p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30 hover:bg-white/30">
                <Linkedin className="text-white" size={24} />
              </a>
              <a href="#" className="p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30 hover:bg-white/30">
                <Github className="text-white" size={24} />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white/60" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <FloatingShapes count={6} section="about" />
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-100 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-16">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm a passionate AI Engineer and Data Scientist pursuing dual degrees from IIT Madras and Anna University. 
                  With expertise in machine learning, natural language processing, and full-stack development, I create 
                  innovative solutions that bridge the gap between cutting-edge research and practical applications.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  My journey spans from winning major hackathons to implementing advanced AI techniques like Chain-of-Thought 
                  reasoning for compact language models. I'm particularly interested in making AI more accessible and efficient 
                  for real-world applications.
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <span className="font-medium">Chennai, India</span>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <Code className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group relative flex flex-col items-center"
                    >
                      <div className="w-16 h-16 p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                        <img
                          src={techLogos[skill]}
                          alt={skill}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-xs hidden">
                          {skill.substring(0, 2)}
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 mt-2 text-center font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-100 relative overflow-hidden">
        <FloatingShapes count={7} section="achievements" />
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-200 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-16">
              Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl  border border-white/50"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Trophy className="text-yellow-300" size={20} />
                      <span className="text-white font-bold">{achievement.prize}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-3">
                      <p className="text-sm text-orange-700 font-medium">{achievement.tech}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-pink-50 to-purple-100 relative overflow-hidden">
        <FloatingShapes count={6} section="projects" />
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-250 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-16">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl  border border-white/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                      <Code className="text-white group-hover:animate-pulse" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-6">
                    <p className="text-sm text-purple-800 font-medium flex items-center gap-2">
                      <Sparkles size={16} />
                      {project.highlight}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group relative"
                      >
                        <div className="w-10 h-10 p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-100">
                          <img
                            src={techLogos[tech]}
                            alt={tech}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-xs hidden">
                            {tech.substring(0, 2)}
                          </div>
                        </div>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
        <FloatingShapes count={5} section="experience" />
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-150 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-16">
              Experience
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl  border border-white/50">
                <div className="absolute -left-6 top-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Calendar size={20} className="text-green-600" />
                  </div>
                  <span className="text-green-700 font-bold text-lg">August 2024 - September 2024</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">AI Intern</h3>
                <p className="text-xl text-green-600 mb-6 font-semibold">DigitalTrack Solutions Pvt Ltd.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <Star className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 leading-relaxed">Gained hands-on experience with AI concepts (CNNs, RNNs, LSTMs, YOLO) for image classification, stock price prediction, and object detection</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <Star className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 leading-relaxed">Implemented Retrieval-Augmented Generation (RAG) using LLaMA 2 and Hugging Face transformers to improve LLMs' accuracy and relevance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 relative overflow-hidden">
        <FloatingShapes count={5} section="education" />
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-300 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-16">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">IIT Madras</h3>
                    <p className="text-blue-600 font-semibold">September 2022 - Present</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xl font-semibold text-gray-800 mb-2">B.Sc, Data Science & Programming</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                      <p className="text-white font-bold">CGPA: 8.38</p>
                    </div>
                    <Star className="text-yellow-500" size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mb-4 font-medium">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Business Analytics', 'Software Testing', 'DBMS', 'Statistics'].map((course) => (
                    <span key={course} className="px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-xl text-sm font-medium border border-blue-200 hover:shadow-md transition-all duration-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Anna University</h3>
                    <p className="text-purple-600 font-semibold">September 2022 - Present</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xl font-semibold text-gray-800 mb-2">B.Tech, AI and Data Science</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                      <p className="text-white font-bold">CGPA: 8.10</p>
                    </div>
                    <Star className="text-yellow-500" size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mb-4 font-medium">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'AI', 'Machine Learning', 'Deep Learning', 'Soft Computing', 'OOP', 'Data Analytics'].map((course) => (
                    <span key={course} className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-xl text-sm font-medium border border-purple-200 hover:shadow-md transition-all duration-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <FloatingShapes count={8} section="contact" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
          <div className={`transition-all duration-700 delay-350 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                  <Sparkles className="text-blue-400" />
                  Ready to collaborate?
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, and collaborate on cutting-edge AI solutions. 
                  Whether you're looking for a talented developer or want to explore the possibilities of AI, let's connect!
                </p>
                <div className="space-y-6">
                  <a href="mailto:janagnanam12@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/10 group">
                    <div className="p-3 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} className='text-gray-200' />
                    </div>
                    <span className="text-lg text-gray-300">janagnanam12@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/janarthanangm" className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/10 group">
                    <div className="p-3 bg-blue-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={24} className='text-gray-200' />
                    </div>
                    <span className="text-lg text-gray-300">linkedin.com/in/janarthanangm</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl bg-white/5">
                    <div className="p-3 bg-green-600 rounded-xl">
                    <svg 
                        style={{ color: 'white' }} // React style attribute expects an object
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-telephone" // Use className instead of class
                        viewBox="0 0 16 16"
                      >
                        <path 
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" 
                          fill="white" // Ensure fill is set directly to white if that's the desired color
                        />
                      </svg>
                    </div>
                    <span className="text-lg">+91 9003119904</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-3">
                  <Mail className="text-purple-400" />
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I'm always open to discussing new opportunities and innovative projects. 
                      Feel free to reach out through any of the channels below.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <a
                      href="mailto:janagnanam12@gmail.com"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Mail size={20} className='text-gray-200' />
                      <span className="font-medium text-gray-200">Email Me</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/janarthanangm"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-purple-900 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Linkedin size={20} className='text-gray-200' />
                      <span className="font-medium text-gray-200">LinkedIn</span>
                    </a>
                    <div className="text-center pt-4 bg-white/5 rounded-xl p-4">
                      <p className="text-gray-400 mb-2">Or call me at</p>
                      <p className="text-white text-xl font-bold">+91 9003119904</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="w-full px-8 md:px-16 lg:px-24 text-center relative z-10">
          <p className="text-lg">&copy; 2025 Janarthanan Gnanamurthy. Crafted with passion and precision.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Sparkles className="text-blue-400 animate-pulse" size={16} />
            <Zap className="text-purple-400 animate-pulse" size={16} />
            <Sparkles className="text-pink-400 animate-pulse" size={16} />
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;