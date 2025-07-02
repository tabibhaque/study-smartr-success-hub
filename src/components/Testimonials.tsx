
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah O\'Connor',
      grade: 'Leaving Cert 2023',
      subject: 'Higher Level Maths',
      rating: 5,
      quote: 'I went from failing honours maths to getting a H3 in my Leaving Cert. The tutors at StudySmartr made complex concepts so much easier to understand.',
      result: 'H3 in Higher Level Maths'
    },
    {
      name: 'Michael Walsh',
      grade: 'Leaving Cert 2023',
      subject: 'Biology & Chemistry',
      rating: 5,
      quote: 'The one-to-one sessions were game-changing. My tutor helped me understand organic chemistry in a way that finally made sense.',
      result: 'H2 in Biology, H1 in Chemistry'
    },
    {
      name: 'Emma Kelly',
      grade: 'Junior Cert 2023',
      subject: 'English & History',
      rating: 5,
      quote: 'StudySmartr helped me build confidence in essay writing. I actually look forward to English class now!',
      result: 'Distinction in both subjects'
    },
    {
      name: 'James Murphy',
      grade: 'Leaving Cert 2023',
      subject: 'Physics & Applied Maths',
      rating: 5,
      quote: 'The exam techniques I learned were invaluable. My tutor showed me how to approach problems systematically and manage my time effectively.',
      result: 'H2 in Physics, H1 in Applied Maths'
    },
    {
      name: 'Aoife Ryan',
      grade: 'Leaving Cert 2023',
      subject: 'French & Business',
      rating: 5,
      quote: 'The small group sessions were perfect. Learning with other students at my level really helped boost my confidence.',
      result: 'H2 in French, H1 in Business'
    },
    {
      name: 'David Chen',
      grade: 'Leaving Cert 2023',
      subject: 'Economics & Geography',
      rating: 5,
      quote: 'StudySmartr helped me achieve my CAO points target. The personalized study plans made all the difference.',
      result: 'H1 in Economics, H2 in Geography'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-studysmartr-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real results from real students. See how StudySmartr has helped hundreds 
            of students achieve their academic goals and build lasting confidence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-studysmartr-blue mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-studysmartr-blue mb-2">500+</div>
            <div className="text-gray-600">Students Helped</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-studysmartr-blue mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-studysmartr-blue mb-2">85%</div>
            <div className="text-gray-600">Grade Improvement</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                {/* Student Photo Placeholder */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-studysmartr-blue/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-studysmartr-blue font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-studysmartr-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.grade}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Subject & Result */}
                <div className="border-t pt-4">
                  <div className="text-sm text-studysmartr-blue font-semibold mb-1">
                    Subject: {testimonial.subject}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Result: {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-700 mb-6">
              Start your journey to academic excellence with our expert tutors.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#book');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-studysmartr-blue hover:bg-studysmartr-blue/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              Book Your First Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
