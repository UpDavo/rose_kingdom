"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloudsAnimation, HeartsAnimation } from "components/animations";

export default function Landscape() {
  const [factors, setFactors] = useState({
    f1_width: 0,
    f2_width: 2048,
    viewHeight: 1024,
  });
  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    let resizeTimer: any;

    function handleResize() {
      clearTimeout(resizeTimer);
      setUpdate(false);
      resizeTimer = setTimeout(() => {
        setFactors({
          f1_width: (2048 - window.innerWidth) / 2,
          f2_width: (2048 + window.innerWidth) / 2,
          viewHeight: window.innerHeight,
        });
        setUpdate(true);
      }, 200); // Aquí, 100ms es el tiempo de espera. Ajusta según tus necesidades.
    }

    window.addEventListener("resize", handleResize);

    // Ejecuta la función una vez al inicio para obtener las dimensiones iniciales
    handleResize();

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="landscape"
      className="flex relative  h-screen w-screen  items-center justify-center
    dark:bg-primary bg-primary overflow-hidden"
    >
      <div id="background" className="absolute h-full w-full">
        <Image
          src={"/Pictures/rose_env/Cielo.png"}
          fill
          alt="Cielo"
          className="object-cover h-[1080px] w-[2048px]"
        />

        <Image
          src={"/Pictures/rose_env/build.png"}
          fill
          alt="mountains"
          className="object-cover h-[1080px] w-[2048px]"
        />
      </div>
        <div
          id="Animations"
          className="flex relative items-center justify-center h-full w-[1200px] "
          >
          {update && <CloudsAnimation amount={10} />}
          {update && <HeartsAnimation amount={5} />}
        </div>
    </div>
  );
}
