"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';


export const GameGlobe = () => {
  const [characterIndex, setCharacterIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  const dialogs = [
    'Rose Kingdom no es solo un proyecto más. Es un experimento social en la Web 3.0, nacido de la idea de que blockchain puede hacer el mundo mejor.',
    'Su esencia se basaen la construcción de una comunidad descentralizada y opensource con el objetivo de impactar el futuro de la sociedad.',
    'Este experimento social es fruto de la colaboración entreNFTs LATAM Art y diversas organizaciones y comunidadescon ideales compartidos.',
    'En Rose Kingdom, cada portador deun NFT es un miembro fundador y pionero, sin líderes.',
    'Todos tienen voz y voto, pueden proponer ideas y proyectos, yorganizarse para desarrollar iniciativas dentro del ecosistema.',
    'Ustedes son los verdaderos artífices de Rose Kingdom.'
  ]

  useEffect(() => {
    const checkScroll = () => {
      if (!isScrolled && window.scrollY >= window.innerHeight) {
        setIsScrolled(true);
      }
    }

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, [isScrolled]);


  useEffect(() => {
    if (!isScrolled) return;
    const intervalId = setInterval(() => {
      const currentDialog = dialogs[dialogIndex];

      if (characterIndex === currentDialog.length) {
        if (dialogIndex === dialogs.length - 1) {
          clearInterval(intervalId);
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setOpacity(0);
            setDialogIndex(dialogIndex + 1);
            setCharacterIndex(0);
          }, 5000);
        }
      } else {
        setCharacterIndex(characterIndex + 1);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [characterIndex, isScrolled]);


  return (
    <div id='scene2' className='flex relative h-screen w-screen 
    justify-center items-center overflow-hidden'>

      <Image
        fill
        src='/Pictures/content_env/Background2.png'
        alt='background'
        style={{ objectFit: 'cover' }}
      />

      <div className='flex absolute w-2/3 h-1/2 
        justify-center items-center z-0'>
        <Image
          fill
          src='/Pictures/content_env/dialogGlobe.png'
          alt='dialog globe'
          style={{ objectFit: 'contain' }}

        />

        <div id="globeTxt" className='flex z-10 
            w-10/12 h-1/5 xl:h-1/2 xl:w-9/12 md:h-1/2 md:w-9/12 lg:h-1/2 lg:w-9/12
            font-gaming text-white py-md md:py-sm xl:py-sm
            sm:text-globe-sm md:text-globe-md text-globe-lg 
            text-left tracking-wider leading-loose
            justify-center flex-wrap content-center '>


          <motion.p
            className='w-full h-full'
            style={{
              opacity: opacity,
              transition: "opacity 0.10s ease-in-out justify-start text-left",

            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className='block  mb-sm xl:mb-lg'
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
                .map((word, index) => (
                  word
                ))}
            </motion.span>

          </motion.p>
        </div>


      </div>
    </div>
  )
}


