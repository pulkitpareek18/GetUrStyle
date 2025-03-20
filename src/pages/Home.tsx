import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, ShoppingBag, Lightbulb, Search, Shield, Brain, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Palette size={24} />, title: 'Website Design & Development', description: 'Custom-crafted websites that capture your brand essence' },
  { icon: <Code2 size={24} />, title: 'Custom Web Development', description: 'Tailored solutions built with cutting-edge technologies' },
  { icon: <ShoppingBag size={24} />, title: 'E-Commerce Development', description: 'Powerful online stores that drive sales and growth' },
  { icon: <Lightbulb size={24} />, title: 'UI/UX Design', description: 'Intuitive interfaces that delight your users' },
  { icon: <Search size={24} />, title: 'SEO-Friendly Solutions', description: 'Optimized websites that rank and perform' },
  { icon: <Shield size={24} />, title: 'Performance & Security', description: 'Fast, secure, and reliable web solutions' },
  { icon: <Brain size={24} />, title: 'IT Consulting', description: 'Strategic guidance for digital success' },
  { icon: <Building2 size={24} />, title: 'Corporate Solutions', description: 'Enterprise-grade websites and applications' }
];

export function Home() {
  document.title = 'GetUrStyle - Design. Develop. Deploy.'
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Premium web solutions that elevate your brand and drive results
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive digital solutions for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">Let's create something extraordinary together</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}