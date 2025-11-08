'use client'
import React, { useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white py-4 px-8 fixed w-full top-0 z-50 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-950 font-bold text-lg">
            ZS
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-300 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-300 transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-white text-indigo-950 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3">
          <a href="#home" className="block hover:text-blue-300 transition-colors">Home</a>
          <a href="#about" className="block hover:text-blue-300 transition-colors">About</a>
          <a href="#services" className="block hover:text-blue-300 transition-colors">Services</a>
          <a href="#projects" className="block hover:text-blue-300 transition-colors">Projects</a>
          <a href="#testimonials" className="block hover:text-blue-300 transition-colors">Testimonials</a>
          <a href="#contact" className="block hover:text-blue-300 transition-colors">Contact</a>
          <button className="bg-white text-indigo-950 px-6 py-2 rounded-full font-semibold w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Digital Marketing<br />Made Simple
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum sapien in metus placerat finibus. Transform your business with our innovative digital solutions.
        </p>
        <button className="bg-white text-indigo-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Website Development',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-yellow-200',
      textColor: 'text-black'
    },
    {
      id: 2,
      icon: (
        <div className="w-8 h-8 border-2 border-black rounded flex items-center justify-center text-xs font-bold">CMS</div>
      ),
      title: 'Custom ERP Development',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-gray-100',
      textColor: 'text-black'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-gray-100',
      textColor: 'text-black'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Business Automation',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-gray-100',
      textColor: 'text-black'
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: 'Digital Branding',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-gray-100',
      textColor: 'text-black'
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'SEO Optimization',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-gray-100',
      textColor: 'text-black'
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex gap-2">
            <span>1512</span>
            <span className="bg-blue-400 px-2 rounded-full">500</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-bold text-white mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} ${service.textColor} p-8 rounded-3xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Commitments Section Component
const CommitmentsSection = () => {
  return (
    <section id="commitments" className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Commitments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">OUR COMMITMENT</p>
            <p className="text-4xl font-bold">242%</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">OUR COMMITMENT</p>
            <p className="text-4xl font-bold">£30K+</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">OUR COMMITMENT</p>
            <p className="text-4xl font-bold">50+</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">How We Work?</h3>
              <h4 className="text-xl font-semibold mb-4">Project Manager's Robust Audit</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Maecenas elementum sapien in metus placerat finibus. Maecenas elementum, nibh quis 
                commodo tincidunt, odio libero luctus justo, faucibus auctor erat tellus sed elit. 
                Praesent tempor massa quis lorem fermentum, hendrerit dignissim velit eleifend. Cras 
                nec erat et lorem vestibulum laoreet. Phasellus vehicula mi eu dui suscipit, vel 
                condimentum dolor imperdiet.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="w-64 h-48 bg-gray-200 rounded-lg"></div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-4">Where Strategy Meets Scale</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Maecenas elementum sapien in metus placerat finibus. Maecenas elementum, nibh quis 
                commodo tincidunt, odio libero luctus justo, faucibus auctor erat tellus sed elit. 
                Praesent tempor massa quis lorem fermentum, hendrerit dignissim velit eleifend. Cras 
                nec erat et lorem vestibulum laoreet. Phasellus vehicula mi eu dui suscipit, vel 
                condimentum dolor imperdiet.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="w-64 h-48 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Company',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO, Startup',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Founder, Business',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-200 h-96 rounded-2xl"></div>
          
          <div>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none bg-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none bg-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none bg-transparent"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-black outline-none bg-transparent resize-none"
              ></textarea>
              <button
                onClick={() => alert('Message sent!')}
                className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl">
                ZS
              </div>
              <span className="text-2xl font-bold">Lets grow Together</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Maecenas elementum sapien in metus placerat finibus. Maecenas elementum, nibh quis 
              commodo tincidunt, odio libero luctus justo, faucibus auctor erat tellus sed elit. 
              Praesent tempor massa quis lorem fermentum.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white">SEO</a></li>
                <li><a href="#" className="hover:text-white">Branding</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CommitmentsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}