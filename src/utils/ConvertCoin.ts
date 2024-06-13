import { HasSymbol } from '@/types/utils/ConvertCoin';

export default function ConvertCoin(value: number, hasSymbol: HasSymbol): string {
  const valueFormatted = new Intl.NumberFormat('en-US', {
    style: hasSymbol === 'hasSymbol' ? 'currency' : 'decimal',
    currency: 'USD',
  }).format(value);

  return valueFormatted;
}
