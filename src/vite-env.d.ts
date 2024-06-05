/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_API: string;
  readonly VITE_USERNAME_AUTH: string;
  readonly VITE_PASSWORD_AUTH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
