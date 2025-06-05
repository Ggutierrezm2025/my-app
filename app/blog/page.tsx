import { Calendar, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Bienestar - Artículos sobre Meditación y Mindfulness",
  description:
    "Descubre artículos sobre meditación, mindfulness, técnicas de relajación y bienestar mental. Consejos prácticos para mejorar tu práctica diaria de meditación.",
  keywords: [
    "blog meditación",
    "artículos mindfulness",
    "técnicas de relajación",
    "bienestar mental",
    "consejos meditación",
    "práctica diaria",
    "paz interior",
    "desarrollo personal",
  ],
  openGraph: {
    title: "Blog de Bienestar - Relaxed Axolotl",
    description: "Artículos sobre meditación, mindfulness y técnicas de relajación para tu bienestar.",
    images: ["/og-blog.jpg"],
  },
}

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Los Beneficios de la Meditación Diaria",
      excerpt:
        "Descubre cómo 10 minutos de meditación pueden transformar tu día y mejorar tu bienestar general. La práctica constante de la meditación ha demostrado reducir el estrés, mejorar la concentración y aumentar la sensación de paz interior.",
      date: "15 Nov 2024",
      readTime: "5 min",
      category: "Meditación",
      featured: true,
      slug: "beneficios-meditacion-diaria",
    },
    {
      id: 2,
      title: "Música y Frecuencias Curativas",
      excerpt:
        "Explora el poder de las frecuencias sonoras y cómo pueden influir en tu estado mental y emocional. Desde los antiguos mantras hasta las modernas composiciones binaurales.",
      date: "12 Nov 2024",
      readTime: "7 min",
      category: "Música",
      featured: true,
      slug: "musica-frecuencias-curativas",
    },
    {
      id: 3,
      title: "Creando tu Espacio Sagrado",
      excerpt:
        "Consejos prácticos para diseñar un rincón de paz en tu hogar donde puedas meditar y relajarte. No necesitas mucho espacio, solo intención y algunos elementos clave.",
      date: "8 Nov 2024",
      readTime: "4 min",
      category: "Lifestyle",
      featured: true,
      slug: "creando-espacio-sagrado",
    },
    {
      id: 4,
      title: "Respiración Consciente: Tu Ancla al Presente",
      excerpt:
        "Técnicas de respiración que puedes usar en cualquier momento para centrarte y encontrar calma. La respiración es nuestra herramienta más poderosa y siempre está disponible.",
      date: "5 Nov 2024",
      readTime: "6 min",
      category: "Técnicas",
      featured: false,
      slug: "respiracion-consciente",
    },
    {
      id: 5,
      title: "El Poder del Silencio en un Mundo Ruidoso",
      excerpt:
        "Cómo encontrar momentos de silencio en nuestra vida cotidiana y por qué son esenciales para nuestro bienestar mental y espiritual.",
      date: "2 Nov 2024",
      readTime: "5 min",
      category: "Mindfulness",
      featured: false,
      slug: "poder-del-silencio",
    },
    {
      id: 6,
      title: "Meditación en Movimiento: Caminar Consciente",
      excerpt:
        "Descubre cómo convertir una simple caminata en una práctica meditativa profunda. La meditación no siempre requiere estar sentado en silencio.",
      date: "29 Oct 2024",
      readTime: "4 min",
      category: "Meditación",
      featured: false,
      slug: "meditacion-en-movimiento",
    },
  ]

  const categories = ["Todos", "Meditación", "Música", "Lifestyle", "Técnicas", "Mindfulness"]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Bienestar - Relaxed Axolotl",
    description: "Artículos sobre meditación, mindfulness y técnicas de relajación",
    url: "https://relaxed-axolotl.com/blog",
    author: {
      "@type": "Organization",
      name: "Relaxed Axolotl",
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      url: `https://relaxed-axolotl.com/blog/${article.slug}`,
      datePublished: new Date(article.date).toISOString(),
      author: {
        "@type": "Organization",
        name: "Relaxed Axolotl",
      },
      publisher: {
        "@type": "Organization",
        name: "Relaxed Axolotl",
        logo: {
          "@type": "ImageObject",
          url: "https://relaxed-axolotl.com/logo.png",
        },
      },
    })),
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
              <a href="/#music" className="text-amber-100 hover:text-orange-200 transition-colors font-medium">
                Música
              </a>
              <a href="/blog" className="text-orange-200 font-medium">
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
              <h1 className="text-5xl md:text-6xl font-serif font-light text-amber-900 mb-6">Blog de Bienestar</h1>
              <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
                Artículos, consejos y reflexiones sobre meditación, mindfulness y el arte de vivir en paz
              </p>
            </header>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <Input
                    placeholder="Buscar artículos sobre meditación, mindfulness..."
                    className="pl-10 bg-white/70 border-amber-200 focus:border-orange-300 rounded-full"
                    aria-label="Buscar artículos"
                  />
                </div>
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

        {/* Featured Articles */}
        <section className="py-16 bg-gradient-to-b from-orange-100 to-amber-50" aria-labelledby="featured-heading">
          <div className="container mx-auto px-4">
            <h2 id="featured-heading" className="text-3xl font-serif font-light text-amber-900 mb-8 text-center">
              Artículos Destacados
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles
                .filter((article) => article.featured)
                .map((article) => (
                  <article
                    key={article.id}
                    className="bg-white/80 backdrop-blur-sm border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:bg-white/90 group cursor-pointer rounded-lg"
                  >
                    <div className="p-0">
                      <div
                        className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 rounded-t-lg"
                        role="img"
                        aria-label={`Imagen para ${article.title}`}
                      ></div>
                      <div className="p-6">
                        <header className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <time className="text-sm text-amber-600 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </time>
                        </header>
                        <h3 className="text-xl font-serif font-medium text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-amber-800/70 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                        <footer className="flex items-center justify-between">
                          <time className="text-sm text-amber-600 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {article.date}
                          </time>
                          <span className="text-orange-700 text-sm font-medium group-hover:text-orange-800">
                            Leer más →
                          </span>
                        </footer>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50" aria-labelledby="all-articles-heading">
          <div className="container mx-auto px-4">
            <h2 id="all-articles-heading" className="text-3xl font-serif font-light text-amber-900 mb-8 text-center">
              Todos los Artículos
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white/70 backdrop-blur-sm border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:bg-white/80 group cursor-pointer rounded-lg"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div
                        className="md:w-48 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-lg flex-shrink-0"
                        role="img"
                        aria-label={`Imagen para ${article.title}`}
                      ></div>
                      <div className="flex-1">
                        <header className="flex items-center gap-4 mb-3">
                          <span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <time className="text-sm text-amber-600 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {article.date}
                          </time>
                          <time className="text-sm text-amber-600 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </time>
                        </header>
                        <h3 className="text-2xl font-serif font-medium text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-amber-800/70 leading-relaxed mb-4">{article.excerpt}</p>
                        <span className="text-orange-700 font-medium group-hover:text-orange-800 inline-flex items-center">
                          Leer artículo completo →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-300 text-orange-700 hover:bg-orange-100 px-8 py-3 text-lg font-medium rounded-full"
              >
                Cargar Más Artículos
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-100">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-amber-900 mb-4">Mantente Conectado</h2>
              <p className="text-amber-800/80 mb-8 leading-relaxed">
                Suscríbete a nuestro newsletter para recibir los últimos artículos sobre bienestar y meditación
                directamente en tu correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Tu email"
                  className="flex-1 bg-white/70 border-amber-200 focus:border-orange-300 rounded-full"
                  type="email"
                  aria-label="Ingresa tu email"
                />
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 rounded-full">Suscribirse</Button>
              </div>
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
              Creando espacios de paz y tranquilidad a través de la música y el conocimiento
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
