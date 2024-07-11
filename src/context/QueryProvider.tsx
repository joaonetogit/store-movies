import { queryClient } from '@/functions/queryClient';
import { IChildren } from '@/types/base';
import { QueryClientProvider } from '@tanstack/react-query';

export function QueryProvider({ children }: IChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
