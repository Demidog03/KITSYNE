'use client';

import { FC, ReactNode, createContext, useContext, useRef } from 'react';
import { useStore as useZustandStore } from 'zustand/react';
import { StoreApi } from 'zustand/vanilla';
import { capitalize } from '@lib/utils';

type ProviderName<TName extends string> = `${Capitalize<TName>}StoreProvider`;
type HookName<TName extends string> = `use${Capitalize<TName>}Store`;

type StoreProviderReturn<TStore, TName extends string> = {
  [PN in ProviderName<TName>]: FC<{ children: ReactNode }>;
} & {
  [HN in HookName<TName>]: <T>(selector: (store: TStore) => T) => T;
};

export default function createContextProvider<TStore, TName extends string>(
  createStore: () => StoreApi<TStore>,
  name: TName
): StoreProviderReturn<TStore, TName> {
  const capitalizedName = capitalize(name);
  const StoreContext = createContext<StoreApi<TStore> | undefined>(undefined);
  StoreContext.displayName = name;

  const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<StoreApi<TStore> | null>(null);

    if (storeRef.current === null) {
      storeRef.current = createStore();
    }

    return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
  };

  const useStore = <T,>(selector: (store: TStore) => T): T => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
      throw new Error(`use${capitalizedName} must be used within a ${capitalizedName}Provider`);
    }

    return useZustandStore(storeContext, selector);
  };

  return {
    [`${capitalizedName}StoreProvider`]: StoreProvider,
    [`use${capitalizedName}Store`]: useStore,
  } as StoreProviderReturn<TStore, TName>;
}
