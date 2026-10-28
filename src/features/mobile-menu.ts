export function initMobileMenu(): void {
  const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
  const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');
  const menuIcon = document.querySelector<SVGElement>('#menu-icon');
  const closeIcon = document.querySelector<SVGElement>('#close-icon');

  if (menuToggle && mobileMenu) {
    const setMenuOpen = (isOpen: boolean): void => {
      mobileMenu.classList.toggle('invisible', !isOpen);
      mobileMenu.classList.toggle('opacity-0', !isOpen);

      mobileMenu.classList.toggle('visible', isOpen);
      mobileMenu.classList.toggle('opacity-100', isOpen);

      mobileMenu.inert = !isOpen;

      menuIcon?.classList.toggle('hidden', isOpen);
      closeIcon?.classList.toggle('hidden', !isOpen);

      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

      setMenuOpen(!isOpen);
    });

    mobileMenu.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });
    // Close menu when clicking outside
    document.addEventListener('pointerdown', (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      const isClickInsideMenu = mobileMenu.contains(target);
      const isClickOnToggle = menuToggle.contains(target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        setMenuOpen(false);
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    // Close menu when switching to desktop
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    desktopMediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    });
  }
}
