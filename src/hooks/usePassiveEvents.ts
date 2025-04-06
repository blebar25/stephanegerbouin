import { useEffect } from 'react';

export const usePassiveEvents = (element: HTMLElement | null, events: string[]) => {
  useEffect(() => {
    if (!element) return;

    const options = { passive: true };
    
    events.forEach(event => {
      element.addEventListener(event, () => {}, options);
    });

    return () => {
      events.forEach(event => {
        element.removeEventListener(event, () => {}, options);
      });
    };
  }, [element, events]);
};
