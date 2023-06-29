import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  xsmall: 576,
  small: 768,
  medium: 992,
  large: 1200,
  xlarge: 1400,
};

function debounce<T = unknown, R = void>(fn: (...args: unknown[]) => R, delay: number, context?: T) {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn.apply(context, args);
    }, delay);
  };
}

/*
hook that returns the width and height of the window when resized
reference: https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
*/

const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);
  return dimensions;
};
export default useWindowSize;
