import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_SELECTOR = "section, [data-gsap='reveal'], [data-gsap='section']";
const CARD_SELECTOR = [
  "article",
  "[data-gsap='card']",
  "form[class*='shadow']",
  "div[class*='shadow-md']",
  "div[class*='shadow-lg']",
  "div[class*='shadow-xl']",
  "div[class*='shadow-2xl']",
].join(", ");
const MEDIA_SELECTOR = "img, video, iframe, [data-gsap='media']";
const HOVER_SELECTOR = [
  "article",
  "[data-gsap='card']",
  "form[class*='shadow']",
  "div[class*='shadow-md']",
  "div[class*='shadow-lg']",
  "div[class*='shadow-xl']",
  "div[class*='shadow-2xl']",
  "a[class]",
  "button",
  "img",
  "video",
  "iframe",
  "[data-gsap='hover']",
].join(", ");

const hasRenderableSize = (element) => {
  const { width, height } = element.getBoundingClientRect();
  return width > 0 && height > 0;
};

const isCardCandidate = (element) => {
  const { width, height } = element.getBoundingClientRect();
  return width >= 180 && height >= 100;
};

const isLargeMedia = (element) => {
  if (element.matches("[data-gsap='media']")) {
    return hasRenderableSize(element);
  }

  const { width, height } = element.getBoundingClientRect();
  return width >= 120 && height >= 80;
};

const usePageGsap = (containerRef, routeKey) => {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container || typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animatedElements = new WeakSet();
    const hoverBoundElements = new WeakSet();
    const animations = [];
    const hoverCleanups = [];

    const registerAnimation = (element, fromVars, toVars) => {
      if (!element || animatedElements.has(element) || !hasRenderableSize(element)) {
        return;
      }

      animatedElements.add(element);

      if (prefersReducedMotion) {
        gsap.set(element, { autoAlpha: 1, clearProps: "all" });
        return;
      }

      const tween = gsap.fromTo(element, fromVars, {
        ...toVars,
        overwrite: "auto",
        clearProps: "opacity,transform,visibility,filter",
      });

      animations.push(tween);
    };

    const bindSectionAnimations = () => {
      const sections = Array.from(container.querySelectorAll(SECTION_SELECTOR));

      if (sections.length === 0) {
        Array.from(container.children).forEach((child, index) => {
          registerAnimation(
            child,
            { autoAlpha: 0, y: index === 0 ? 20 : 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: child,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
        return;
      }

      sections.forEach((section, index) => {
        registerAnimation(
          section,
          { autoAlpha: 0, y: index === 0 ? 20 : 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    };

    const bindCardAnimations = () => {
      Array.from(container.querySelectorAll(CARD_SELECTOR))
        .filter(isCardCandidate)
        .forEach((card) => {
          registerAnimation(
            card,
            { autoAlpha: 0, y: 42, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                once: true,
              },
            },
          );
        });
    };

    const bindMediaAnimations = () => {
      Array.from(container.querySelectorAll(MEDIA_SELECTOR))
        .filter(isLargeMedia)
        .forEach((media) => {
          registerAnimation(
            media,
            { autoAlpha: 0, y: 24, scale: 0.94, filter: "blur(10px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.82,
              ease: "power3.out",
              scrollTrigger: {
                trigger: media,
                start: "top 94%",
                once: true,
              },
            },
          );
        });
    };

    const bindHoverAnimations = () => {
      Array.from(container.querySelectorAll(HOVER_SELECTOR)).forEach((target) => {
        if (hoverBoundElements.has(target)) {
          return;
        }

        if (target.matches("img, video, iframe")) {
          if (!isLargeMedia(target)) {
            return;
          }
        } else if (!hasRenderableSize(target)) {
          return;
        }

        hoverBoundElements.add(target);

        const media =
          target.matches("img, video, iframe") ||
          target.matches("[data-gsap='media']")
            ? target
            : target.querySelector(MEDIA_SELECTOR);

        const isCardLike =
          target.matches("article, [data-gsap='card'], form[class*='shadow']") ||
          (typeof target.className === "string" && target.className.includes("shadow"));

        const handleEnter = () => {
          if (prefersReducedMotion) {
            return;
          }

          if (isCardLike) {
            gsap.to(target, {
              boxShadow: "0 26px 56px rgba(15, 23, 42, 0.16)",
              duration: 0.35,
              ease: "power2.out",
            });
          } else if (target.matches("a[class], button, [data-gsap='hover']")) {
            gsap.to(target, {
              filter: "brightness(1.04)",
              duration: 0.28,
              ease: "power2.out",
            });
          }

          if (media) {
            gsap.to(media, {
              filter: "saturate(1.08) brightness(1.03)",
              duration: 0.4,
              ease: "power2.out",
            });
          }
        };

        const handleLeave = () => {
          if (isCardLike) {
            gsap.to(target, {
              boxShadow: "",
              duration: 0.35,
              ease: "power2.out",
              clearProps: "boxShadow",
            });
          } else if (target.matches("a[class], button, [data-gsap='hover']")) {
            gsap.to(target, {
              filter: "",
              duration: 0.28,
              ease: "power2.out",
              clearProps: "filter",
            });
          }

          if (media) {
            gsap.to(media, {
              filter: "",
              duration: 0.4,
              ease: "power2.out",
              clearProps: "filter",
            });
          }
        };

        target.addEventListener("pointerenter", handleEnter);
        target.addEventListener("pointerleave", handleLeave);

        hoverCleanups.push(() => {
          target.removeEventListener("pointerenter", handleEnter);
          target.removeEventListener("pointerleave", handleLeave);
          gsap.killTweensOf(target);
          if (media) {
            gsap.killTweensOf(media);
          }
        });
      });
    };

    if (!prefersReducedMotion) {
      animations.push(
        gsap.fromTo(
          container,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,transform,visibility",
          },
        ),
      );
    }

    bindSectionAnimations();
    bindCardAnimations();
    bindMediaAnimations();
    bindHoverAnimations();
    ScrollTrigger.refresh();

    const observer = new MutationObserver((mutations) => {
      const hasChildChange = mutations.some(
        (mutation) =>
          mutation.type === "childList" &&
          (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0),
      );

      if (!hasChildChange) {
        return;
      }

      bindSectionAnimations();
      bindCardAnimations();
      bindMediaAnimations();
      bindHoverAnimations();
      ScrollTrigger.refresh();
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      hoverCleanups.forEach((cleanup) => cleanup());
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, [containerRef, routeKey]);
};

export default usePageGsap;
