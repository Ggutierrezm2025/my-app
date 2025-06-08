"use client"

import { motion } from "framer-motion"

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Privacy Policy</h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-6">
            <p className="text-amber-700">Last updated: December 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Information We Collect</h2>
              <p className="text-amber-700 mb-4">
                We collect information you provide directly to us, such as when you subscribe to our newsletter, contact
                us, or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-amber-700 space-y-2">
                <li>To provide and improve our meditation music services</li>
                <li>To send you newsletters and updates (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze usage patterns and improve our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Data Protection</h2>
              <p className="text-amber-700">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Contact Us</h2>
              <p className="text-amber-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@relaxedaxolotl.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Terms of Service</h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-6">
            <p className="text-amber-700">Last updated: December 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Acceptance of Terms</h2>
              <p className="text-amber-700 mb-4">
                By accessing and using Relaxed Axolotl's services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Use License</h2>
              <p className="text-amber-700 mb-4">
                Permission is granted to temporarily download one copy of our meditation music for personal,
                non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Disclaimer</h2>
              <p className="text-amber-700">
                The materials on Relaxed Axolotl's website are provided on an 'as is' basis. Relaxed Axolotl makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function CopyrightNotice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Copyright Notice</h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Copyright Protection</h2>
              <p className="text-amber-700 mb-4">
                All content on this website, including but not limited to music, audio recordings, text, graphics,
                logos, and images, is the property of Relaxed Axolotl and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Permitted Use</h2>
              <ul className="list-disc list-inside text-amber-700 space-y-2">
                <li>Personal meditation and relaxation</li>
                <li>Non-commercial educational purposes</li>
                <li>Sharing links to our content (not downloading and redistributing)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Prohibited Use</h2>
              <ul className="list-disc list-inside text-amber-700 space-y-2">
                <li>Commercial use without explicit permission</li>
                <li>Redistribution or resale of our content</li>
                <li>Modification or derivative works</li>
                <li>Claiming ownership of our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">DMCA Compliance</h2>
              <p className="text-amber-700">
                We respect the intellectual property rights of others and expect our users to do the same. If you
                believe your copyrighted work has been used inappropriately, please contact us at
                copyright@relaxedaxolotl.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
