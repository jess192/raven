export function formatPrice(price: number): string {
  if (price == null) {
    return 'OOS';
  }
  return '$'.concat(price.toString());
}

export const toPixels = (val: number): string => val.toString().concat('px');
export const toMs = (val: number): string => val.toString().concat('ms');
