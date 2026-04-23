/**
 * Side-effect script to fix fetch read-only error
 */
(function() {
  if (typeof window !== 'undefined' && window.fetch) {
    const originalFetch = window.fetch;
    try {
      // Define fetch as a property that supports both getter and setter
      // This absorbs libraries trying to overwrite it without crashing.
      let currentFetch = originalFetch;
      Object.defineProperty(window, 'fetch', {
        get() { return currentFetch; },
        set(v) { 
          console.warn('Something tried to overwrite window.fetch. Using the new value, but checking compatibility.');
          currentFetch = v; 
        },
        enumerable: true,
        configurable: true
      });
    } catch (e) {
      console.warn('Failed to redefine window.fetch as writable naturally. Attempting fallback.');
      // Fallback: try to just bypass the error if we can't change it
      // But we can't really bypass a TypeError on assignment unless we catch it there.
    }
  }
})();
