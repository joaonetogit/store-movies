import { IProvidersProps } from '@/types/context/Providers';
import QueryProvider from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export default function Providers({ children }: IProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
