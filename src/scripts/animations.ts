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
  // Tuned snappy (client feedback: default felt laggy): a high lerp
  // keeps the page tracking the wheel closely, with just a short
  // smoothing tail instead of a long floaty glide.
  const lenis = new Lenis({
    autoRaf: false,
    lerp: 0.22,
    wheelMultiplier: 1.2,
  });
  if (import.meta.env.DEV) (window as unknown as { lenis: Lenis }).lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Route anchor navigation through Lenis. Lenis already honors the
  // sections' CSS scroll-margin-top (sized to the sticky navbar per
  // breakpoint in global.css), so no extra offset here — adding one
  // would double it. "#top" returns to the absolute top of the page.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      event.preventDefault();
      if (href === '#top') {
        lenis.scrollTo(0, { duration: 1 });
      } else {
        lenis.scrollTo(target, { duration: 1 });
      }
      history.pushState(null, '', href);
    });
  });

  // Land correctly when the page is opened with a #hash in the URL
  window.addEventListener('load', () => {
    if (!location.hash) return;
    const target = document.querySelector<HTMLElement>(location.hash);
    if (target) lenis.scrollTo(target, { immediate: true });
  });

  // --- Fade-ins ---
  gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
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
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      },
    );
  });
}
