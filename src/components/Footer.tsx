
import React from 'react';
import { Mail, MapPin, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Resources', href: '#resources' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const subjects = [
    'Higher Level Maths',
    'Biology',
    'Chemistry',
    'Physics',
    'English',
    'History',
    'Geography',
    'Business Studies'
  ];

  return (
    <footer className="bg-studysmartr-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/7ebab5d0-2bac-44ad-8a13-8dc67736708a.png" 
                alt="StudySmartr Logo" 
                className="h-10 w-10 filter brightness-0 invert"
              />
              <span className="font-serif font-bold text-2xl text-studysmartr-cream">
                StudySmartr
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Expert tutoring for Junior Cert and Leaving Cert students. 
              Building confidence, mastering content, and delivering real results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-studysmartr-teal" />
                <span>info@studysmartr.ie</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-3 text-studysmartr-teal" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-studysmartr-teal" />
                <span>Dublin, Cork, Galway</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-studysmartr-cream">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Subjects */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-studysmartr-cream">
              Popular Subjects
            </h3>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200 cursor-pointer">
                    {subject}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-studysmartr-cream">
              Resources & Support
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#resources')}
                  className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                >
                  Free Study Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#resources')}
                  className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                >
                  Exam Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#resources')}
                  className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                >
                  Study Planners
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#book')}
                  className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                >
                  Book a Session
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200"
                >
                  Get Support
                </button>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-studysmartr-cream">
                Stay Updated
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                />
                <button className="bg-studysmartr-teal hover:bg-studysmartr-teal/90 px-4 py-2 rounded-r-lg text-sm font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} StudySmartr. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-studysmartr-teal transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Built with ❤️ for Irish students seeking academic excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
