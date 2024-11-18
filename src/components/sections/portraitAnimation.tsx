"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landscape from "./landscape";
import Form from "./form";
import { ReelNFT } from "components/animations";
import CenterButtons from "./centerButtons";

export const PortraitAnimation = () => {
  const [scene, setscene] = useState<number>(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const dialogs = [
    "¡Bienvenido a Rose Kingdom! Esto no es solo un proyecto más, es un experimento social en la Web 3.0, nacido de la idea de que blockchain puede hacer del mundo un lugar mejor.",
    "Nuestro objetivo principal es construir, conjuntamente, las bases para el desarrollo de una meta comunidad descentralizada y de código abierto con un solo propósito: unir esfuerzos para impactar positivamente el futuro de nuestra sociedad mediante la colaboración e intercambio de conocimientos y recursos. ¡Tu creatividad será nuestra guía!",
    "Al rededor de mundo existen más de 1000 millones de voluntarios en diferentes organizaciones, que aportan millones de horas de tiempo para crear un mundo mejor.",
    "El mundo no carece de recursos ni de voluntad para cambiar, pero las fuerzas estan dispersas. Rose Kingdom busca resolver este problema, conectando a voluntarios y organizaciones alinean sus fuerzas para lograr lo imposible.",
    "Rose Petal es el token de nuestra comunidad, con ellos, puedras participar en toma de decisiones, colaborar en proyectos y aportar ideas que generen valor para todos. Este es solo el comienzo de una gran aventura. ¡Juntos, moveremos montañas!",
    "¿Listo para comenzar tu aventura? Reclama 100,000 tokens GRATIS como símbolo de bienvenida, y, si te unes como voluntario, ¡ganarás 1 millón adicional! Ayuda a construir este mundo donde la colaboración transforma sueños en realidad.",
  ];

  const handleScene = () => {
    scene < 3 && setscene(scene + 1);
  };

  const textAnimation = () => {
    if (dialogIndex < dialogs.length - 1) {
      setOpacity(0);
      setDialogIndex(dialogIndex + 1);
      setCharacterIndex(0);
    } else {
      handleScene();
    }
  };

  useEffect(() => {
    if (scene !== 1) return;
  
    const intervalId = setInterval(() => {
      const currentDialog = dialogs[dialogIndex];
  
      if (characterIndex >= currentDialog.length) {
        clearInterval(intervalId);
      } else {
        setCharacterIndex((prev) => prev + 1);
      }
    }, 100); // Intervalo de 100ms
  
    return () => {
      clearInterval(intervalId);
    };
  }, [characterIndex, scene, dialogIndex, dialogs]);
  


  return (
    <>
      {scene === 1 && (
        <div
          id="scene2"
          className="flex absolute h-full w-full overflow-hidden items-center z-10"
        >
          <div
            className="dialog flex w-full h-screen 
              justify-center items-center"
          >
            {/*  verifivar el wfull y hfull, esta generando problema */}
            <div
              id="globeTxt"
              className="w-10/12 h-1/5 
              xl:h-1/3 xl:w-9/12 
              md:h-1/2 md:w-9/12 
              lg:h-1/2 lg:w-9/12 
              sm:h-1/3
              p-xl sm:text-globe-sm md:text-globe-lg text-globe-lg 
              text-left tracking-wider leading-loose
              
              "
              style={{ marginBottom: "17rem" }}
            >
              <div
                className="shadow-[-20px_0_0_0_#005756,20px_0_0_0_#005756,0_-20px_0_0_#005756,0_20px_0_0_#005756]
              sm:shadow-[-10px_0_0_0_#005756,10px_0_0_0_#005756,0_-10px_0_0_#005756,0_10px_0_0_#005756]"
              >
                <div
                  className="shadow-[-18px_0_0_0_#FFD1FF,18px_0_0_0_#FFD1FF,0_-18px_0_0_#FFD1FF,0_18px_0_0_#FFD1FF]
                sm:shadow-[-9px_0_0_0_#FFD1FF,9px_0_0_0_#FFD1FF,0_-9px_0_0_#FFD1FF,0_9px_0_0_#FFD1FF]"
                >
                  <motion.p
                    className="relative p-xl bg-[#00232E] text-white sm:border-[7px] border-[14px] border-[#005756] 
                              shadow-[-12px_5px_0_0_#929AFF,12px_5px_0_0_#929AFF,5px_-12px_0_0_#929AFF,5px_12px_0_0_#929AFF]
                              sm:shadow-[-6px_5px_0_0_#929AFF,6px_5px_0_0_#929AFF,5px_-6px_0_0_#929AFF,5px_6px_0_0_#929AFF] text-sm"
                    style={{
                      opacity: opacity,
                      transition:
                        "opacity 0.10s ease-in-out justify-start text-left",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span
                      className="block mb-sm xl:mb-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Mirai Enshi:
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {dialogs[dialogIndex]
                        .split("")
                        .slice(0, characterIndex)
                        .map((word, index) => word)}
                    </motion.span>
                  </motion.p>
                  <button
                    className="flex absolute sm:right-[0px] 
                    right-1/2                                      
                    transform sm:-translate-x-1/2 translate-x-1/2 sm:-translate-y-1/2
                    bg-white text-black 
                    border-4 border-secondary box-border shadow-lg p-lg sm:p-sm md:p-md 
                    hover:shadow-black hover:bg-stone-300 hover:font-bold text-sm"
                    onClick={textAnimation}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="MiraiEnshi"
            className="flex absolute bottom-[0px] -left-[20px] sm:w-1/2  w-1/4 aspect-1"
          >
            <Image
              fill
              src="/Pictures/content_env/miraiEnshi.png"
              alt="Mirai Enshi"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 450px) 10vw, (max-width: 768px) 20vw, (max-width: 1000px) 30vw, 33vw"
            />
          </div>
        </div>
      )}

      {scene <= 1 && (
        <div
          id="CanvasBG"
          className={`flex top-0 h-screen w-full ${
            scene === 1 ? "blur-sm brightness-50" : "blur-none"
          }`}
        >
          <Landscape />

          <div
            className="z-10 fixed w-full h-full flex 
          lg:flex-row xl:flex-row flex-col"
          >
            <div className="absolute z-10 grid grid-cols-3 gap-1 w-full h-screen">
              <div className="order-1 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 2xl:col-span-1 flex">
                <Image
                  className="relative top-1/3 sm:top-1/4 xl:top-[10%] lg:top-[10%] h-min mx-auto sm:max-w-xs"
                  width={230}
                  height={230}
                  src="/Pictures/logo/LogoRK.png"
                  alt="rose title"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div
                className="order-3 
              col-span-3 md:col-span-3 lg:col-span-1
              flex w-full h-full
              items-center
              justify-center 
              text-center
              "
                style={{ paddingBottom: 40 }}
              >
                <button
                  onClick={handleScene}
                  className="text-tertiary
                      sm:mb-md
                      text-md
                      font-gaming border-4
                      border-tertiary
                      p-xl sm:p-lg md:p-lg
                      animate-push ease-out duration-500 hover:animate-none
                      box-border shadow-lg shadow-tertiary hover:bg-red-200 hover:font-bold"
                >
                  INICIAR
                </button>
              </div>

              <div className="order-2 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
                <div className="relative top-1/2 xl:top-1/4 lg:top-1/4 md:top-[10%] sm:top-[10%] text-center">
                  <button
                    className=" relative w-[150px] h-[150px]
            hover:animate-jump hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-delay-100"
                  >
                    <Image
                      fill
                      src="/Pictures/content_env/map.png"
                      alt="rose title"
                      style={{ objectFit: "contain" }}
                    />
                    <div className="absolute w-full mx-auto my-[-10px] px-lg text-center">
                      Roadmap
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {scene === 2 && (
        <div className="flex flex-col space-y-4 w-screen h-screen bg-black overflow-hidden">
          <h2 className="text-white text-center text-sm mt-[38px]">
            Sé parte del cambio
          </h2>
          <ReelNFT />
          <CenterButtons />
        </div>
      )}
    </>
  );
};
