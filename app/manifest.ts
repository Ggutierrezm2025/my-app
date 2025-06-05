import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Relaxed Axolotl - Videos para Meditación y Relajación",
    short_name: "Relaxed Axolotl",
    description: "Videos para meditación, relajación y bienestar mental",
    start_url: "/",
    display: "standalone",
    background_color: "#fffbeb",
    theme_color: "#92400e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
