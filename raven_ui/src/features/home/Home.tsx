import React from 'react';
import styled from 'styled-components';
import { Header } from '@/features/header';
import { Filter } from '@/features/filter';
import { InsertProduct } from '@/features/insert';
import { Sort } from '@/features/sort';
import { Products } from '@/features/products';

const ViewContainerStyle = styled.div`
  display: flex;
  height: calc(100vh - 87px);
`;

const ProductContainerStyle = styled.div`
  height: calc(100vh - 87px);
  width: 80%;
`;

// or create layout in a component and send props of Header, Filter, etc..?
export function Home() {
  return (
    <>
      <Header />
      <ViewContainerStyle>
        <Filter />
        <ProductContainerStyle>
          <InsertProduct />
          <Sort />
          <Products />
        </ProductContainerStyle>
      </ViewContainerStyle>
    </>
  );
}
