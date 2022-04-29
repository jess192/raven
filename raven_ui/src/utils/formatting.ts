export function formatPrice(price: number): string {
  if (price == null) {
    return 'Out of Stock';
  }
  return '$'.concat(price.toString());
}

export const toPixels = (val: number): string => val.toString().concat('px');
export const toMs = (val: number): string => val.toString().concat('ms');
