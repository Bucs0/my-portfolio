import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    // Immediately show home section on mount
    setTimeout(() => {
      setVisibleElements(new Set(['home-content']));
    }, 100);
  }, []);

  useEffect(() => {
    // Immediately show home section on mount
    setTimeout(() => {
      setVisibleElements(new Set(['home-content']));
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const projects = [
    {
      title: "Your Voice, Her Safety",
      description: "A secure platform empowering women to report unsafe areas, share experiences, and support community safety.",
      tech: ["REACT", "CSS", "NODEJS", "MYSQL"],
      image: "src/components/pictures/projects/Your Voice, Her Safety.png",
      github: "https://github.com/Bucs0/Her-Voice-Her-Safety",
      website: "https://celebrated-begonia-cf9be6.netlify.app/"
    },
    {
      title: "Asus Laptop Showcase",
      description: "Modern laptop showcase website featuring the latest ASUS models with detailed specifications.",
      tech: ["HTML", "CSS"],
      image: "src/components/pictures/projects/Asus Laptop.png",
      github: "https://github.com/Bucs0/ASUS-Laptop.github.oi",
      website: "https://bucs0.github.io/ASUS-Laptop.github.oi/"
    },
    {
      title: "Birth Month Calendar",
      description: "Single-featured calendar section of november design.",
      tech: ["HTML", "CSS"],
      image: "src/components/pictures/projects/Calendar.png",
      github: "https://github.com/Bucs0/Calendar-of-my-birth-month",
      website: "https://bucs0.github.io/Calendar-of-my-birth-month/"
    },
    {
      title: "Children's Story Platform",
      description: "Interactive storytelling platform for children with illustrations.",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      image: "src/components/pictures/projects/Childrens Story.png",
      github: "https://github.com/Bucs0/CHILDREN-STORY",
      website: "https://bucs0.github.io/CHILDREN-STORY/"
    },
    {
      title: "Minute Burger Catalog",
      description: "Digital menu catalog for Minute Burger which shows what's available and unavailable.",
      tech: ["HTML", "CSS"],
      image: "src/Components/pictures/projects/Minute Burger Catalog.png",
      github: "https://github.com/Bucs0/Minute-Burger-Catalog",
      website: "https://bucs0.github.io/Minute-Burger-Catalog/"
    },
    {
      title: "Zodiac Animals Guide",
      description: "Interactive guide to Chinese zodiac animals with personality traits.",
      tech: ["HTML", "CSS"],
      image: "src/Components/pictures/projects/zodiac animals.png",
      github: "https://github.com/Bucs0/The-12-Chinese-Zodiac-Animals",
      website: "https://bucs0.github.io/The-12-Chinese-Zodiac-Animals/"
    }
  ];

  const skills = [
    { icon: Code, name: "Frontend Development", desc: "React, Shadcn/ui, HTML/CSS/JS" },
    { icon: Database, name: "Backend Development", desc: "Node.js, Python, Java, SQL/NoSQL" },
    { icon: Palette, name: "UI/UX Design", desc: "Figma, TailwindCSS, Responsive Design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/herologo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mark Jade Bucao
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-gray-50"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className={`relative w-56 h-56 mx-auto fade-in-section stagger-1 ${visibleElements.has('home-content') ? 'is-visible' : ''}`}>
              <img 
                src="/hero.jpg" 
                alt="Mark Jade Bucao" 
                className="w-full h-full rounded-full object-cover object-top border-4 border-blue-500 shadow-xl"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-gray-900 fade-in-section stagger-2 ${visibleElements.has('home-content') ? 'is-visible' : ''}`}>
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mark Jade Bucao</span>
            </h1>
            <p className={`text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto fade-in-section stagger-3 ${visibleElements.has('home-content') ? 'is-visible' : ''}`}>
              3rd Year Computer Scientist Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <p className={`text-lg text-gray-500 max-w-xl mx-auto fade-in-section stagger-3 ${visibleElements.has('home-content') ? 'is-visible' : ''}`}>
              I craft beautiful, functional web experiences that make a difference. 
              Passionate about clean code and elegant solutions.
            </p>
            <div className={`flex gap-4 justify-center pt-4 fade-in-section stagger-4 ${visibleElements.has('home-content') ? 'is-visible' : ''}`}>
              <Button onClick={() => scrollToSection('projects')} className="bg-blue-600 hover:bg-blue-700">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 text-gray-900 fade-in-section ${visibleElements.has('about-title') ? 'is-visible' : ''}`} id="about-title">About Me</h2>
          
          <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 fade-in-section ${visibleElements.has('about-content') ? 'is-visible' : ''}`} id="about-content">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I’m a passionate 3rd year CS undergraduate web developer dedicated to building modern, user-centered applications. 
                I specialize in React, Node.js, and creating intuitive, accessible interfaces 
                that deliver seamless user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey began with curiosity about how technology shapes people’s lives, 
                evolving into a mission to craft elegant, maintainable solutions that make 
                an impact. I value clean code, thoughtful design, and continuous learning 
                to stay ahead in an ever-evolving field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I’m not coding, I enjoy exploring new frameworks, refining my design 
                skills, and contributing to creative digital projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Code className="w-20 h-20 mx-auto text-blue-600" />
                <p className="text-lg font-semibold text-gray-800">Constantly Learning</p>
                <p className="text-gray-600">Always exploring new technologies and best practices</p>
              </div>
            </div>
          </div>

          <h3 className={`text-3xl font-bold text-center mb-8 text-gray-900 fade-in-section ${visibleElements.has('skills-title') ? 'is-visible' : ''}`} id="skills-title">Skills & Expertise</h3>
          <div className={`grid md:grid-cols-3 gap-6 fade-in-section ${visibleElements.has('skills-content') ? 'is-visible' : ''}`} id="skills-content">
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <skill.icon className="w-12 h-12 text-blue-600 mb-2" />
                  <CardTitle>{skill.name}</CardTitle>
                  <CardDescription>{skill.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 text-gray-900 fade-in-section ${visibleElements.has('projects-title') ? 'is-visible' : ''}`} id="projects-title">Featured Projects</h2>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section ${visibleElements.has('projects-content') ? 'is-visible' : ''}`} id="projects-content">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Site</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-4 text-gray-900 fade-in-section ${visibleElements.has('contact-title') ? 'is-visible' : ''}`} id="contact-title">Get In Touch</h2>
          <p className={`text-center text-gray-600 mb-12 fade-in-section ${visibleElements.has('contact-subtitle') ? 'is-visible' : ''}`} id="contact-subtitle">
            I'm always open to discussing new projects, opportunities, or just chatting about tech!
          </p>
          
          <div className={`grid md:grid-cols-2 gap-12 fade-in-section ${visibleElements.has('contact-content') ? 'is-visible' : ''}`} id="contact-content">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
              {formSubmitted && (
                <Alert className="bg-green-50 border-green-200">
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent successfully.
                  </AlertDescription>
                </Alert>
              )}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows={4} />
                </div>
                <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a href="https://github.com/Bucs0" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">@bucs0</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/mark-jade-bucao-792304305/" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">Mark Jade Bucao</p>
                  </div>
                </a>
                <a href="https://www.markjadebucao10@gmail.com" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">markjadebucao10@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Mark Jade Bucao. Made with React, TailwindCSS, and Shadcs/ui</p>
      </footer>
    </div>
  );
}