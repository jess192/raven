import React, { useReducer, useMemo, createContext } from 'react';
import { GlobalActionType, GlobalStateType, GlobalActionsEnum, ThemeModeEnum } from '@/types';
import { getInitialTheme } from '@/utils/localStorage';

export const initialGlobalState = {
  theme: getInitialTheme(),
};

export const globalReducer = (state: GlobalStateType, action: GlobalActionType) => {
  switch (action.type) {
    case GlobalActionsEnum.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT,
      };
    default:
      return state;
  }
};

type GlobalProviderProps = {
  children: React.ReactNode
}

export const GlobalContext = createContext({
  state: initialGlobalState,
  dispatch: null,
});

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);
  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={memoizedValue}>
      { children }
    </GlobalContext.Provider>
  );
}
