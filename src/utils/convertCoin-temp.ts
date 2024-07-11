import { HasSymbol } from '@/types/utils/convertCoin';

export default function convertCoin(value: number, hasSymbol: HasSymbol): string {
  const valueFormatted = new Intl.NumberFormat('en-US', {
    style: hasSymbol === 'hasSymbol' ? 'currency' : 'decimal',
    currency: 'USD',
  }).format(value);

  return valueFormatted;
}
