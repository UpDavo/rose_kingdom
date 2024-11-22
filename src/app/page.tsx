
"use client" 

import { useEffect } from "react";
import { PortraitAnimation } from "components/sections";
import Sound from "components/sound/sound";

export default function Home() {
  useEffect(() => {
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    // Actualiza la altura al cargar la página y al redimensionar
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <main
      className="h-[calc(var(--vh)_*100)] w-full
      dark:bg-secundary bg-secundary overflow-hidden"
    >
      <Sound />
      <PortraitAnimation />
    </main>
  );
}
