import React from 'react';
import HomeView from '@/views/Home/HomeView';
import HomeProvider from './context';
import QueryProvider from './providers/queryProvider';

export default function Home() {
  return (
    <HomeProvider>
      <QueryProvider>
        <HomeView />
      </QueryProvider>
    </HomeProvider>
  );
}
