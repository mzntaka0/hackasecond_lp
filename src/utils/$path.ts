export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "blogs": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blogs/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/blogs' as const, hash: url?.hash })
  },
  "pricing": {
    $url: (url?: { hash?: string }) => ({ pathname: '/pricing' as const, hash: url?.hash })
  },
  "services": {
    "api": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/api' as const, hash: url?.hash })
    },
    "consultation": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/consultation' as const, hash: url?.hash })
    },
    "contract_development": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/contract_development' as const, hash: url?.hash })
    },
    "education": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/education' as const, hash: url?.hash })
    },
    "frontend": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/frontend' as const, hash: url?.hash })
    },
    "integration": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/integration' as const, hash: url?.hash })
    },
    "machine_learning": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/machine_learning' as const, hash: url?.hash })
    },
    "mvp_development": {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/mvp_development' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/services' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  bookshelf_jpg: '/bookshelf.jpg',
  desk_jpg: '/desk.jpg',
  eng_takao_mizuno_resume_pdf: '/eng_takao_mizuno_resume.pdf',
  favicon: {
    android_chrome_192x192_png: '/favicon/android-chrome-192x192.png',
    android_chrome_512x512_png: '/favicon/android-chrome-512x512.png',
    apple_touch_icon_png: '/favicon/apple-touch-icon.png',
    favicon_16x16_png: '/favicon/favicon-16x16.png',
    favicon_32x32_png: '/favicon/favicon-32x32.png',
    favicon_ico: '/favicon/favicon.ico',
    site_webmanifest: '/favicon/site.webmanifest'
  },
  favicon_ico: '/favicon.ico',
  full_logo_svg: '/full_logo.svg',
  full_width_logo_svg: '/full_width_logo.svg',
  hackasecond_logo_jpg: '/hackasecond-logo.jpg',
  ja_takao_mizuno_resume_xlsx: '/ja_takao_mizuno_resume.xlsx',
  logo_jpg: '/logo.jpg',
  logo_png: '/logo.png',
  logo_svg: '/logo.svg',
  me_jpg: '/me.jpg',
  mypc_jpg: '/mypc.jpg',
  mypcparts_jpg: '/mypcparts.jpg',
  name_jpg: '/name.jpg',
  name_png: '/name.png',
  sitemap_png: '/sitemap.png',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
