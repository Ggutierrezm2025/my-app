import { Search, Filter, Play, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { VideoCard } from "@/components/video-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Videos de Meditación y Relajación - Relaxed Axolotl",
  description:
    "Explora nuestra colección de videos para meditación, relajación, sueño profundo y bienestar. Videos de alta calidad para ayudarte a encontrar paz y tranquilidad.",
  keywords: [
    "videos meditación",
    "videos relajación",
    "videos para dormir",
    "meditación guiada",
    "sonidos relajantes",
    "música para meditar",
    "canal youtube meditación",
  ],
  openGraph: {
    title: "Videos de Meditación y Relajación - Relaxed Axolotl",
    description: "Explora nuestra colección de videos para meditación, relajación y bienestar.",
    images: ["/og-videos.jpg"],
  },
}

export default function VideosPage() {
  const categories = ["Todos", "Meditación", "Relajación", "Sueño", "Naturaleza", "Frecuencias", "Música Ambiente"]

  const videos = [
    {
      title: "Ondas Serenas | Sonidos Oceánicos para Meditación Profunda",
      duration: "45:30",
      description:
        "Sonidos oceánicos suaves para meditación profunda y relajación. Ideal para dormir y reducir el estrés.",
      category: "Naturaleza",
    },
    {
      title: "Bosque Místico | Melodías Naturales para Conectar con la Tierra",
      duration: "38:15",
      description: "Melodías naturales que conectan con la tierra. Sonidos de bosque para meditación y mindfulness.",
      category: "Naturaleza",
    },
    {
      title: "Luz Dorada | Armonías Cálidas para el Amanecer Interior",
      duration: "52:20",
      description:
        "Armonías cálidas para el amanecer interior. Música para despertar tu energía y comenzar el día con paz.",
      category: "Meditación",
    },
    {
      title: "Respiración Cósmica | Frecuencias que Sincronizan con tu Respiración",
      duration: "41:45",
      description: "Frecuencias que sincronizan con tu respiración. Meditación guiada para la relajación profunda.",
      category: "Frecuencias",
    },
    {
      title: "Jardín Zen | Melodías Minimalistas para la Contemplación",
      duration: "36:30",
      description: "Melodías minimalistas para la contemplación. Música zen para la práctica de mindfulness.",
      category: "Música Ambiente",
    },
    {
      title: "Abrazo Lunar | Sonidos Nocturnos para el Descanso Profundo",
      duration: "48:10",
      description: "Sonidos nocturnos para el descanso profundo. Música para dormir y relajarse antes de acostarse.",
      category: "Sueño",
    },
    {
      title: "Lluvia Tranquila | Sonidos de Lluvia para Concentración y Estudio",
      duration: "3:02:15",
      description:
        "Sonidos de lluvia suave para concentrarte en tus estudios o trabajo. Bloquea distracciones y mejora el enfoque.",
      category: "Naturaleza",
    },
    {
      title: "Meditación Guiada | 15 Minutos para Comenzar el Día",
      duration: "15:45",
      description: "Meditación guiada de 15 minutos para comenzar tu día con claridad, intención y energía positiva.",
      category: "Meditación",
    },
    {
      title: "432 Hz | Frecuencia de Sanación y Armonía",
      duration: "1:08:30",
      description:
        "Música afinada a 432 Hz, considerada la frecuencia de la naturaleza. Promueve la sanación y armonía interior.",
      category: "Frecuencias",
    },
    {
      title: "Cascada Serena | Sonidos de Agua para Relajación Profunda",
      duration: "55:20",
      description:
        "Sonidos de cascada y arroyos para una relajación profunda. Ideal para meditación y reducción del estrés.",
      category: "Naturaleza",
    },
    {
      title: "Noche Estrellada | Música para Dormir Profundamente",
      duration: "8:05:00",
      description:
        "8 horas de música suave diseñada para ayudarte a conciliar el sueño y mantener un descanso profundo toda la noche.",
      category: "Sueño",
    },
    {
      title: "Campanas Tibetanas | Limpieza de Energía y Chakras",
      duration: "42:15",
      description:
        "Sonidos de campanas tibetanas tradicionales para limpiar la energía del espacio y equilibrar los chakras.",
      category: "Música Ambiente",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Videos de Meditación y Relajación - Relaxed Axolotl",
    description: "Colección de videos para meditación, relajación y bienestar",
    url: "https://relaxed-axolotl.com/videos",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: videos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoObject",
          name: video.title,
          description: video.description,
          duration: `PT${video.duration.replace(":", "H").replace(":", "M")}S`,
          thumbnailUrl: `https://relaxed-axolotl.com/thumbnails/${video.title.toLowerCase().replace(/\s+/g, "-")}.jpg`,
          uploadDate: "2024-01-01T08:00:00+08:00",
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-amber-900/90 backdrop-blur-sm z-50 border-b border-amber-800/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Relaxed Axolotl Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
              <span className="text-amber-50 font-serif text-xl font-semibold">Relaxed Axolotl</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-amber-100 hover:text-orange-200 transition-colors font-medium">
                Inicio
              </a>
              <a href="/videos" className="text-orange-200 font-medium">
                Videos
              </a>
              <a href="/blog" className="text-amber-100 hover:text-orange-200 transition-colors font-medium">
                Blog
              </a>
              <a href="/#about" className="text-amber-100 hover:text-orange-200 transition-colors font-medium">
                Acerca de
              </a>
              <a href="/#contact" className="text-amber-100 hover:text-orange-200 transition-colors font-medium">
                Contacto
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-amber-100 to-orange-100">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif font-light text-amber-900 mb-6">
                Videos para Meditación y Relajación
              </h1>
              <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
                Explora nuestra colección de videos diseñados para ayudarte a encontrar paz, tranquilidad y bienestar en
                tu día a día
              </p>
            </header>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <Input
                    placeholder="Buscar videos de meditación, sonidos de naturaleza..."
                    className="pl-10 bg-white/70 border-amber-200 focus:border-orange-300 rounded-full"
                    aria-label="Buscar videos"
                  />
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "Todos"
                        ? "bg-orange-600 hover:bg-orange-700 text-white rounded-full"
                        : "border-amber-300 text-amber-700 hover:bg-amber-100 rounded-full"
                    }
                    aria-label={`Filtrar por categoría ${category}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 bg-gradient-to-b from-orange-100 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videos.map((video, index) => (
                <VideoCard key={index} title={video.title} duration={video.duration} description={video.description} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-300 text-orange-700 hover:bg-orange-100 px-8 py-3 text-lg font-medium rounded-full"
              >
                Cargar Más Videos
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Playlists */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-serif font-light text-amber-900 mb-4">Listas de Reproducción</h2>
              <p className="text-amber-800/80 max-w-2xl mx-auto leading-relaxed">
                Colecciones temáticas de videos para diferentes momentos y necesidades
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Meditación Guiada",
                  count: "12 videos",
                  description: "Meditaciones guiadas para principiantes y practicantes avanzados",
                },
                {
                  title: "Sonidos de la Naturaleza",
                  count: "18 videos",
                  description: "Lluvia, océano, bosque y más sonidos naturales para relajarte",
                },
                {
                  title: "Para Dormir Profundamente",
                  count: "8 videos",
                  description: "Videos largos diseñados para ayudarte a conciliar el sueño",
                },
                {
                  title: "Frecuencias Curativas",
                  count: "15 videos",
                  description: "Música con frecuencias específicas para diferentes beneficios",
                },
              ].map((playlist, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border border-amber-200/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-white/80 group cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-orange-200 to-amber-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-serif font-medium text-amber-900 mb-1 group-hover:text-orange-700 transition-colors">
                      {playlist.title}
                    </h3>
                    <p className="text-sm text-amber-600 mb-2">{playlist.count}</p>
                    <p className="text-amber-800/70 text-sm leading-relaxed">{playlist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-amber-900 mb-4">Suscríbete a Nuestro Canal</h2>
              <p className="text-amber-800/80 mb-8 leading-relaxed">
                No te pierdas nuestros nuevos videos. Suscríbete a nuestro canal de YouTube para recibir notificaciones
                cuando publiquemos nuevo contenido.
              </p>
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Suscribirse al Canal
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-amber-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Relaxed Axolotl"
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
              <span className="text-xl font-serif font-semibold">Relaxed Axolotl</span>
            </div>

            <p className="text-amber-200/80 mb-6 leading-relaxed">
              Creando espacios de paz y tranquilidad a través de videos de meditación
            </p>

            <div className="border-t border-amber-800 pt-6">
              <p className="text-amber-300/70 text-sm">© 2024 Relaxed Axolotl. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
