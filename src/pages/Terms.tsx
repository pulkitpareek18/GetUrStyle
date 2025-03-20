import React from 'react';
import { motion } from 'framer-motion';

export function Terms() {
  document.title = 'Terms & Conditions - GetUrStyle'
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
              <p>
                By accessing and using GetUrStyle's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Services</h2>
              <p>
                GetUrStyle provides web design, development, and related digital services. The specific scope, deliverables, and terms of each project will be outlined in a separate agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All materials, including designs and code, remain our property until final payment</li>
                
                <li>Upon payment, specified deliverables become your property</li>
                <li>We retain the right to showcase the work in our portfolio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment schedules will be outlined in project agreements</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to change with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
              <p>
                GetUrStyle shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Termination</h2>
              <p>
                Either party may terminate services with written notice. You will be responsible for payment for all services rendered up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
              <p>
                For questions about these terms, please contact us at legal@geturstyle.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}