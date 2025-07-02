
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@studysmartr.ie',
      description: 'Get in touch for any questions or support'
    },
    {
      icon: Users,
      title: 'Book a Call',
      details: '+353 1 234 5678',
      description: 'Speak directly with our education consultants'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Dublin, Cork, Galway',
      description: 'In-person sessions available in major cities'
    },
    {
      icon: Calendar,
      title: 'Office Hours',
      details: 'Mon-Fri: 9AM-7PM, Sat: 10AM-4PM',
      description: 'We\'re here when you need us most'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about our tutoring services? Ready to start your journey to academic success? 
            We're here to help every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Whether you're looking for help with specific subjects, want to understand our approach, 
                or need guidance on choosing the right tutoring option, our friendly team is ready to assist.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-2 border-studysmartr-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-studysmartr-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-studysmartr-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-studysmartr-navy mb-1">
                          {item.title}
                        </h4>
                        <p className="text-studysmartr-blue font-medium mb-1">
                          {item.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Preview */}
            <Card className="border-2 border-studysmartr-teal/20 shadow-lg bg-studysmartr-cream">
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-bold text-studysmartr-navy mb-4">
                  Quick Answers
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-studysmartr-navy text-sm">How soon can I start tutoring?</p>
                    <p className="text-gray-600 text-sm">Usually within 2-3 days of booking confirmation.</p>
                  </div>
                  <div>
                    <p className="font-medium text-studysmartr-navy text-sm">Do you offer online sessions?</p>
                    <p className="text-gray-600 text-sm">Yes, both online and in-person options available.</p>
                  </div>
                  <div>
                    <p className="font-medium text-studysmartr-navy text-sm">What if I need to reschedule?</p>
                    <p className="text-gray-600 text-sm">Flexible rescheduling with 24-hour notice.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-6 text-center">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-studysmartr-navy font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-studysmartr-navy font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone" className="text-studysmartr-navy font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-subject" className="text-studysmartr-navy font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="e.g., Booking inquiry, Subject question"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-studysmartr-navy font-medium">
                      Message *
                    </Label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you achieve your academic goals..."
                      rows={6}
                      required
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studysmartr-blue focus:border-transparent"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-studysmartr-blue hover:bg-studysmartr-blue/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105"
                    >
                      Send Message
                    </Button>
                    <p className="text-gray-600 text-sm mt-4">
                      We typically respond within 2-4 hours during business hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-studysmartr-cream rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-6">
              Why Parents & Students Trust StudySmartr
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-studysmartr-blue mb-2">5+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-studysmartr-blue mb-2">500+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-studysmartr-blue mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-studysmartr-blue mb-2">24hrs</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
