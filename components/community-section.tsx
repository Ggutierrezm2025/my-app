"use client"

import { Users, BookOpen, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function CommunitySection() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left Column - Community Info */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Connect & Share</h3>
          <p className="text-amber-700 mb-6 leading-relaxed">
            Relaxed Axolotl is more than just a music channel - it's a growing community of like-minded individuals
            seeking peace, mindfulness, and connection. Join us on various platforms to share your experiences, learn
            from others, and deepen your meditation practice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md"
        >
          <div className="flex items-start">
            <div className="bg-amber-100 rounded-full p-3 mr-4">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Community Benefits</h4>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-center">
                  <div className="bg-amber-100 rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Early access to new meditation tracks</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Share your meditation experiences</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Connect with like-minded individuals</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-amber-100 rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Participate in guided group meditations</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl p-6 text-white shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-4">Join Our Newsletter</h4>
          <p className="mb-4">
            Subscribe to our weekly newsletter for meditation tips, new releases, and exclusive content.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <Button className="bg-white text-amber-700 hover:bg-amber-100">Subscribe</Button>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Platform Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-amber-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Substack</h4>
              <p className="text-amber-700 mb-4">
                Deep dives into meditation techniques, mindfulness practices, and the science behind our music.
              </p>
              <div className="text-sm text-amber-600 mb-4">
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 mr-2" />
                  <span>1,200+ subscribers</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Weekly articles</span>
                </div>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Subscribe to Substack</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-amber-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Reddit</h4>
              <p className="text-amber-700 mb-4">
                Join our subreddit to discuss meditation techniques, share experiences, and connect with fellow
                practitioners.
              </p>
              <div className="text-sm text-amber-600 mb-4">
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 mr-2" />
                  <span>5,000+ members</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Daily discussions</span>
                </div>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Join r/RelaxedAxolotl</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="sm:col-span-2"
        >
          <Card className="border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-amber-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Patreon</h4>
              <p className="text-amber-700 mb-4">
                Support our work and get exclusive content, early access to new tracks, and personalized meditation
                guidance.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-amber-900">Supporter</h5>
                  <p className="text-2xl font-bold text-amber-700 my-2">$5</p>
                  <p className="text-sm text-amber-600">per month</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-amber-900">Enthusiast</h5>
                  <p className="text-2xl font-bold text-amber-700 my-2">$10</p>
                  <p className="text-sm text-amber-600">per month</p>
                </div>
                <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-amber-900">Devotee</h5>
                  <p className="text-2xl font-bold text-amber-700 my-2">$25</p>
                  <p className="text-sm text-amber-600">per month</p>
                </div>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Become a Patron</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
