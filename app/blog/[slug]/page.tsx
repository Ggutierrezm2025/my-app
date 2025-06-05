

import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params

  const article = {
    title: "Los Beneficios de la Meditación Diaria",
    excerpt: "Descubre cómo 10 minutos de meditación pueden transformar tu día y mejorar tu bienestar general.",
    date: "15 Nov 2024",
    category: "Meditación",
  }

  return {
    title: `${article.title} - Blog Relaxed Axolotl`,
    description: article.excerpt,
    keywords: [
      "meditación diaria",
      "beneficios meditación",
      "práctica meditativa",
      "bienestar mental",
      "mindfulness",
      "paz interior",
      "reducir estrés",
      "concentración",
    ],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: ["Relaxed Axolotl Team"],
      section: article.category,
      images: [`/og-article-${slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`/twitter-article-${slug}.jpg`],
    },
    alternates: {
      canonical: `https://relaxed-axolotl.com/blog/${slug}`,
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params

  const article = {
    title: "Los Beneficios de la Meditación Diaria",
    excerpt: "Descubre cómo 10 minutos de meditación pueden transformar tu día y mejorar tu bienestar general.",
    content: `
      <p>La meditación diaria es una de las prácticas más transformadoras que puedes incorporar en tu vida. En tan solo 10 minutos al día, puedes experimentar cambios profundos en tu bienestar mental, emocional y físico.</p>
      <!-- ...contenido omitido para brevedad... -->
    `,
    date: "15 Nov 2024",
    readTime: "5 min",
    category: "Meditación",
    author: "Relaxed Axolotl Team",
  }

  const relatedArticles = [
    {
      title: "Respiración Consciente: Tu Ancla al Presente",
      excerpt: "Técnicas de respiración que puedes usar en cualquier momento para centrarte y encontrar calma.",
      date: "5 Nov 2024",
      readTime: "6 min",
      category: "Técnicas",
    },
    {
      title: "Creando tu Espacio Sagrado",
      excerpt: "Consejos prácticos para diseñar un rincón de paz en tu hogar donde puedas meditar y relajarte.",
      date: "8 Nov 2024",
      readTime: "4 min",
      category: "Lifestyle",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://relaxed-axolotl.com/images/blog/${slug}.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Relaxed Axolotl Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Relaxed Axolotl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://relaxed-axolotl.com/logo.png"
      }
    },
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://relaxed-axolotl.com/blog/${slug}`
    },
    "articleSection": article.category,
    "keywords": ["meditación", "bienestar", "mindfulness", "relajación"],
    "wordCount": article.content.split(' ').length,
    "timeRequired": `PT${article.readTime.replace(' min', 'M')}`,
    "inLanguage": "es-ES"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        {/* Article Content */}
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="ghost"
                className="text-amber-700 hover:text-orange-700 hover:bg-amber-100/50 p-2"
                onClick={() => window.history.back()}
                aria-label="Volver al blog"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Blog
              </Button>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <time className="text-sm text-amber-600 flex items-center" dateTime={new Date(article.date).toISOString()}>
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </time>
                <time className="text-sm text-amber-600 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </time>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-light text-amber-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-amber-800/80 leading-relaxed mb-8">{article.excerpt}</p>

              <div className="flex items-center justify-between border-t border-amber-200 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full"></div>
                  <div>
                    <p className="font-medium text-amber-900">{article.author}</p>
                    <p className="text-sm text-amber-600">Equipo de Bienestar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-orange-700" aria-label="Me gusta este artículo">
                    <Heart className="w-4 h-4 mr-1" />
                    Me gusta
                  </Button>
                  <Button variant="ghost" size="sm" className="text-amber-700 hover:text-orange-700" aria-label="Compartir artículo">
                    <Share2 className="w-4 h-4 mr-1" />
                    Compartir
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <div 
                className="h-64 md:h-96 bg-gradient-to-br from-orange-200 to-amber-200 rounded-xl"
                role="img"
                aria-label={`Imagen principal para ${article.title}`}
              ></div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-amber-900 prose-p:text-amber-800/90 prose-p:leading-relaxed prose-strong:text-amber-900 prose-ul:text-amber-800/90 prose-li:text-amber-800/90"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-amber-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-amber-700 font-medium">¿Te gustó este artículo?</span>
                  <Button variant="ghost" size="sm" className="text-orange-700 hover:text-orange-800">
                    <Heart className="w-4 h-4 mr-1" />
                    Me gusta
                  </Button>
                </div>
                {/* ...puedes continuar aquí... */}
              </div>
            </footer>
          </div>
        </article>
      </div>
    </>
  )
}