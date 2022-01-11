import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

const PageContext = createContext({});

export function PageContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [isMaxReached, setIsMaxReached] = useState(false);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decreaseCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  useEffect(() => {
    if (count === 9) setIsMaxReached(true);
  }, [count]);

  const value = useMemo(
    () => ({
      increaseCount,
      decreaseCount,
      count,
      isMaxReached,
    }),
    [increaseCount, decreaseCount, count]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export const usePageContext = () => {
  return useContext(PageContext);
};
