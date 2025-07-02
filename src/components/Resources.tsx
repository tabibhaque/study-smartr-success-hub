
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, CheckCircle, Calendar } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Study Guides',
      description: 'Comprehensive study guides for all Junior and Leaving Cert subjects',
      items: ['Higher Level Maths Guide', 'Biology Practical Notes', 'History Essay Templates', 'English Poetry Analysis'],
      downloadable: true
    },
    {
      icon: CheckCircle,
      title: 'Exam Tips',
      description: 'Proven strategies and techniques for exam success',
      items: ['Time Management Tips', 'Exam Anxiety Solutions', 'Revision Techniques', 'Last-Minute Strategies'],
      downloadable: true
    },
    {
      icon: Calendar,
      title: 'Study Planners',
      description: 'Structured templates to organize your study schedule',
      items: ['6-Month Study Planner', 'Weekly Revision Schedule', 'Subject-Specific Timelines', 'Goal Setting Worksheets'],
      downloadable: true
    },
    {
      icon: BookOpen,
      title: 'Practice Papers',
      description: 'Past exam papers and sample questions with detailed solutions',
      items: ['LC Higher Level Maths 2023', 'JC Science Sample Papers', 'English Paper 1 Practice', 'History Document Questions'],
      downloadable: true
    }
  ];

  const blogPosts = [
    {
      title: 'How to Master Higher Level Maths',
      excerpt: 'Essential strategies for tackling the most challenging mathematics concepts and exam questions.',
      date: 'January 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Effective Revision Techniques for Science Subjects',
      excerpt: 'Proven methods for memorizing complex scientific concepts and preparing for practical exams.',
      date: 'January 10, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Essay Writing Excellence: English and History',
      excerpt: 'Master the art of essay writing with structure, analysis, and exam-specific techniques.',
      date: 'January 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-studysmartr-navy mb-6">
            Free Learning Resources
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of study materials, guides, and tips 
            to supplement your tutoring sessions and boost your independent learning.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="border-2 border-studysmartr-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-studysmartr-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-studysmartr-blue" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-studysmartr-navy mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-studysmartr-teal rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-studysmartr-blue hover:bg-studysmartr-blue/90 text-white rounded-full transition-all duration-200 hover:scale-105"
                  size="sm"
                >
                  Download Free
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Section */}
        <div className="bg-studysmartr-cream rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-studysmartr-navy mb-4">
              Latest Study Tips & Insights
            </h3>
            <p className="text-gray-700 text-lg">
              Expert advice and proven strategies from our experienced tutors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-studysmartr-blue to-studysmartr-teal rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📖</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h4 className="font-serif text-xl font-bold text-studysmartr-navy mb-3">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline"
                    className="border-studysmartr-blue text-studysmartr-blue hover:bg-studysmartr-blue hover:text-white transition-all duration-200"
                    size="sm"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-studysmartr-blue rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Stay Updated with Study Tips
            </h3>
            <p className="mb-6 text-studysmartr-cream">
              Get weekly study tips, exam updates, and exclusive resources delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-studysmartr-cream"
              />
              <Button 
                className="bg-white text-studysmartr-blue hover:bg-studysmartr-cream font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
