"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "meditation",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        service: "meditation",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto px-4">
            Get in touch with us for custom services, collaborations, or any questions about our meditation music
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Email</h4>
                    <p className="text-amber-700">hello@relaxedaxolotl.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Response Time</h4>
                    <p className="text-amber-700">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Location</h4>
                    <p className="text-amber-700">Remote studio, serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl p-6 text-white shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-4">Follow Our Journey</h4>
              <p className="mb-4">Stay updated with our latest releases and meditation tips</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  YouTube
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  Instagram
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  Spotify
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Request a Custom Service</h3>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                <p className="font-medium">Thank you for your request!</p>
                <p>We'll get back to you within 48 hours to discuss your custom needs.</p>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label>Service Type</Label>
                <RadioGroup
                  defaultValue="meditation"
                  value={formState.service}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="meditation" id="meditation" />
                    <Label htmlFor="meditation" className="cursor-pointer">
                      Custom Meditation Track
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="session" id="session" />
                    <Label htmlFor="session" className="cursor-pointer">
                      Private Meditation Session
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other Inquiry
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific needs or questions"
                  required
                  className="min-h-[120px] border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Request
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
