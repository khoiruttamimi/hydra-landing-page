export function initActiveNavigation(): void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('a[data-nav-link][href^="#"]');

  const sections = Array.from(
    new Set(
      Array.from(navLinks)
        .map(link => link.getAttribute('href')?.slice(1))
        .filter((id): id is string => Boolean(id)),
    ),
  )
    .map(id => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null)
    .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

  if (!sections.length) return;

  const header = document.querySelector<HTMLElement>('#site-header');

  let isNavigating = false;
  let ticking = false;

  const setActiveSection = (activeId: string): void => {
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${activeId}`;

      link.classList.toggle('nav-active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const updateActiveNavigation = (): void => {
    if (isNavigating) return;

    const headerHeight = header?.offsetHeight ?? 0;
    const scrollPosition = headerHeight + 20;

    let activeId = sections[0].id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= scrollPosition) {
        activeId = section.id;
      }
    }

    // Handle bottom of page
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (isAtBottom) {
      activeId = sections[sections.length - 1].id;
    }

    setActiveSection(activeId);
  };

  const onScroll = (): void => {
    if (ticking || isNavigating) return;

    ticking = true;

    requestAnimationFrame(() => {
      ticking = false;
      updateActiveNavigation();
    });
  };

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href')?.slice(1);

      if (!targetId) return;

      isNavigating = true;
      setActiveSection(targetId);

      // If already at target, no scrollend may occur
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (!target) {
          isNavigating = false;
          return;
        }

        const headerHeight = header?.offsetHeight ?? 0;
        const targetTop = target.getBoundingClientRect().top;

        if (Math.abs(targetTop - headerHeight) < 5) {
          isNavigating = false;
        }
      });
    });
  });

  window.addEventListener('scrollend', () => {
    if (!isNavigating) return;

    isNavigating = false;
    updateActiveNavigation();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  updateActiveNavigation();
}
