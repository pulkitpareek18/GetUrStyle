import React from 'react';
import { motion } from 'framer-motion';

export function Privacy() {
  document.title = 'Privacy Policy - GetUrStyle'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p>
                At GetUrStyle, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information</li>
                <li>Website usage data</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our services</li>
                <li>To communicate with you about your projects</li>
                <li>To send you important updates and newsletters</li>
                <li>To analyze and improve our website performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions about our privacy policy or how we handle your personal information, please contact us at geturstyleofficial@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}