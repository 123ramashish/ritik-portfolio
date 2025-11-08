'use client'
import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-lg sm:text-xl">RITIK RAUSHAN</div>
          <nav className="flex items-center gap-4 sm:gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Projects</a>
            <a href="#contact" className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm sm:text-base">
              CONTACT ME
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              HI I'M<br />
              <span className="text-yellow-400">RITIK RAUSHAN</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              A Builder at heart, Developer with expertise in Web Technologies like MERN Stack, AI and Full-stack Application and Analyst Development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                CONTACT ME
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                alt="Ritik Raushan" 
                className="relative rounded-full w-full h-full object-cover border-4 border-yellow-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const technologies = [
    { icon: '🐍', name: 'Python' },
    { icon: 'JS', name: 'JavaScript', bg: 'bg-yellow-400 text-black' },
    { icon: 'W', name: 'WordPress', bg: 'bg-blue-600' },
    { icon: '🔥', name: 'Firebase' },
    { icon: 'A', name: 'Angular', bg: 'bg-red-600' },
    { icon: 'node', name: 'Node.js', bg: 'bg-green-600' },
    { icon: '⚙️', name: 'Settings' }
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">ABOUT ME</h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <p>
                I am a full-stack developer, having Computer Science Engineering background.
              </p>
              <p>
                I do a front-end/backend based AI system/interface developer and Trigger/Analyze Web Technology Engineering integrations. I am in focus on advanced AI with AI Technology Tools and know Machine Learning & Deep Learning to improve and push it to continuously evolving decade. I also my response and
              </p>
            </div>
            <button className="mt-6 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
              MORE ABOUT ME
            </button>
          </div>
          <div>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              I am a full-stack developer, having Computer Science Engineering background.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${tech.bg || 'bg-gray-800'} flex items-center justify-center text-lg sm:text-xl font-bold`}>
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "E-commerce Bulkupload via API",
      description: "Bulk product upload system with API integration for e-commerce platforms",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["API", "E-commerce", "Automation"],
      link: "#"
    },
    {
      title: "Repertoire Wellness",
      description: "Wellness and health tracking application with user-friendly interface",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      tags: ["Health", "Wellness", "React"],
      link: "#"
    },
    {
      title: "E-commerce product page",
      description: "Modern and responsive e-commerce product display page",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      tags: ["E-commerce", "UI/UX", "Responsive"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">MY PROJECTS</h2>
        <p className="text-gray-400 mb-12 text-sm sm:text-base">
          Here are some of my recent works and projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">LET'S CONNECT</h2>
        <p className="text-gray-400 mb-12 text-sm sm:text-base">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Ritik Raushan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:contact@ritikraushan.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}