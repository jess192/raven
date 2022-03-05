import React from 'react';
import { ComponentChildrenProps } from '@/types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function QueryProvider({ children }: ComponentChildrenProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      { children }
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
