import { IProvidersProps } from '@/types/context/Providers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export default function Providers({ children }: IProvidersProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryProvider>
    </ThemeProvider>
  );
}
