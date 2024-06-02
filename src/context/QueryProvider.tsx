import { queryClient } from '@/functions/QueryClient';
import { IProvidersProps } from '@/types/context/Providers';
import { QueryClientProvider } from '@tanstack/react-query';

export default function QueryProvider({ children }: IProvidersProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
