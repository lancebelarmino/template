import React, { ReactNode } from 'react';

interface ProviderProps<ContextValue> {
  children: ReactNode;
  value: ContextValue;
}

export default function createContext<ContextValue>() {
  const Context = React.createContext<ContextValue | null>(null);

  const useContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === null) throw new Error('No context provided');
    return ctx;
  };

  const Provider = ({ children, value }: ProviderProps<ContextValue>) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useContext] as const;
}
