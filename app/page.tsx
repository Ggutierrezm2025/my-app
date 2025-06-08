"use client"
import { motion } from "framer-motion"
import { Play, MessageCircle, Send, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogSlider } from "@/components/blog-slider"
import { VideoGallery } from "@/components/video-gallery"
import { CommunitySection } from "@/components/community-section"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ContactSection } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Header Section */}
      <header id="home" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/hero-background.jpg')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-amber-50/30 to-orange-50/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/logo-relaxed-axolotl.png"
              alt="Relaxed Axolotl Logo"
              className="h-24 sm:h-32 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6"
          >
            Find Your Inner Peace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto px-4"
          >
            "Tranquility isn't found in the absence of noise, but in the presence of harmony. Let our sounds guide your
            journey to inner peace."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Listening
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium"
            >
              Explore Our Content
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Blog Section with Slider */}
      <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Meditation & Wellness Blog</h2>
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-4">
              Discover insights, tips, and stories to enhance your meditation practice and overall wellbeing
            </p>
          </div>

          <div className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-8">
                <TabsTrigger value="all" className="text-xs sm:text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="meditation" className="text-xs sm:text-sm">
                  Meditation
                </TabsTrigger>
                <TabsTrigger value="wellness" className="text-xs sm:text-sm">
                  Wellness
                </TabsTrigger>
                <TabsTrigger value="music" className="text-xs sm:text-sm">
                  Music
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-8">
                <BlogSlider />
              </TabsContent>
              <TabsContent value="meditation" className="mt-8">
                <BlogSlider category="meditation" />
              </TabsContent>
              <TabsContent value="wellness" className="mt-8">
                <BlogSlider category="wellness" />
              </TabsContent>
              <TabsContent value="music" className="mt-8">
                <BlogSlider category="music" />
              </TabsContent>
            </Tabs>
          </div>

          {/* Featured Blogog Post - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-amber-50/50 rounded-xl p-6 sm:p-8 shadow-lg">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4">
                The Science Behind Binaural Beats: How Sound Affects Your Brain
              </h3>
              <p className="text-amber-700 mb-6 leading-relaxed text-sm sm:text-base">
                Binaural beats have gained popularity in meditation and relaxation practices, but what exactly are they
                and how do they work? This article explores the science behind this fascinating auditory phenomenon and
                how it can potentially enhance your meditation experience.
              </p>
              <p className="text-amber-700 mb-6 leading-relaxed text-sm sm:text-base">
                When you listen to two slightly different frequencies in each ear, your brain processes a beat at the
                difference of the frequencies. This is called a binaural beat.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Read Full Article</Button>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
              <h4 className="text-lg sm:text-xl font-semibold text-amber-900 mb-4 flex items-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Community Discussion
              </h4>

              <div className="space-y-4 mb-6">
                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-amber-800 text-sm sm:text-base">MeditationLover</span>
                    <span className="text-amber-500 text-xs sm:text-sm">2 days ago</span>
                  </div>
                  <p className="text-amber-700 text-sm sm:text-base">
                    I've been using binaural beats for my meditation practice for about 3 months now, and the difference
                    in my focus is remarkable. Great article explaining the science!
                  </p>
                </div>

                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-amber-800 text-sm sm:text-base">PeacefulMind</span>
                    <span className="text-amber-500 text-xs sm:text-sm">5 days ago</span>
                  </div>
                  <p className="text-amber-700 text-sm sm:text-base">
                    Could you recommend specific frequencies for deep relaxation vs. focus? I'm new to this and would
                    love some guidance.
                  </p>
                </div>

                <div className="border-b border-amber-100 pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-amber-800 text-sm sm:text-base">RelaxedAxolotl</span>
                    <span className="text-amber-500 text-xs sm:text-sm">4 days ago</span>
                  </div>
                  <p className="text-amber-700 text-sm sm:text-base">
                    @PeacefulMind For relaxation, try frequencies in the theta range (4-8 Hz). For focus, alpha range
                    (8-13 Hz) works well for most people. We'll cover this in our next article!
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Input placeholder="Add your thoughts..." className="border-amber-200 text-sm" />
                <Button size="icon" className="bg-amber-600 hover:bg-amber-700 flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section
        id="videos"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Featured Videos</h2>
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-4">
              Explore our collection of meditation music, nature sounds, and relaxation guides
            </p>
          </div>

          <VideoGallery />
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Join Our Community</h2>
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-4">
              Connect with like-minded individuals on our various platforms and be part of our growing community
            </p>
          </div>

          <CommunitySection />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">About Relaxed Axolotl</h2>
            <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-4">
              Our story, mission, and the team behind the music
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Relaxed Axolotl Studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900">Our Journey</h3>
              <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                Relaxed Axolotl began as a passion project in 2020, born from a deep appreciation for the healing power
                of sound and meditation. What started as simple recordings shared with friends and family has grown into
                a community of over 90,000 subscribers who find peace and tranquility through our compositions.
              </p>
              <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                Our name was inspired by the axolotl, a unique amphibian known for its calm demeanor and remarkable
                regenerative abilities – qualities we hope to nurture in our listeners through the power of meditation
                music.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mt-8">Our Mission</h3>
              <p className="text-amber-700 leading-relaxed text-sm sm:text-base">
                We believe that everyone deserves access to tools that promote mental wellbeing. Our mission is to
                create high-quality meditation music that helps people find moments of peace in their busy lives, reduce
                stress and anxiety, and connect with their inner selves.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-4">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Meditation Journey Today</h2>
          <p className="text-xl text-amber-100 mb-8">Join our growing community of peaceful listeners on YouTube</p>

          <a href="https://www.youtube.com/@RelaxedAxolotl" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 px-12 py-6 text-xl font-medium shadow-lg"
            >
              <Youtube className="w-6 h-6 mr-3" />
              Subscribe to Relaxed Axolotl
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2">
              <img
                src="/logo-relaxed-axolotl.png"
                alt="Relaxed Axolotl Logo"
                className="h-12 sm:h-16 w-auto object-contain mb-4"
              />
              <p className="text-amber-100 mb-4 max-w-md text-sm sm:text-base">
                Creating peaceful soundscapes for meditation, relaxation, and inner harmony. Join our community of
                mindful listeners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-100 text-sm sm:text-base">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#videos" className="hover:text-white transition-colors">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-amber-100 text-sm sm:text-base">
                <li>
                  <a
                    href="https://www.youtube.com/@RelaxedAxolotl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Substack
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Patreon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-amber-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-amber-200 text-sm sm:text-base text-center md:text-left">
                &copy; 2024 Relaxed Axolotl. All rights reserved. Made with ♥ for peaceful minds.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-amber-200 text-sm">
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="/copyright" className="hover:text-white transition-colors">
                  Copyright
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="#contact" className="hover:text-white transition-colors">
                  DMCA
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
