/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
  }
}
