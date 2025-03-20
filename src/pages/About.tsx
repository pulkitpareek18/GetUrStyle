import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Layers, Shield } from 'lucide-react';

const stats = [
  { icon: <Globe size={32} />, value: 'Future-Ready', label: 'Digital Solutions' },
  { icon: <Briefcase size={32} />, value: 'Trusted Partners', label: 'Collaboration Over Transactions' },
  { icon: <Layers size={32} />, value: 'Tailored', label: 'Custom-Built Web Experiences' },
  { icon: <Shield size={32} />, value: 'Reliable', label: 'Long-Term Support & Security' }
];


export function About() {
  document.title = 'About Us - GetUrStyle'
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
          <h1 className="text-5xl font-bold mb-6">About GetUrStyle</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate designers and developers dedicated to creating exceptional digital experiences that drive business growth.
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

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with innovative digital solutions that drive growth, enhance user experience, and create lasting impact in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading force in digital transformation, setting new standards in web design and development while helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with cutting-edge technologies and creative solutions.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We deliver nothing but the highest quality in every project we undertake.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We work closely with our clients to ensure their vision becomes reality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}