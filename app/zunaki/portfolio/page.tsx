'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white py-4 px-8 fixed w-full top-0 z-50 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-950 font-bold text-lg">
            ZP
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
          If you're aiming for exceptional growth higher sales and boosted profitability through paid in advertising you've come to the right place        </p>
        <button className="bg-white text-indigo-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};
// about us compnent


const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section - Left */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-80 lg:h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for image - replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Image Placeholder</span>
              </div>
              {/* If you have an actual image, use this instead: */}
              <Image
                src="/thumb.jpg"
                alt="About Zunaki Plus"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              {/* Heading Section */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                  About
                </h1>
                <div className="w-20 h-1 bg-gray-300"></div>
              </div>

              {/* Subheading */}
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 tracking-wide">
                  ZUNAKI PLUS
                </h2>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed tracking-normal">
                  Lorem Ipsum Dolar Sit Amet, Consectetur Adipiscing Etti. Integer Mec
                  Odio. Praesent Libero. Sed Cursus Ante Dagibus Diam. Sed Mis!. Nulla
                  Quis Som At Nibh Elementum Impendisi. Duis Sagittis Ipsum. Praesent
                  Mauris. Fusce Rec Tellus Sed.
                </p>
              </div>

              {/* Optional Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
    <section id="commitments" className="bg-white text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Commitments</h2>
        <p className="text-gray-600 text-sm mb-12 max-w-2xl">
          We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="bg-purple-50 p-8 rounded-xl relative overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-32 h-32 text-purple-200 opacity-50" viewBox="0 0 100 100">
              <circle cx="20" cy="80" r="40" fill="currentColor" />
              <circle cx="60" cy="60" r="30" fill="currentColor" />
            </svg>
            <p className="text-xs text-gray-500 mb-3 relative z-10">Project that Have been successfully completed</p>
            <p className="text-5xl font-bold relative z-10">245%</p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl relative overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-32 h-32 text-purple-200 opacity-50" viewBox="0 0 100 100">
              <circle cx="20" cy="80" r="40" fill="currentColor" />
              <circle cx="60" cy="60" r="30" fill="currentColor" />
            </svg>
            <p className="text-xs text-gray-500 mb-3 relative z-10">Audiences reached </p>
            <p className="text-5xl font-bold relative z-10">130K+</p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl relative overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-32 h-32 text-purple-200 opacity-50" viewBox="0 0 100 100">
              <circle cx="20" cy="80" r="40" fill="currentColor" />
              <circle cx="60" cy="60" r="30" fill="currentColor" />
            </svg>
            <p className="text-xs text-gray-500 mb-3 relative z-10">Businesses Trust Us</p>
            <p className="text-5xl font-bold relative z-10">50+</p>
          </div>
        </div>

        {/* Our Products Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Our<br />Products</h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-96 h-64 bg-gray-200 rounded-xl"></div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Where Strategy Meets Scale.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum sapien in metus placerat
                finibus. Maecenas elementum, nibh quis commodo tincidunt, odio libero luctus justo, faucibus auctor
                erat tellus sed elit. Praesent tempor massa quis lorem fermentum, hendrerit dignissim velit eleifend.
                Cras nec erat et lorem vestibulum laoreet. Phasellus vehicula mi eu dui suscipit, vel condimentum
                dolor imperdiet.
              </p>
              <button className="border-2 border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-4">
                LETS TALK
              </button>
              <div className="flex gap-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Projects Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12">Our<br />Projects</h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-96 h-64 bg-gray-200 rounded-xl"></div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Where Strategy Meets Scale.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum sapien in metus placerat
                finibus. Maecenas elementum, nibh quis commodo tincidunt, odio libero luctus justo, faucibus auctor
                erat tellus sed elit. Praesent tempor massa quis lorem fermentum, hendrerit dignissim velit eleifend.
                Cras nec erat et lorem vestibulum laoreet. Phasellus vehicula mi eu dui suscipit, vel condimentum
                dolor imperdiet.
              </p>
              <button className="border-2 border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-4">
                LETS TALK
              </button>
              <div className="flex gap-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Zoe Mantle',
      role: 'Founder, Alpha Group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod',
      image: ''
    },
    {
      id: 2,
      name: 'Dan Joe',
      role: 'Founder, Alpha Group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod',
      image: ''
    },
    {
      id: 3,
      name: 'Zoe Mantle',
      role: 'Founder, Alpha Group',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod',
      image: ''
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod',
      image: ''
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900  text-black py-16 px-8">
      <div className="max-w-7xl mx-auto text-black">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Testimonials</h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-black text-white border border-gray-100  bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />

            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-black text-white border border-gray-100 bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Next testimonial"
            >
              <FaArrowRight />

            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-white p-6 rounded-2xl transition-all duration-500 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
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
    <section id="contact" className="bg-white text-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-200 h-96 rounded-2xl text-black"></div>

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
    <footer className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white py-16 px-8 relative overflow-hidden">
      {/* Decorative curved line */}
      <div className="absolute top-0 left-0 w-full h-32">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-950 font-bold text-xl">
                ZP
              </div>
            </div>

            <h3 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="w-10 h-10 bg-white text-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white text-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white text-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-gray-300">Quick Links</h3>
            <ul className="space-y-3 text-white">
              <li><a href="#home" className="hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-blue-300 transition-colors">Products</a></li>
              <li><a href="#projects" className="hover:text-blue-300 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Lets Grow Together Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Lets Grow Together</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              We believe the best success is always shared success, which is why we commit to a true partnership with every client, move past traditional benchmarks and redefine what's possible for your business. Let's combine your ambitious vision with our strategic expertise to achieve exponential growth together.            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-10 text-center text-gray-400 text-sm">
          <p>© 2024 ZS Digital. All rights reserved.</p>
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
      <About />
      <ServicesSection />
      <CommitmentsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}