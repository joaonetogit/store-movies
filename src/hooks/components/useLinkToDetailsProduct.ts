import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { GetProduct } from '@/functions/getProduct';
import { generateSlug } from '@/utils/generateSlug';
import { useQueryClient } from '@tanstack/react-query';

export default function useLinkToDetailsProduct(title: string) {
  const slug = generateSlug(title);
  const queryClient = useQueryClient();

  const prefetchProduct = async () => {
    await queryClient.prefetchQuery({
      queryKey: [slug],
      queryFn: () => GetProduct(slug),
      staleTime: StaleTimeQuery,
    });
  };

  return { slug, prefetchProduct };
}
