"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./fourth.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Fourth() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", 
          toggleActions: "play none none none",
        },
      });
  
      const header = containerRef.current.querySelector("h1");
      const steps = containerRef.current.querySelectorAll(`.${style.step}`);
  
      if (header) {
        tl.from(header, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        });
      }
  
      if (steps.length > 0) {
        tl.from(
          steps,
          {
            opacity: 0,
            x: (index, target) =>
              target.classList.contains(style.left) ? -50 : 50,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.3,
          },
          "-=0.5"
        );
      }
  
      ScrollTrigger.refresh();
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div className={style.container} ref={containerRef}>
      <h1>Кому подойдёт система?</h1>
      <div className={style.timeline}>
        <div className={`${style.step} ${style.left}`}>
          <div className={style.content}>
            <h3>Фермерские хозяйства</h3>
          </div>
        </div>

        <div className={`${style.step} ${style.right}`}>
          <div className={style.content}>
            <h3>Ветеринарные клиники</h3>
          </div>
        </div>

        <div className={`${style.step} ${style.left}`}>
          <div className={style.content}>
            <h3>Сельскохозяйственные компании</h3>
          </div>
        </div>

        <div className={`${style.step} ${style.right}`}>
          <div className={style.content}>
            <h3>Владельцы КРС (Крупного Рогатого Скота)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
