import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Rocket, Target, Users, Code2, Award } from 'lucide-react';

const stats = [
  { icon: <Rocket size={32} />, value: '100+', label: 'MVPs Launched' },
  { icon: <Zap size={32} />, value: '30 Days', label: 'Average Timeline' },
  { icon: <Target size={32} />, value: '98%', label: 'Founder Satisfaction' },
  { icon: <Users size={32} />, value: '50+', label: 'Funded Startups' }
];


export function About() {
  document.title = 'About GetUrStyle - MVP Specialists'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">We Build Web MVPs with AI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            GetUrStyle is a team of specialized web + AI engineers laser-focused on one thing: launching production-ready web MVPs with integrated AI faster than any company in the market.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-blue-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              We eliminate the biggest risk for startup founders: time-to-market. By specializing exclusively in web + AI MVP development, we've perfected a process that delivers production-ready software in 30 days or less.
            </p>
            <p className="text-gray-300">
              We use modern LLM APIs to integrate AI seamlessly into every MVP. No fluff. No agency overhead. No compromises on code quality. Just web engineers and AI specialists who live and breathe startups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Why We Win</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <Code2 className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Web + AI focus</strong> means we leverage LLM APIs for competitive advantage</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Battle-tested process</strong> from 100+ web + AI MVP launches</span>
              </li>
              <li className="flex items-start">
                <Award className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Expert engineers</strong> who specialize in startup speed and modern AI</span>
              </li>
              <li className="flex items-start">
                <Target className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <span><strong>Results-driven</strong> approach—your MVP, your way, on time, with AI built-in</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
              <Zap className="text-blue-500 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Speed Without Shortcuts</h3>
              <p className="text-gray-300">
                We move fast, but we never compromise on code quality, security, or scalability. Production-ready from day one.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
              <Rocket className="text-blue-500 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Founder-First Mindset</h3>
              <p className="text-gray-300">
                We get it. You need your MVP fast, affordable, and reliable. We've built our entire company around this reality.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
              <Target className="text-blue-500 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Radical Specialization</h3>
              <p className="text-gray-300">
                We do one thing: software MVPs. This focus allows us to outperform generalist agencies by 10x.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-500/50 rounded-xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">The 30-Day MVP Formula</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Week 1: Discovery & Architecture | Week 2-3: Development Sprint | Week 4: Testing, Polish & Launch
          </p>
          <p className="text-gray-400">
            Every step is optimized for speed and quality. You'll have a live MVP that's ready to pitch, fundraise, or validate your idea.
          </p>
        </motion.div>
      </div>
    </div>
  );
}