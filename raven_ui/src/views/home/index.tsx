import React from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Filter from '@/views/home/components/filter';
import InsertProduct from '@/views/home/components/insert';
import Sort from '@/views/home/components/sort';
import Products from '@/views/home/components/products';
import HomeProvider from '@/views/home/context';

const ViewContainerStyle = styled.div`
  display: flex;
  height: calc(100vh - 87px);
`;

const ProductContainerStyle = styled.div`
  height: calc(100vh - 87px);
  width: 80%;
`;

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <HomeProvider>
      <QueryClientProvider client={queryClient}>

        <ViewContainerStyle>
          <Filter />
          <ProductContainerStyle>
            <Sort />
            <InsertProduct />
            <Products />
          </ProductContainerStyle>
        </ViewContainerStyle>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HomeProvider>
  );
}
