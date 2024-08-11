interface ImportMetaEnv {
  readonly VITE_APP_EMAIL_SERVICE_ID: string
  readonly VITE_APP_EMAIL_TEMPLATE_ID: string
  readonly VITE_APP_EMAIL_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
