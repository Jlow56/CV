"use client";

import { useEffect } from "react";

export default function AnimateOnLoad() {
  useEffect(() => {
    const elements = document.querySelectorAll('.experience-item, .project-card, .skill-category');
    elements.forEach((element, index) => {
      (element as HTMLElement).style.opacity = "0";
      (element as HTMLElement).style.transform = "translateY(20px)";
      setTimeout(() => {
        (element as HTMLElement).style.transition = "all 0.6s ease";
        (element as HTMLElement).style.opacity = "1";
        (element as HTMLElement).style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  return null;
}