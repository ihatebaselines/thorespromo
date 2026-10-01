"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import StaticContent from "./_static-content";

export default function Home() {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let lenis: Lenis | undefined;
    let raf: ((time: number) => void) | undefined;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.fromTo(
          ".hero-copy > *",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12, delay: 0.2, ease: "power3.out" },
        );
        gsap.fromTo(
          ".phone-image",
          { autoAlpha: 0, y: 30, rotate: 2 },
          { autoAlpha: 1, y: 0, rotate: 0, duration: 1.2, delay: 0.45, ease: "power3.out" },
        );
        gsap.to(".moon", { rotate: 360, duration: 90, repeat: -1, ease: "none" });

        gsap.utils.toArray<HTMLElement>(".story, .project, .steps, .team, .journey").forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 88%", once: true },
            },
          );
        });
        gsap.utils.toArray<HTMLElement>(".feature-card, .step-grid li, .member-card").forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 94%", once: true },
            },
          );
        });
      });

      return () => context.revert();
    });

    const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".main-nav");
    const toggleMenu = () => {
      if (!menuButton || !nav) return;
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("open", open);
    };
    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open navigation");
      nav?.classList.remove("open");
    };
    menuButton?.addEventListener("click", toggleMenu);
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
      media.revert();
      lenis?.destroy();
      if (raf) gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <motion.div
      className="site-experience"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <StaticContent />
    </motion.div>
  );
}
