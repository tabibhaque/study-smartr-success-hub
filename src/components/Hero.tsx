
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-studysmartr-blue via-studysmartr-teal to-studysmartr-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-slide-in-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excel in Your
              <span className="block text-studysmartr-cream">Junior & Leaving Cert</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              Expert tutoring that builds confidence, masters content, and delivers real results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-studysmartr-cream w-6 h-6" />
                <span className="text-lg">1-to-1 & Small Group Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-studysmartr-cream w-6 h-6" />
                <span className="text-lg">Online & In-Person Options</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-studysmartr-cream w-6 h-6" />
                <span className="text-lg">Affordable & Accessible</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-studysmartr-cream w-6 h-6" />
                <span className="text-lg">Expert Tutors & Proven Methods</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#book')}
                size="lg"
                className="bg-white text-studysmartr-blue hover:bg-studysmartr-cream transition-all duration-200 hover:scale-105 font-semibold px-8 py-4 text-lg rounded-full"
              >
                Start Learning Today
              </Button>
              <Button 
                onClick={() => scrollToSection('#about')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-studysmartr-blue transition-all duration-200 font-semibold px-8 py-4 text-lg rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Student Image Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <p className="text-lg font-medium">Student Success Image</p>
                    <p className="text-sm opacity-75">Placeholder for real student photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-studysmartr-cream text-studysmartr-blue px-4 py-2 rounded-full font-bold shadow-lg">
                98% Success Rate
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-studysmartr-blue px-4 py-2 rounded-full font-bold shadow-lg">
                500+ Students
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
