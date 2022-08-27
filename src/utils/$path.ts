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
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
