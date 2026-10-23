/**
 * Aplica el tema guardado antes del primer pintado para evitar el parpadeo.
 */
try {
  document.documentElement.dataset.theme = localStorage.getItem('theme') || 'dark';
} catch (e) {}
