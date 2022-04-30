import { useEffect } from 'react';

function useInterval(callback: Function, interval: number, stop: any) {
  useEffect(() => {
    const id = setInterval(() => !stop && callback(), interval);
    return () => clearInterval(id);
  }, [callback]);
}

export default useInterval;
