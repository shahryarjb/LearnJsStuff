import { useEffect } from "react";

export const useTimeout = (
  delay: number | undefined,
  callback: () => void
) => {
  useEffect(() => { //(1)
    if (!delay) return;
    const timeout = setTimeout(callback, delay); //(2)
    return () => { //(3)
      clearTimeout(timeout);
    };
  }, [delay, callback]); //(4)
};
