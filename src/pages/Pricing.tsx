import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield } from 'lucide-react';
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
              <div className="text-center mb-8">
                {/* Price Anchoring */}
                <p className="text-gray-500 text-sm mb-2">Agencies typically charge $15k–$30k for similar scope</p>
                <div className="text-5xl font-bold text-blue-400 mb-2">$4,999</div>
                <p className="text-gray-400 text-lg">One-time investment</p>
                <p className="text-gray-300 text-sm mt-4">Everything you need to launch your MVP</p>
              </div>

              <Link to="/contact" className="block mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Book a Free Strategy Call
                </motion.button>
              </Link>

              {/* Delivery Guarantee */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-10">
                <div className="flex items-start gap-3">
                  <Shield className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-400 font-semibold text-sm">30-Day Delivery Guarantee</p>
                    <p className="text-gray-400 text-sm">If we miss the agreed deadline, you get a partial refund — no questions asked.</p>
                  </div>
                </div>
              </div>

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
          <h2 className="text-3xl font-bold mb-12 text-center">Founder FAQs</h2>
          <div className="space-y-6">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Who owns the code?</h3>
              <p className="text-gray-400">
                You do. 100% ownership of all source code, documentation, and architecture. No licensing fees, no strings attached.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">What's the tech stack?</h3>
              <p className="text-gray-400">
                We use modern, battle-tested technologies: React/Next.js for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, and deploy on AWS/Vercel/Railway.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">What happens after the 30 days?</h3>
              <p className="text-gray-400">
                You get 30 days of post-launch support included. After that, you can hire your own team, continue with us on retainer, or maintain it independently. We provide full documentation and handoff training.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Can the scope change during development?</h3>
              <p className="text-gray-400">
                We define the feature list upfront to protect the timeline. Minor adjustments are normal and included. Major scope changes require a conversation — we'll always be transparent about impact.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Do you offer payment plans?</h3>
              <p className="text-gray-400">
                Yes. We work with founders and can structure payments as 50/50 split or milestone-based. Contact us to discuss options that work for your situation.
              </p>
            </div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Do you build mobile apps?</h3>
              <p className="text-gray-400">
                We specialize exclusively in web MVPs. Our focus allows us to deliver faster and better than generalist agencies. For mobile, we can recommend partners.
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
