"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Heart,
  Users,
  Youtube,
  Instagram,
  Twitter,
  Star,
  Search,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0)

  const blogCategories = ["Todos", "Meditación", "Mindfulness", "Bienestar", "Técnicas", "Lifestyle"]

  const blogPosts = [
    {
      id: 1,
      title: "Los Beneficios Profundos de la Meditación Diaria",
      excerpt:
        "Descubre cómo 10 minutos de meditación pueden transformar completamente tu día y elevar tu bienestar general a niveles extraordinarios.",
      content: "La meditación diaria es una práctica transformadora que puede cambiar tu vida de maneras profundas...",
      date: "15 Nov 2024",
      readTime: "8 min",
      category: "Meditación",
      author: "Relaxed Axolotl Team",
      comments: 24,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Frecuencias Curativas: El Poder del Sonido",
      excerpt:
        "Explora el fascinante mundo de las frecuencias sonoras y cómo pueden influir profundamente en tu estado mental, emocional y espiritual.",
      content: "Las frecuencias curativas han sido utilizadas durante milenios...",
      date: "12 Nov 2024",
      readTime: "12 min",
      category: "Técnicas",
      author: "Relaxed Axolotl Team",
      comments: 18,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Creando tu Santuario Personal de Paz",
      excerpt:
        "Guía completa para diseñar un espacio sagrado en tu hogar donde puedas meditar, reflexionar y encontrar la tranquilidad absoluta.",
      content: "Crear un espacio sagrado es fundamental para una práctica consistente...",
      date: "8 Nov 2024",
      readTime: "6 min",
      category: "Lifestyle",
      author: "Relaxed Axolotl Team",
      comments: 31,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Respiración Consciente: Tu Ancla al Presente",
      excerpt:
        "Técnicas avanzadas de respiración que puedes usar en cualquier momento para centrarte, encontrar calma y conectar con tu esencia.",
      content: "La respiración consciente es una de las herramientas más poderosas...",
      date: "5 Nov 2024",
      readTime: "10 min",
      category: "Mindfulness",
      author: "Relaxed Axolotl Team",
      comments: 15,
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const videos = [
    {
      id: "1",
      title: "Ondas Serenas | Sonidos Oceánicos para Meditación Profunda",
      duration: "45:30",
      description:
        "Sumérgete en las profundidades del océano con sonidos naturales que te llevarán a un estado de relajación absoluta.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "125K",
    },
    {
      id: "2",
      title: "Bosque Místico | Melodías Naturales para Conectar con la Tierra",
      duration: "38:15",
      description:
        "Conecta con la energía ancestral del bosque a través de melodías que despiertan tu conexión con la naturaleza.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "89K",
    },
    {
      id: "3",
      title: "Luz Dorada | Armonías Cálidas para el Amanecer Interior",
      duration: "52:20",
      description:
        "Despierta tu luz interior con armonías doradas que iluminan tu camino hacia la paz y la claridad mental.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "156K",
    },
    {
      id: "4",
      title: "Respiración Cósmica | Frecuencias que Sincronizan tu Ser",
      duration: "41:45",
      description:
        "Sincroniza tu respiración con frecuencias cósmicas que elevan tu conciencia a dimensiones superiores.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "203K",
    },
    {
      id: "5",
      title: "Jardín Zen | Melodías Minimalistas para la Contemplación",
      duration: "36:30",
      description: "Encuentra la belleza en la simplicidad con melodías zen que cultivan la contemplación profunda.",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "94K",
    },
  ]

  const filteredPosts =
    selectedCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const nextBlogSlide = () => {
    setCurrentBlogSlide((prev) => (prev + 1) % Math.ceil(filteredPosts.length / 2))
  }

  const prevBlogSlide = () => {
    setCurrentBlogSlide(
      (prev) => (prev - 1 + Math.ceil(filteredPosts.length / 2)) % Math.ceil(filteredPosts.length / 2),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-warmBrown-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
              filter: "brightness(0.3)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-warmBrown-900/80 via-amber-900/60 to-orange-900/70" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-400/20 to-warmBrown-400/20 rounded-full blur-xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Relaxed Axolotl Logo"
                className="relative w-40 h-40 mx-auto rounded-full border-4 border-cream-200/50 shadow-2xl"
                width={150}
                height={150}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-7xl md:text-9xl font-serif font-light text-cream-50 mb-8 leading-tight"
          >
            Relaxed Axolotl
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl text-amber-100 font-light leading-relaxed">
              "Encuentra la paz en el silencio, la sabiduría en la quietud"
            </h2>
            <p className="text-xl text-cream-200/90 max-w-4xl mx-auto leading-relaxed">
              Bienvenido a un oasis de tranquilidad donde cada sonido, cada melodía y cada momento está diseñado para
              nutrir tu alma y elevar tu espíritu hacia la serenidad absoluta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-6 text-2xl font-medium rounded-full shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <Heart className="w-6 h-6 mr-3" />
              Comenzar tu Viaje
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Blog Interactivo */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-amber-50">
        <div className="container mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-warmBrown-900 mb-8">
              Sabiduría y Reflexiones
            </h2>
            <p className="text-2xl text-warmBrown-700 max-w-3xl mx-auto leading-relaxed">
              Explora artículos profundos sobre meditación, mindfulness y el arte de vivir conscientemente
            </p>
          </motion.header>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warmBrown-500 w-5 h-5" />
              <Input
                placeholder="Buscar artículos..."
                className="pl-10 pr-4 py-3 w-80 bg-white/80 border-warmBrown-200 focus:border-orange-400 rounded-full"
              />
            </div>
            <div className="flex gap-2">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-warmBrown-600 text-white rounded-full px-6"
                      : "border-warmBrown-300 text-warmBrown-700 hover:bg-warmBrown-100 rounded-full px-6"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Blog Slider */}
          <div className="relative max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBlogSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {filteredPosts.slice(currentBlogSlide * 2, currentBlogSlide * 2 + 2).map((post) => (
                  <Card
                    key={post.id}
                    className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 group rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-orange-500 to-warmBrown-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          <span className="bg-black/50 text-white text-sm px-2 py-1 rounded-full flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-serif font-semibold text-warmBrown-900 mb-4 group-hover:text-orange-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-warmBrown-700 mb-6 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-warmBrown-600 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {post.date}
                            </span>
                            <span className="text-sm text-warmBrown-600 flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </span>
                          </div>
                          <span className="text-sm text-warmBrown-600 flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments} comentarios
                          </span>
                        </div>

                        {/* Área de comentarios */}
                        <div className="border-t border-warmBrown-200 pt-6">
                          <h4 className="text-lg font-medium text-warmBrown-800 mb-4">Únete a la conversación</h4>
                          <div className="flex space-x-3">
                            <Input
                              placeholder="Comparte tu reflexión..."
                              className="flex-1 bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                            />
                            <Button className="bg-gradient-to-r from-orange-500 to-warmBrown-600 text-white px-4">
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={prevBlogSlide}
                className="rounded-full p-3 border-warmBrown-300 hover:bg-warmBrown-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(filteredPosts.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBlogSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentBlogSlide === index ? "bg-orange-500" : "bg-warmBrown-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                onClick={nextBlogSlide}
                className="rounded-full p-3 border-warmBrown-300 hover:bg-warmBrown-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos de YouTube */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-warmBrown-900 mb-8">
              Experiencias Audiovisuales
            </h2>
            <p className="text-2xl text-warmBrown-700 max-w-3xl mx-auto leading-relaxed">
              Sumérgete en nuestras creaciones diseñadas para elevar tu conciencia y nutrir tu alma
            </p>
          </motion.header>

          {/* Video Principal */}
          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="aspect-video bg-gradient-to-br from-warmBrown-200 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={videos[currentVideoIndex].thumbnail || "/placeholder.svg"}
                  alt={videos[currentVideoIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-12 h-12 text-orange-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                    {videos[currentVideoIndex].title}
                  </h3>
                  <p className="text-cream-200 leading-relaxed">{videos[currentVideoIndex].description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-cream-200 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {videos[currentVideoIndex].duration}
                    </span>
                    <span className="text-cream-200">{videos[currentVideoIndex].views} visualizaciones</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Controles de navegación */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <Button
                variant="outline"
                onClick={prevVideo}
                className="rounded-full p-4 border-warmBrown-300 hover:bg-warmBrown-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <div className="flex space-x-3">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                      currentVideoIndex === index ? "bg-orange-500" : "bg-warmBrown-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                onClick={nextVideo}
                className="rounded-full p-4 border-warmBrown-300 hover:bg-warmBrown-100"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Videos Relacionados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {videos
              .filter((_, index) => index !== currentVideoIndex)
              .slice(0, 4)
              .map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setCurrentVideoIndex(videos.findIndex((v) => v.id === video.id))}
                >
                  <div className="aspect-video bg-gradient-to-br from-warmBrown-200 to-orange-200 rounded-xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-orange-600 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-serif font-medium text-warmBrown-900 mb-2 line-clamp-2 group-hover:text-orange-700 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-warmBrown-600">
                    <span>{video.duration}</span>
                    <span>{video.views}</span>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-warmBrown-600 hover:from-orange-600 hover:to-warmBrown-700 text-white px-10 py-4 text-xl rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-6 h-6 mr-3" />
              Ver Canal Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Nuestra Comunidad */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-warmBrown-50">
        <div className="container mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-warmBrown-900 mb-8">Nuestra Comunidad</h2>
            <p className="text-2xl text-warmBrown-700 max-w-3xl mx-auto leading-relaxed">
              Únete a miles de almas que han encontrado su camino hacia la paz interior
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Columna Izquierda */}
            <div className="space-y-8">
              {/* Patreon */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 group rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-white font-bold">P</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-warmBrown-900">Patreon</h3>
                        <p className="text-warmBrown-600">Comunidad Exclusiva</p>
                      </div>
                    </div>
                    <p className="text-warmBrown-700 mb-6 leading-relaxed">
                      Únete a nuestra familia de patrocinadores y accede a contenido exclusivo, sesiones privadas y la
                      oportunidad de influir en nuestras próximas creaciones.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Contenido exclusivo sin anuncios
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Sesiones de meditación privadas
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Acceso anticipado a nuevos videos
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full py-3 font-semibold">
                      Convertirse en Patreon
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Substack */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 group rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-white font-bold">S</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-warmBrown-900">Substack</h3>
                        <p className="text-warmBrown-600">Newsletter Semanal</p>
                      </div>
                    </div>
                    <p className="text-warmBrown-700 mb-6 leading-relaxed">
                      Recibe reflexiones profundas, técnicas de meditación avanzadas y contenido inspirador directamente
                      en tu correo cada semana.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-amber-500" />
                        Reflexiones semanales profundas
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-amber-500" />
                        Técnicas de meditación exclusivas
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-amber-500" />
                        Contenido inspirador personalizado
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-amber-400 text-amber-700 hover:bg-amber-50 rounded-full py-3 font-semibold"
                    >
                      Suscribirse al Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Columna Derecha */}
            <div className="space-y-8">
              {/* Reddit */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 group rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-white font-bold">r/</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-warmBrown-900">Reddit</h3>
                        <p className="text-warmBrown-600">Comunidad Activa</p>
                      </div>
                    </div>
                    <p className="text-warmBrown-700 mb-6 leading-relaxed">
                      Participa en discusiones profundas, comparte tus experiencias de meditación y conecta con otros
                      buscadores de la paz interior.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Discusiones diarias sobre meditación
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Intercambio de experiencias
                      </div>
                      <div className="flex items-center text-warmBrown-700">
                        <Star className="w-4 h-4 mr-3 text-orange-500" />
                        Apoyo comunitario 24/7
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-orange-400 text-orange-700 hover:bg-orange-50 rounded-full py-3 font-semibold"
                    >
                      Unirse a r/RelaxedAxolotl
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Estadísticas de la Comunidad */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-warmBrown-100 to-orange-100 border-warmBrown-200/50 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-serif font-semibold text-warmBrown-900 mb-6">Nuestra Familia Crece</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                        <div className="text-warmBrown-700">Suscriptores</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">2M+</div>
                        <div className="text-warmBrown-700">Visualizaciones</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                        <div className="text-warmBrown-700">Patrocinadores</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                        <div className="text-warmBrown-700">Satisfacción</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Personalizados */}
      <section className="py-24 bg-gradient-to-b from-warmBrown-50 to-cream-50">
        <div className="container mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-warmBrown-900 mb-8">
              Servicios Personalizados
            </h2>
            <p className="text-2xl text-warmBrown-700 max-w-3xl mx-auto leading-relaxed">
              Experiencias únicas diseñadas especialmente para tu viaje personal hacia la paz interior
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Sesiones de Meditación Guiada */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-serif font-semibold text-warmBrown-900 mb-4">
                      Sesiones de Meditación Guiada
                    </h3>
                    <p className="text-warmBrown-700 leading-relaxed text-lg">
                      Sesiones personalizadas uno a uno donde te guío a través de técnicas específicas adaptadas a tus
                      necesidades y objetivos espirituales únicos.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Sesiones Individuales</h4>
                        <p className="text-warmBrown-700">Meditación personalizada según tu nivel y objetivos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Técnicas Avanzadas</h4>
                        <p className="text-warmBrown-700">Métodos especializados para necesidades específicas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Seguimiento Continuo</h4>
                        <p className="text-warmBrown-700">Apoyo y guía en tu progreso espiritual</p>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Tu nombre"
                        className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                      />
                      <Input
                        type="email"
                        placeholder="Tu email"
                        className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                      />
                    </div>
                    <Input
                      placeholder="Teléfono (opcional)"
                      className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                    />
                    <Textarea
                      placeholder="Cuéntanos sobre tu experiencia con la meditación y qué te gustaría lograr..."
                      rows={4}
                      className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                    />
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-full font-semibold text-lg">
                      Solicitar Sesión Personalizada
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Música Personalizada */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-warmBrown-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-serif font-semibold text-warmBrown-900 mb-4">Música Personalizada</h3>
                    <p className="text-warmBrown-700 leading-relaxed text-lg">
                      Composiciones únicas creadas específicamente para ti, incorporando frecuencias y elementos sonoros
                      que resuenen con tu energía personal.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Composiciones Únicas</h4>
                        <p className="text-warmBrown-700">Música creada exclusivamente para ti</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Frecuencias Específicas</h4>
                        <p className="text-warmBrown-700">Tonos adaptados a tus necesidades energéticas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-warmBrown-900">Múltiples Formatos</h4>
                        <p className="text-warmBrown-700">Disponible en alta calidad para todos tus dispositivos</p>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Tu nombre"
                        className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                      />
                      <Input
                        type="email"
                        placeholder="Tu email"
                        className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                      />
                    </div>
                    <Input
                      placeholder="Tipo de música preferida (relajante, energizante, etc.)"
                      className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                    />
                    <Textarea
                      placeholder="Describe el propósito de la música (meditación, trabajo, sueño, etc.) y cualquier preferencia específica..."
                      rows={4}
                      className="bg-warmBrown-50 border-warmBrown-200 focus:border-orange-400"
                    />
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-warmBrown-600 hover:from-orange-600 hover:to-warmBrown-700 text-white py-3 rounded-full font-semibold text-lg">
                      Solicitar Música Personalizada
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-warmBrown-100 to-orange-100 border-warmBrown-200/50 rounded-2xl max-w-4xl mx-auto">
              <CardContent className="p-10">
                <h3 className="text-3xl font-serif font-semibold text-warmBrown-900 mb-6">
                  ¿Tienes algo específico en mente?
                </h3>
                <p className="text-xl text-warmBrown-700 mb-8 leading-relaxed">
                  Estamos aquí para crear experiencias únicas que nutran tu alma. Contáctanos para discutir tus
                  necesidades específicas.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-orange-600" />
                    <span className="text-warmBrown-800 font-medium">hello@relaxedaxolotl.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-orange-600" />
                    <span className="text-warmBrown-800 font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-warmBrown-600 to-orange-600 hover:from-warmBrown-700 hover:to-orange-700 text-white px-10 py-4 text-xl rounded-full font-semibold"
                >
                  Contactar Directamente
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-warmBrown-50">
        <div className="container mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-warmBrown-900 mb-8">Quiénes Somos</h2>
            <p className="text-2xl text-warmBrown-700 max-w-3xl mx-auto leading-relaxed">
              La historia detrás de Relaxed Axolotl y nuestra misión de llevar paz al mundo
            </p>
          </motion.header>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-warmBrown-200 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Relaxed Axolotl Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-warmBrown-500 rounded-full blur-2xl opacity-30"></div>
              </motion.div>

              {/* Contenido */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h3 className="text-4xl font-serif font-semibold text-warmBrown-900">Nuestra Historia</h3>
                <div className="space-y-6 text-lg text-warmBrown-700 leading-relaxed">
                  <p>
                    Relaxed Axolotl nació de una profunda necesidad personal de encontrar paz en un mundo cada vez más
                    acelerado. Lo que comenzó como una búsqueda individual se transformó en una misión compartida: crear
                    espacios sonoros que nutran el alma y eleven la conciencia.
                  </p>
                  <p>
                    Inspirados por la serenidad natural del axolotl, una criatura que simboliza la regeneración y la
                    tranquilidad, decidimos canalizar esa energía en composiciones que trascienden lo ordinario y tocan
                    lo sagrado en cada uno de nosotros.
                  </p>
                  <p>
                    Cada pieza que creamos es el resultado de años de estudio en técnicas de meditación, frecuencias
                    curativas y la ciencia del sonido. Nuestro objetivo es simple pero profundo: ayudarte a encontrar tu
                    centro, tu paz, tu hogar interior.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Misión y Valores */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-xl transition-all duration-500 rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-warmBrown-900 mb-4">Nuestra Misión</h4>
                  <p className="text-warmBrown-700 leading-relaxed">
                    Crear experiencias sonoras que faciliten la conexión profunda contigo mismo y fomenten la paz
                    interior en un mundo que necesita sanación.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-xl transition-all duration-500 rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-warmBrown-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-warmBrown-900 mb-4">Nuestros Valores</h4>
                  <p className="text-warmBrown-700 leading-relaxed">
                    Autenticidad, compasión y excelencia en cada creación. Creemos en el poder transformador de la
                    música consciente y el arte como medicina para el alma.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-warmBrown-200/50 hover:shadow-xl transition-all duration-500 rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-warmBrown-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-serif font-semibold text-warmBrown-900 mb-4">Nuestra Visión</h4>
                  <p className="text-warmBrown-700 leading-relaxed">
                    Un mundo donde cada persona tenga acceso a herramientas de paz interior, creando una red global de
                    conciencias elevadas y corazones sanados.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Llamada a la Acción Final */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-warmBrown-100 via-orange-100 to-amber-100 border-warmBrown-200/50 rounded-3xl max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h3 className="text-4xl font-serif font-semibold text-warmBrown-900 mb-6">Únete a Nuestra Misión</h3>
                  <p className="text-xl text-warmBrown-700 mb-8 leading-relaxed">
                    Cada suscriptor, cada like, cada comentario nos ayuda a llevar más paz al mundo. Sé parte de esta
                    hermosa comunidad de almas que buscan la tranquilidad y la elevación espiritual.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-warmBrown-600 hover:from-orange-600 hover:to-warmBrown-700 text-white px-10 py-4 text-xl rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Youtube className="w-6 h-6 mr-3" />
                      Suscribirse Ahora
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-warmBrown-400 text-warmBrown-700 hover:bg-warmBrown-50 px-10 py-4 text-xl rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Heart className="w-6 h-6 mr-3" />
                      Apoyar la Misión
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-warmBrown-900 via-warmBrown-800 to-warmBrown-900 text-cream-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="Relaxed Axolotl Logo"
                className="w-12 h-12 rounded-full border-2 border-cream-200/30 shadow-xl"
                width={48}
                height={48}
              />
              <span className="text-3xl font-serif font-semibold">Relaxed Axolotl</span>
            </div>

            <p className="text-cream-200 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              Creando espacios de paz y tranquilidad para nutrir el alma y elevar la conciencia
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <Button
                variant="ghost"
                size="lg"
                className="text-cream-200 hover:text-white hover:bg-warmBrown-700 rounded-full p-4"
              >
                <Youtube className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-cream-200 hover:text-white hover:bg-warmBrown-700 rounded-full p-4"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-cream-200 hover:text-white hover:bg-warmBrown-700 rounded-full p-4"
              >
                <Twitter className="w-6 h-6" />
              </Button>
            </div>

            <div className="border-t border-warmBrown-700 pt-8">
              <p className="text-cream-300/70 text-sm">
                © 2024 Relaxed Axolotl. Todos los derechos reservados. Hecho con ❤️ para elevar la conciencia mundial.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
