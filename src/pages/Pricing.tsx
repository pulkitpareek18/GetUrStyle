import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  document.title = 'Pricing - GetUrStyle'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/50">
            <p className="text-blue-300 font-semibold">Simple, Transparent Pricing</p>
          </div>
          <h1 className="text-5xl font-bold mb-6">One Plan. Everything Included.</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in simplicity. One price. No hidden fees. Complete web MVP delivery in 30 days. AI features included.
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="border-2 border-blue-500 bg-black/80 ring-2 ring-blue-500/20 rounded-xl overflow-hidden">
            <div className="bg-blue-500 text-white text-center py-3 font-bold text-lg">
              Complete Startup MVP Package
            </div>
            <div className="p-12">
              <div className="text-center mb-12">
                <div className="text-5xl font-bold text-blue-400 mb-2">$4,999</div>
                <p className="text-gray-400 text-lg">One-time investment</p>
                <p className="text-gray-300 text-sm mt-4">Everything you need to launch your MVP</p>
              </div>

              <Link to="/contact" className="block mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Start Your MVP
                </motion.button>
              </Link>

              <div className="space-y-4">
                <div className="text-lg font-semibold text-white mb-6">What's Included:</div>
                <div className="space-y-3">
                  {[
                    'Full-stack web MVP (React, Node.js, etc.)',
                    'Up to 10 core features',
                    'Advanced user authentication',
                    'Database design & optimization',
                    'Payment integration (Stripe/similar)',
                    'Real-time features (chat, notifications)',
                    'AI/LLM integration (OpenAI, Claude, etc.)',
                    'Admin panel',
                    'SSL & security best practices',
                    'Responsive & mobile-friendly design',
                    'RESTful API development',
                    'Third-party integrations',
                    'Comprehensive testing',
                    'Production deployment setup',
                    'Full source code access',
                    'Complete documentation',
                    '30 days post-launch support',
                    'Bug fixes & minor adjustments',
                    'Performance optimization',
                    'Team handoff training'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-black/50 border border-gray-800 rounded-xl p-12 mb-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Your 30-Day MVP Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">Week 1</div>
              <p className="text-gray-400">Discovery, Planning & Architecture</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">Week 2-3</div>
              <p className="text-gray-400">Development Sprint & Integration</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">Week 4</div>
              <p className="text-gray-400">Testing, Optimization & Launch</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">Post-Launch</div>
              <p className="text-gray-400">30 Days Support Included</p>
            </div>
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GetUrStyle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">One Flat Price</h3>
              <p className="text-gray-400">No hourly billing. No surprise costs. Everything is included in one transparent price.</p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Specialist Team</h3>
              <p className="text-gray-400">We only build MVPs. No design agencies, no generalists—pure software engineering focus.</p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">30-Day Guarantee</h3>
              <p className="text-gray-400">Your MVP launches in 30 days. Production-ready, tested, and deployed live.</p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">100% Code Ownership</h3>
              <p className="text-gray-400">You own everything. Full source code, documentation, and architecture are yours.</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Do you offer payment plans?</h3>
              <p className="text-gray-400">
                Yes. We work with founders and can structure payments as 50/50 split or milestone-based. Contact us to discuss options.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">What if I need more features?</h3>
              <p className="text-gray-400">
                We focus on 10 core features to launch fast. Additional features can be built post-launch. Our 30-day support period covers minor additions.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Do you accept equity or revenue share?</h3>
              <p className="text-gray-400">
                For exceptional startups with strong teams, we occasionally consider equity arrangements alongside payment. Let's talk about your project.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">What if we exceed 30 days?</h3>
              <p className="text-gray-400">
                We're committed to 30 days. If scope creep occurs, we discuss it upfront. We don't charge extra for going slightly over—it's a commitment we make to you.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do you build mobile apps?</h3>
              <p className="text-gray-400">
                We specialize exclusively in web MVPs. Our focus is modern web applications for maximum speed and quality delivery.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">What happens after 30 days?</h3>
              <p className="text-gray-400">
                After launch and 30-day support, you own your MVP completely. You can hire your own team, scale, or maintain it independently.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-500/50 rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your MVP?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's schedule a call to discuss your idea, timeline, and how we can help you win.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Your Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
