
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, CheckCircle, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Curriculum Knowledge',
      description: 'Our tutors know the Junior & Leaving Cert curricula inside out, focusing on exam technique and content mastery.'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'Small groups and 1-to-1 sessions tailored to each student\'s learning style and academic goals.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of helping students achieve their target grades and gain confidence in challenging subjects.'
    },
    {
      icon: Award,
      title: 'Qualified Tutors',
      description: 'All our tutors are qualified professionals with extensive experience in Irish secondary education.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-studysmartr-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Why Choose StudySmartr?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're not just another tutoring service. We're your partners in academic success, 
            combining expert knowledge with a warm, supportive approach that builds confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-studysmartr-blue/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-studysmartr-blue" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-studysmartr-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="font-serif text-3xl font-bold text-studysmartr-navy mb-6">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                StudySmartr was founded by a team of passionate educators who understand 
                the unique challenges of the Irish education system. We've seen too many 
                bright students struggle not because they lack ability, but because they 
                need the right guidance and support.
              </p>
              <p>
                Our mission is simple: make quality tutoring accessible and affordable 
                for every student who needs it. We believe that with the right support, 
                every student can achieve their academic goals and build lasting confidence.
              </p>
              <p>
                Whether you're aiming for your dream college course or simply want to 
                improve your understanding of challenging subjects, we're here to help 
                you succeed.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-studysmartr-blue to-studysmartr-teal rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <p className="text-lg font-medium">Team Photo</p>
                  <p className="text-sm opacity-75">Placeholder for team image</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-studysmartr-blue">500+</div>
                  <div className="text-sm text-gray-600">Students Helped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-studysmartr-blue">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-studysmartr-blue">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
