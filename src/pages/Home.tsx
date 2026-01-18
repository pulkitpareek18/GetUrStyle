import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Users, TrendingUp, Rocket, Award, Instagram, Globe, Shield, Clock, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '$10M+', label: 'Funding Raised by Clients' },
  { value: '15+', label: 'Successful MVPs' },
  { value: '30 Days', label: 'Average Delivery' },
  { value: '100%', label: 'Client Satisfaction' }
];

const benefits = [
  { icon: <Zap size={24} />, title: 'MVP in 30 Days', description: 'Launch your product faster than the competition' },
  { icon: <CheckCircle size={24} />, title: 'Production-Ready', description: 'Fully tested, scalable, and deployment-ready' },
  { icon: <Users size={24} />, title: 'Dedicated Team', description: 'Expert developers focused on your vision' },
  { icon: <TrendingUp size={24} />, title: 'Growth-Focused', description: 'Built for scale from day one' }
];

const caseStudies = [
  {
    company: 'Almst Studio',
    description: 'Complete online presence for a creative studio now scaling rapidly',
    result: '20+ employees, partnered with Zara, Tira, Reliance, Arks & more',
    testimonial: 'They understood our vision and delivered beyond expectations.',
    instagram: '@almst.studio',
    website: null
  },
  {
    company: 'Farmspherica Innovations',
    description: 'Full digital presence with internal software systems for agritech startup',
    result: 'Raised funding from 40+ VCs and incubators',
    testimonial: 'The software they built became our strongest asset during fundraising.',
    instagram: '@farmsphericainnovationspvtltd',
    website: null
  },
  {
    company: 'Atri8',
    description: 'AI-automated platform for universities to automate answer sheet checking, grading, and classroom learning',
    result: 'Serving universities & colleges across India',
    testimonial: 'Complex AI integration done right. Our platform runs flawlessly.',
    instagram: null,
    website: 'atri8.com'
  },
  {
    company: 'VerifyChain',
    description: 'Hackathon-winning secure verification & tracking system for gig workers, built for Ministry of Home Affairs',
    result: 'Built for Bureau of Police Research & Development',
    testimonial: 'Enterprise-grade security with startup-speed delivery.',
    instagram: null,
    website: null
  }
];

export function Home() {
  document.title = 'Startup MVP Development in 30 Days - GetUrStyle'
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <p className="text-orange-300 font-semibold text-sm">Only 2 spots left for February</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Launch Your MVP in 30 Days
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              The fastest route from idea to market. No compromises on quality.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Purpose-built for startup founders who need a production-ready MVP without breaking the bank or the timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  Get Your Free Consultation
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Clock size={16} />
                Free 15-min strategy call
              </p>
            </div>
            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Shield size={16} className="text-green-500" />
              <span>Trusted by funded startups & top brands</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="py-8 bg-black/50 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose GetUrStyle for Your MVP?</h2>
            <p className="text-gray-400">We build web MVPs with AI built-in—faster than anyone else</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="text-blue-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Startup MVPs We've Launched</h2>
            <p className="text-gray-300">Join dozens of funded startups who chose us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                  </div>
                  <Rocket className="text-blue-500" size={32} />
                </div>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-gray-200 font-semibold">{study.result}</p>
                </div>
                {/* Testimonial Quote */}
                <div className="flex items-start gap-2 mb-4 text-gray-400 italic">
                  <Quote size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-sm">{study.testimonial}</p>
                </div>
                {study.instagram && (
                  <a href={`https://instagram.com/${study.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Instagram size={18} className="mr-2" />
                    {study.instagram}
                  </a>
                )}
                {study.website && (
                  <a href={`https://${study.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Globe size={18} className="mr-2" />
                    {study.website}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Software Only Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="text-blue-500 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-4">We Build Web MVPs with AI</h2>
            <p className="text-xl text-gray-300 mb-8">
              By focusing exclusively on web + AI MVP development, we've perfected the process. LLM APIs make AI easy to integrate, so we build every MVP with AI capabilities built-in. No design agencies, no generalists—just pure web + AI engineering excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">100% Focused</h3>
                <p className="text-gray-400">No distractions. Software is all we do.</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Expert Engineers</h3>
                <p className="text-gray-400">Specialized team optimized for speed & quality.</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Proven Process</h3>
                <p className="text-gray-400">Refined methodology from 100+ launches.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Startup-Friendly Pricing</h2>
            <p className="text-xl text-gray-300 mb-8">Quality doesn't have to be expensive. We offer transparent, scalable pricing.</p>
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                View Pricing Plans
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <p className="text-orange-300 font-semibold text-sm">Only 2 spots left for February</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Launch Your MVP?</h2>
            <p className="text-xl text-gray-300 mb-2">Join founders who've raised $10M+ with software we built.</p>
            <p className="text-lg text-gray-400 mb-8">Book your free strategy call today — no obligation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  Get Your Free Consultation
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              No payment required • 15-min call • Actionable insights
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}