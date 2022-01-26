import * as React from 'react';
import styled from 'styled-components';
import { Header } from '@/features/header';
import { Filter } from '@/features/filter';
import { Products } from '@/features/products';

const ViewContainerStyle = styled.div`
  display: flex;
  height: calc(100vh - 87px);
`;

// or create layout in a component and send props of Header, Filter, etc..?
export function Home() {
  return (
    <>
      <Header />
      <ViewContainerStyle>
        <Filter />
        <Products />
      </ViewContainerStyle>
    </>
  );
}
