if (typeof window !== 'undefined') {
  try {
    const options = {
      get passive() {
        return true;
      }
    } as EventListenerOptions;

    window.addEventListener('test', null as any, options);
    window.removeEventListener('test', null as any, options);
  } catch (err) {
    // Le navigateur ne supporte pas les options passives
  }
}
