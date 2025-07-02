
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Users, User, Monitor, MapPin } from 'lucide-react';

const Booking = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    subjects: '',
    sessionType: '',
    preferredTime: '',
    additionalInfo: ''
  });

  const pricingPlans = [
    {
      id: 'individual',
      name: '1-to-1 Tutoring',
      icon: User,
      price: '€35',
      period: 'per hour',
      popular: false,
      features: [
        'Personalized attention',
        'Flexible scheduling',
        'Customized learning plan',
        'Progress tracking',
        'Online or in-person'
      ],
      description: 'Perfect for focused, individual learning'
    },
    {
      id: 'small-group',
      name: 'Small Group Sessions',
      icon: Users,
      price: '€25',
      period: 'per hour per student',
      popular: true,
      features: [
        'Groups of 2-4 students',
        'Collaborative learning',
        'Cost-effective',
        'Peer support',
        'Same subject/level'
      ],
      description: 'Learn with peers at your level'
    },
    {
      id: 'intensive',
      name: 'Intensive Package',
      icon: CheckCircle,
      price: '€140',
      period: 'per 5-hour package',
      popular: false,
      features: [
        '5 hours of tutoring',
        'Exam preparation focus',
        'Study materials included',
        'Progress assessment',
        '10% discount applied'
      ],
      description: 'Best value for exam preparation'
    }
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically integrate with a booking system
    console.log('Booking submission:', { selectedPlan, ...formData });
    alert('Thank you for your booking request! We\'ll contact you within 24 hours to confirm your sessions.');
  };

  return (
    <section id="book" className="py-20 bg-studysmartr-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Book Your Tutoring Sessions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect tutoring option for your needs and start your journey 
            to academic success today.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                selectedPlan === plan.id 
                  ? 'border-studysmartr-blue bg-studysmartr-blue/5' 
                  : 'border-gray-200 bg-white hover:border-studysmartr-blue/50'
              } ${plan.popular ? 'ring-2 ring-studysmartr-blue' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-studysmartr-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-studysmartr-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-studysmartr-blue" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-studysmartr-blue">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-studysmartr-teal mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className={`w-6 h-6 rounded-full border-2 mx-auto ${
                    selectedPlan === plan.id 
                      ? 'bg-studysmartr-blue border-studysmartr-blue' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPlan === plan.id && (
                      <CheckCircle className="w-4 h-4 text-white m-0.5" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-studysmartr-navy mb-6 text-center">
                Complete Your Booking
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-studysmartr-navy font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-studysmartr-navy font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-studysmartr-navy font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade" className="text-studysmartr-navy font-medium">Current Grade *</Label>
                    <Select onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st-year">1st Year</SelectItem>
                        <SelectItem value="2nd-year">2nd Year</SelectItem>
                        <SelectItem value="3rd-year">3rd Year (Junior Cert)</SelectItem>
                        <SelectItem value="transition-year">Transition Year</SelectItem>
                        <SelectItem value="5th-year">5th Year</SelectItem>
                        <SelectItem value="6th-year">6th Year (Leaving Cert)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <Label htmlFor="subjects" className="text-studysmartr-navy font-medium">Subjects Needed *</Label>
                  <Input
                    id="subjects"
                    value={formData.subjects}
                    onChange={(e) => handleInputChange('subjects', e.target.value)}
                    placeholder="e.g., Higher Level Maths, Biology, English"
                    required
                    className="mt-2"
                  />
                </div>

                {/* Session Preferences */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-studysmartr-navy font-medium">Session Type Preference</Label>
                    <Select onValueChange={(value) => handleInputChange('sessionType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">
                          <div className="flex items-center">
                            <Monitor className="w-4 h-4 mr-2" />
                            Online Sessions
                          </div>
                        </SelectItem>
                        <SelectItem value="in-person">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            In-Person Sessions
                          </div>
                        </SelectItem>
                        <SelectItem value="flexible">Both Options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className="text-studysmartr-navy font-medium">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekday-morning">Weekday Mornings</SelectItem>
                        <SelectItem value="weekday-afternoon">Weekday Afternoons</SelectItem>
                        <SelectItem value="weekday-evening">Weekday Evenings</SelectItem>
                        <SelectItem value="weekend-morning">Weekend Mornings</SelectItem>
                        <SelectItem value="weekend-afternoon">Weekend Afternoons</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="additionalInfo" className="text-studysmartr-navy font-medium">Additional Information</Label>
                  <textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any specific learning goals, challenges, or requirements..."
                    rows={4}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studysmartr-blue focus:border-transparent"
                  />
                </div>

                {/* Selected Plan Summary */}
                {selectedPlan && (
                  <div className="bg-studysmartr-blue/5 rounded-lg p-4">
                    <h4 className="font-semibold text-studysmartr-navy mb-2">Selected Plan:</h4>
                    <p className="text-studysmartr-blue font-medium">
                      {pricingPlans.find(plan => plan.id === selectedPlan)?.name} - {pricingPlans.find(plan => plan.id === selectedPlan)?.price} {pricingPlans.find(plan => plan.id === selectedPlan)?.period}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-studysmartr-blue hover:bg-studysmartr-blue/90 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105"
                    disabled={!selectedPlan}
                  >
                    {selectedPlan ? 'Book Your Sessions' : 'Please Select a Plan'}
                  </Button>
                  <p className="text-gray-600 text-sm mt-4">
                    We'll contact you within 24 hours to confirm your booking and arrange payment.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
