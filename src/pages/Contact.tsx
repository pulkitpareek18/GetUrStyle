import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Zap, CheckCircle, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    idea: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', stage: '', idea: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Let's Build Your MVP</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We work exclusively with US founders. Fill out the form below and let's schedule a 20-minute call to discuss your idea.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {/* Process Cards */}
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-blue-500 flex justify-center mb-3">
                <Clock size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Call</h3>
              <p className="text-gray-400 text-sm">20-minute discovery call to understand your vision</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-blue-500 flex justify-center mb-3">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Development</h3>
              <p className="text-gray-400 text-sm">30 days to a live, production-ready MVP</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-blue-500 flex justify-center mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Launch Ready</h3>
              <p className="text-gray-400 text-sm">Full support to ship and validate your product</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Tell Us About Your Idea</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company/Startup Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Startup"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Funding Stage</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors [&>option]:bg-black [&>option]:text-white"
                  >
                    <option value="">Select your stage</option>
                    <option value="pre-seed">Pre-seed / Bootstrapped</option>
                    <option value="seed">Seed funded</option>
                    <option value="series-a">Series A</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">What's Your Idea? (Brief Description)</label>
                <textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your MVP idea, target users, and key features..."
                />
              </div>
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-3 text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <p>Thank you! We've received your message and will get back to you within 24 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-3 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p>Something went wrong. Please try again or email us directly at geturstyleofficial@gmail.com</p>
                </div>
              )}
              {submitStatus === 'idle' && (
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <CheckCircle size={20} className="text-blue-500 flex-shrink-0" />
                  <p>We'll follow up within 24 hours with a proposal and timeline</p>
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  'Schedule Your Free Consultation'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Prefer Direct Contact?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-500" size={24} />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email us</p>
                  <a 
                    href="mailto:geturstyleofficial@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors font-semibold"
                  >
                    geturstyleofficial@gmail.com
                  </a>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-800 hidden md:block" />
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-500" size={24} />
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Response time</p>
                  <p className="text-white font-semibold">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Why US Founders Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-semibold text-white mb-2">Startup-Focused</p>
                <p className="text-gray-400 text-sm">We understand bootstrap budgets and VC timelines</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Fast & Affordable</p>
                <p className="text-gray-400 text-sm">$4,999 for a production-ready MVP in 30 days</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Pure Engineering</p>
                <p className="text-gray-400 text-sm">No nonsense, no delays—just quality code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}