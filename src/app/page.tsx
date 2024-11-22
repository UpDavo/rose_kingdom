import { useEffect, useState } from "react";
import { PortraitAnimation } from "components/sections";
import Sound from "components/sound/sound";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
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
      style={{
        height: `${viewportHeight}px`,
        width: "100vw",
        backgroundColor: "var(--color-secundary, #f0f0f0)",
        overflow: "hidden",
      }}
    >
      <Sound />
      <PortraitAnimation />
    </main>
  );
}
