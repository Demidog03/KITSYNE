'use client';

import { createCounterStore } from '@/modules/counter/model/counter-store';
import createContextProvider from '@lib/hooks/createContextProvider';

export const { useCounterStore, CounterStoreProvider } = createContextProvider(
  createCounterStore,
  'counter'
);
