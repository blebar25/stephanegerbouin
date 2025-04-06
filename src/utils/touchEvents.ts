if (typeof window !== 'undefined') {
  const addPassiveEventListener = (element: HTMLElement | Window, eventName: string) => {
    element.addEventListener(eventName, () => {}, { passive: true });
  };

  // Ajouter les écouteurs passifs pour les événements tactiles
  ['touchstart', 'touchmove'].forEach(eventName => {
    addPassiveEventListener(window, eventName);
  });
}
