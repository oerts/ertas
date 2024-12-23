"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type TiltCardProps = {
  title: string;
  description: string;
  link: string;
  metadata?: React.ReactNode;
};

export function TiltCard({
  title,
  description,
  link,
  metadata,
}: TiltCardProps) {
  const tiltRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    VanillaTilt.init(element, {
      max: 5,
      speed: 750,
      glare: true,
      "max-glare": 0.25,
      scale: 1.02,
    });

    return () => {
      if (element) {
        // @ts-ignore - vanilla-tilt adds this method to the element
        element.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <a
      ref={tiltRef}
      href={link}
      target="_blank"
      className="group block p-4 border-l border-stone-400 hover:border-brand-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <div>
          <h3 className="font-semibold text-lg transition-all duration-200">
            {title}
          </h3>
          {metadata && metadata}
        </div>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </a>
  );
}
