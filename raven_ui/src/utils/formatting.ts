export function formatPrice(price: number): string {
  if (price == null) {
    return 'out of stock';
  }
  return '$'.concat(price.toFixed(2).toString());
}

export function formatDate(timestamp: string) {
  const toFormat: Date = new Date(timestamp);
  return toFormat.toLocaleDateString().concat(' ', toFormat.toLocaleTimeString());
}

export const toPixels = (val: number): string => val.toString().concat('px');
export const toMs = (val: number): string => val.toString().concat('ms');
