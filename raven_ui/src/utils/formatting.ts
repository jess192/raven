export function formatPrice(price: number) {
  if (price == null) {
    return 'N/A';
  }
  return '$'.concat(price.toString());
}
