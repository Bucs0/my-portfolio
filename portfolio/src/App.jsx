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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative task manager with real-time updates, team features, and progress tracking.",
      tech: ["React", "Firebase", "TailwindCSS", "shadcn/UI"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      link: "#"
    }
  ];

  const skills = [
    { icon: Code, name: "Frontend Development", desc: "React, Vue.js, HTML/CSS/JS" },
    { icon: Database, name: "Backend Development", desc: "Node.js, Python, SQL/NoSQL" },
    { icon: Palette, name: "UI/UX Design", desc: "Figma, TailwindCSS, Responsive Design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
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
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
              XD
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mark Jade Bucao</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              3rd Year Computer Scientist Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              I craft beautiful, functional web experiences that make a difference. 
              Passionate about clean code and elegant solutions.
            </p>
            <div className="flex gap-4 justify-center pt-4">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience building 
                modern web applications. I specialize in React, Node.js, and creating 
                intuitive user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in tech started with a curiosity about how things work, which 
                evolved into a career dedicated to solving complex problems through code. 
                I believe in writing clean, maintainable code and staying updated with 
                the latest technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical blogs, or exploring new frameworks and tools.
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
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            I'm always open to discussing new projects, opportunities, or just chatting about tech!
          </p>
          <div className="grid md:grid-cols-2 gap-12">
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
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">@yourhandle</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">Your Name</p>
                  </div>
                </a>
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">your.email@example.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p>&copy; 2025 John Smith. Built with React, TailwindCSS & shadcn/UI</p>
      </footer>
    </div>
  );
}