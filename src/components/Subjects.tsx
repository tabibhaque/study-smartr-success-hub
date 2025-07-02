
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Subjects = () => {
  const juniorCertSubjects = [
    'Mathematics', 'English', 'Irish', 'Science', 'History', 'Geography',
    'French', 'German', 'Spanish', 'Business Studies', 'Art', 'Music'
  ];

  const leavingCertSubjects = [
    'Higher Level Maths', 'Ordinary Level Maths', 'English', 'Irish',
    'Biology', 'Chemistry', 'Physics', 'Applied Maths', 'History', 'Geography',
    'Economics', 'Business', 'Accounting', 'French', 'German', 'Spanish',
    'Art', 'Music', 'Construction Studies', 'Engineering', 'Design & Communication Graphics'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Subjects We Cover
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tutoring across all Junior Cert and Leaving Cert subjects, 
            with specialized focus on the most challenging areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Junior Cert */}
          <Card className="border-2 border-studysmartr-teal/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-studysmartr-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-2">
                  Junior Certificate
                </h3>
                <p className="text-gray-600">
                  Building strong foundations for senior cycle success
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {juniorCertSubjects.map((subject, index) => (
                  <div 
                    key={index}
                    className="bg-studysmartr-teal/5 rounded-lg px-3 py-2 text-center text-sm font-medium text-studysmartr-navy hover:bg-studysmartr-teal/10 transition-colors"
                  >
                    {subject}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => scrollToSection('#book')}
                  className="bg-studysmartr-teal hover:bg-studysmartr-teal/90 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Book Junior Cert Tutoring
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Leaving Cert */}
          <Card className="border-2 border-studysmartr-blue/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-studysmartr-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-studysmartr-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-2">
                  Leaving Certificate
                </h3>
                <p className="text-gray-600">
                  Expert guidance for your most important exams
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {leavingCertSubjects.map((subject, index) => (
                  <div 
                    key={index}
                    className="bg-studysmartr-blue/5 rounded-lg px-3 py-2 text-center text-sm font-medium text-studysmartr-navy hover:bg-studysmartr-blue/10 transition-colors"
                  >
                    {subject}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => scrollToSection('#book')}
                  className="bg-studysmartr-blue hover:bg-studysmartr-blue/90 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Book Leaving Cert Tutoring
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Focus Areas */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-8">
            Special Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-studysmartr-blue/5 rounded-xl p-6">
              <h4 className="font-semibold text-studysmartr-navy mb-2">Higher Level Maths</h4>
              <p className="text-gray-600 text-sm">Specialized support for the most challenging mathematical concepts</p>
            </div>
            <div className="bg-studysmartr-teal/5 rounded-xl p-6">
              <h4 className="font-semibold text-studysmartr-navy mb-2">Science Subjects</h4>
              <p className="text-gray-600 text-sm">Biology, Chemistry, and Physics with practical exam preparation</p>
            </div>
            <div className="bg-studysmartr-blue/5 rounded-xl p-6">
              <h4 className="font-semibold text-studysmartr-navy mb-2">Essay Subjects</h4>
              <p className="text-gray-600 text-sm">English, History, and Geography with focus on critical analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
