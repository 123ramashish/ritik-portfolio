'use client'
import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { DiPhp, DiJavascript1, DiWordpress, DiJava, DiNodejs, DiReact } from 'react-icons/di'
import { FaAngular } from 'react-icons/fa'
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
              <span className="text-yellow-400  whitespace-nowrap" >RITIK RAUSHAN</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              A skilled Full Stack Developer with expertise in web technologies like The MEAN Stack, as well as Mobile Application and Android Development.            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                CONTACT ME
              </a>
              <a href="https://www.linkedin.com/in/ritik-raushan-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
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
              <Image
                src="/ritik.png"
                alt="Ritik Raushan"
                className="relative rounded-full w-full h-full object-cover border-4 border-yellow-400/50"
                width={200}
                height={200}
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
    { icon: <DiPhp color="#777BB3" />, name: 'PHP' },
    { icon: <DiJavascript1 color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <DiWordpress color="#21759B" />, name: 'WordPress' },
    { icon: <DiJava color="#5382A1" />, name: 'Java' },
    { icon: <FaAngular color="#DD0031" />, name: 'Angular' },
    { icon: <DiNodejs color="#339933" />, name: 'Node.js' },
    { icon: <DiReact color="#61DBFB" />, name: 'React' },
  ]

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="">
        <div className="">
          <div className=' grid grid-cols-2 justify-between px-8'>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-yellow-200 text-center">ABOUT ME</h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <p className='text-white text-2xl'>
                I am a full-stack developer, having Computer Science Engineering background.
              </p>
              <p className='text-sm'>
                I do a front-end/backend based AI system/interface developer and Trigger/Analyze Web Technology Engineering integrations. I am in focus on advanced AI with AI Technology Tools and know Machine Learning & Deep Learning to improve and push it to continuously evolving decade. I also my response and
              </p>

              <button className="mt-6 border border-white text-white px-6 py-2 rounded hover:bg-yellow-200 hover:text-black transition-colors">
                MORE ABOUT ME
              </button>
            </div>
          </div>

        </div  >
        <div className='mt-24 bg-[#1E1E1E] p-4 w-full border-y-2 border-y-[#D0DF87]'>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 ">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-6xl flex items-center justify-center">
                  {tech.icon}
                </div>
              </div>
            ))}
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
      name:'GroupInApp',
      title: 'Promotional landingpage for our favorite show',
      description:
        'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities. Got my hands on JavaScript, Sass, and the Parcel build tool.',
      image:
        '/groupInnApp.png',
      bgColor: 'bg-orange-400',
      tech: 'Interaction Design • Frontend Dev',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name:'Blog App',
      title: 'Blog site for World News',
      description:
        'Mastered CSS Grid complexities by creating a complex blog site. This project involved designing an intricate layout with numerous sections, each presenting unique challenges in achieving perfect alignment and responsiveness.',
      image:
        '/blogApp.png',
      bgColor: 'bg-purple-500',
      tech: 'Frontend Development',
      tags: ['HTML', 'CSS', 'Responsive'],
    },
    {
      name:'Zunaki Plus',
      title: 'E-commerce product page',
      description:
        'Engineered a fully functional e-commerce product page featuring an interactive lightbox gallery, dynamic cart management, and seamless product quantity selection. Integrated smooth transitions and hover effects.',
      image:
        '/zunaki.png',
      bgColor: 'bg-orange-300',
      tech: 'Frontend Dev • E-commerce',
      tags: ['React', 'API', 'E-commerce'],
    },
  ]

  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#D0DF87]">
          MY PROJECTS
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl text-base sm:text-lg">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>

        <div className="flex flex-col space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-10 items-start"
            >
              {/* Image Side */}
              <div
                className={`bg-[#1E1E1E] rounded-3xl px-12 py-24  shadow-xl`}
              >
                <p className='bg-black w-24 text-center py-1 rounded-xl shadow-md text-white text-xs -translate-y-16'>{project.name}</p>
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full  h-96 object-cover"
                    
                  />
                </div>
              </div>

              {/* Details Side */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Project Info
                    </p>
                    <p className="text-gray-300 text-sm">{project.tech}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D0DF87] hover:opacity-80 transition"
                  >
                    LIVE DEMO <ExternalLink size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D0DF87] hover:opacity-80 transition"
                  >
                    SEE ON GITHUB <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// Contact Component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#D0DF87]">
            LET’S CONNECT
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Say hello at{' '}
            <a
              href="mailto:ritikraushan@gmail.com"
              className="text-[#D0DF87] hover:underline"
            >
              ritikraushan@gmail.com
            </a>
          </p>
          <p className="text-gray-400 mb-10 text-sm sm:text-base">
            For more info, here’s my{' '}
            <a
              href="#"
              className="text-[#D0DF87] underline underline-offset-4 hover:text-yellow-200"
            >
              resume
            </a>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0DF87] transition-colors"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0DF87] transition-colors"
            >
              <Github size={26} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D0DF87] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D0DF87] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D0DF87] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D0DF87] transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#D0DF87] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#c4d872] transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}

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