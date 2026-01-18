import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Zap, TestTube, Users, Rocket, Brain } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Full-Stack Web MVP Development',
    description: 'Complete web application development from frontend to backend. We build scalable, maintainable code using modern tech stacks.',
    features: ['React/Vue Frontend', 'Node.js Backend', 'Database Design', 'API Development']
  },
  {
    icon: <Brain size={32} />,
    title: 'AI-Powered Features',
    description: 'Integrate cutting-edge AI into your MVP using OpenAI, Claude, and other LLM APIs. Build intelligent features without the complexity.',
    features: ['LLM Integration', 'AI Chat Features', 'Content Generation', 'Data Analysis']
  },
  {
    icon: <Database size={32} />,
    title: 'Backend & Database Architecture',
    description: 'Robust backend systems with databases, APIs, and cloud infrastructure built for growth and scalability.',
    features: ['Database Optimization', 'RESTful APIs', 'Cloud Deployment', 'Auto-scaling']
  },
  {
    icon: <Zap size={32} />,
    title: 'Real-Time Web Features',
    description: 'Implement real-time features like notifications, live chat, real-time collaboration, and WebSocket integrations.',
    features: ['WebSocket Integration', 'Live Updates', 'Chat Systems', 'Real-time Analytics']
  },
  {
    icon: <TestTube size={32} />,
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing including unit tests, integration tests, and end-to-end testing for reliability.',
    features: ['Unit Testing', 'Integration Testing', 'E2E Testing', 'Performance Testing']
  },
  {
    icon: <Cloud size={32} />,
    title: 'Deployment & DevOps',
    description: 'Automated deployment pipelines, monitoring, and infrastructure management for production readiness.',
    features: ['CI/CD Pipelines', 'Server Setup', 'Monitoring', 'Disaster Recovery']
  },
  {
    icon: <Users size={32} />,
    title: 'Post-Launch Support',
    description: '30 days of post-launch support included. Bug fixes, optimizations, and minor feature adjustments.',
    features: ['Bug Fixes', 'Performance Tuning', 'Security Patches', 'Scaling Assistance']
  }
];

export function Services() {
  document.title = 'Web MVP Development Services - GetUrStyle'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/50">
            <p className="text-blue-300 font-semibold">Web + AI Development</p>
          </div>
          <h1 className="text-5xl font-bold mb-6">Web MVP Services</h1>
          <p className="text-xl text-gray-300 mb-4">Complete software solutions designed for the 30-day sprint</p>
          <p className="text-lg text-gray-400">We build high-quality web applications, and we integrate AI seamlessly using modern LLM APIs. Pure web + AI engineering excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why We're Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-500/50 rounded-xl p-12 text-center"
        >
          <Rocket className="text-blue-500 mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-4">The GetUrStyle Difference</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every service is optimized for speed without sacrificing quality. We use proven patterns, modern frameworks, and AI APIs to deliver production-ready web code in 30 days. Our team stays focused on web development—no brand design, no marketing, no distractions. Just results.
          </p>
        </motion.div>
      </div>
    </div>
  );
}