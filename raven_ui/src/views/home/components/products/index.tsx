import React from 'react';
import ProductGrid from './components/ProductGrid';
import ProductProvider from './context';

export default function Products() {
  return (
    <ProductProvider>
      <ProductGrid />
    </ProductProvider>
  );
}
