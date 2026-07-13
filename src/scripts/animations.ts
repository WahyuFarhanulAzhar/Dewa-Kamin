/**
 * Lenis smooth scrolling + scroll-driven fade-ins (GSAP ScrollTrigger).
 * Fade elements opt in with data-fade (single) or data-fade-group
 * (staggered children). Everything is disabled for
 * prefers-reduced-motion users, who get native scrolling instead.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  // --- Lenis smooth scroll, driven by GSAP's ticker ---
  const lenis = new Lenis({ autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Route anchor navigation through Lenis (sticky navbar offset)
  const NAV_OFFSET = -96;
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: href === '#top' ? 0 : NAV_OFFSET });
      history.pushState(null, '', href);
    });
  });

  // --- Fade-ins ---
  gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-fade-group]').forEach((group) => {
    gsap.fromTo(
      group.children,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      },
    );
  });
}
