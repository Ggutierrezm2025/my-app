"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { SearchComponent } from "@/components/search-component"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "blog", label: "Blog" },
    { id: "videos", label: "Videos" },
    { id: "community", label: "Community" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo-relaxed-axolotl.png"
              alt="Relaxed Axolotl Logo"
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? "text-amber-800" : "text-amber-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className={`${isScrolled ? "text-amber-800" : "text-amber-900"} hover:bg-amber-100`}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? "text-amber-800" : "text-amber-900"} hover:bg-amber-100`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-amber-800 font-medium hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="block w-full text-left px-4 py-3 text-amber-800 font-medium hover:bg-amber-50 rounded-lg transition-colors flex items-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchComponent isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}
