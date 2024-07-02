declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_URL_API: string;
      VITE_USERNAME_AUTH: string;
      VITE_PASSWORD_AUTH: string;
    }
  }
}

export { };
