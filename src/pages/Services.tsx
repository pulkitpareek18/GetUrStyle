import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, ShoppingBag, Lightbulb, Search, Shield, Brain, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'Website Design & Development',
    description: 'Custom-crafted websites that capture your brand essence and deliver exceptional user experiences. We combine stunning visuals with intuitive functionality.',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Performance Tuning']
  },
  {
    icon: <Code2 size={32} />,
    title: 'Custom Web Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your specific business needs and goals.',
    features: ['Full-stack Development', 'API Integration', 'Custom CMS', 'Third-party Integration']
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'E-Commerce Development',
    description: 'Powerful online stores that drive sales and growth with seamless shopping experiences and robust backend systems.',
    features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Processing']
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight your users and keep them coming back for more.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    icon: <Search size={32} />,
    title: 'SEO-Friendly Solutions',
    description: 'Optimized websites that rank and perform well in search engines to drive organic traffic.',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Optimization']
  },
  {
    icon: <Shield size={32} />,
    title: 'Performance & Security',
    description: 'Fast, secure, and reliable web solutions that protect your business and your customers.',
    features: ['SSL Certificates', 'Security Audits', 'Performance Monitoring', 'Backup Solutions']
  },
  {
    icon: <Brain size={32} />,
    title: 'IT Consulting',
    description: 'Strategic guidance for digital success, helping you make informed decisions about your technology investments.',
    features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Risk Management']
  },
  {
    icon: <Building2 size={32} />,
    title: 'Corporate Solutions',
    description: 'Enterprise-grade websites and applications that scale with your business.',
    features: ['Enterprise CMS', 'Workflow Automation', 'Data Analytics', 'Cloud Solutions']
  }
];

export function Services() {
  document.title = 'Our Services - GetUrStyle'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive digital solutions tailored to your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
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
      </div>
    </div>
  );
}