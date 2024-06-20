import { GetProduct } from '@/functions/GetProduct';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { useQueryClient } from '@tanstack/react-query';

export default function useLinkToDetailsProduct(title: string) {
  const slug = GenerateSlug(title);
  const queryClient = useQueryClient();

  const prefetchProduct = async () => {
    await queryClient.prefetchQuery({
      queryKey: [slug],
      queryFn: () => GetProduct(slug),
      staleTime: 60000,
    });
  };

  return { slug, prefetchProduct };
}
