import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const PageContext = createContext({});

export function PageContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, []);

  const decreaseCount = useCallback(() => {
    setCount(count - 1);
  }, []);

  const value = useMemo(
    () => ({
      increaseCount,
      decreaseCount,
      count,
    }),
    [increaseCount, decreaseCount, count]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export const usePageContext = () => {
  if (PageContext !== undefined) {
    return useContext(PageContext);
  } else {
    throw new Error(
      "usePageContext must be used in a PageContextProvider component."
    );
  }
};
