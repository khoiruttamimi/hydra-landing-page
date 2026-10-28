export function initStickyHeader(): void {
  const header = document.querySelector<HTMLElement>('#site-header');

  if (!header) return;

  const updateHeaderShadow = (): void => {
    header.classList.toggle('shadow', window.scrollY > 0);
  };

  window.addEventListener('scroll', updateHeaderShadow, {
    passive: true,
  });

  updateHeaderShadow();
}
