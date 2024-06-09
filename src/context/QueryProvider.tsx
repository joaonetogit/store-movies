import { queryClient } from '@/functions/QueryClient';
import { IQueryProviderProps } from '@/types/context/QueryProvider';
import { QueryClientProvider } from '@tanstack/react-query';

export function QueryProvider({ children }: IQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
