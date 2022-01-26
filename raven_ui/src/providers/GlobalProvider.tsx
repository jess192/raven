import React, { useReducer, useMemo, createContext } from 'react';
import { initialState, globalReducer } from '@/reducers/globalReducer';

type GlobalProviderProps = {
  children: React.ReactNode
}

export const GlobalContext = createContext({
  state: initialState,
  dispatch: null,
});

function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={memoizedValue}>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
