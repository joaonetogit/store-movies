export default function convertCoin(value: number): string {
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return valueFormatted;
}
