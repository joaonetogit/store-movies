export default function convertCoin(value: number, hasSymbol: 'hasSymbol' | 'noSymbol'): string {
  const valueFormatted = new Intl.NumberFormat('en-US', {
    style: hasSymbol === 'hasSymbol' ? 'currency' : 'decimal',
    currency: 'USD',
  }).format(value);

  return valueFormatted;
}
