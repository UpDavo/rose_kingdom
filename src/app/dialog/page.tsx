"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import React from 'react'

type Props = {}

const Dialog = (props: Props) => {

  const [characterIndex, setCharacterIndex] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [finished, setFinished] = useState(false);

  const dialogs = [
    'Rose Kingdom no es solo un proyecto más. Es un experimento social en la Web 3.0, nacido de la idea de que blockchain puede hacer el mundo mejor.',
    'Su esencia se basa en la construcción de una comunidad descentralizada y opensource con el objetivo de impactar el futuro de la sociedad.',
    //'Este experimento social es fruto de la colaboración entre NFTs LATAM Art y diversas organizaciones y comunidadescon ideales compartidos.',
    //'En Rose Kingdom, cada portador deun NFT es un miembro fundador y pionero, sin líderes.',
    //'Todos tienen voz y voto, pueden proponer ideas y proyectos, yorganizarse para desarrollar iniciativas dentro del ecosistema.',
    'Ustedes son los verdaderos artífices de Rose Kingdom.'
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDialog = dialogs[dialogIndex];

      if (characterIndex === currentDialog.length) {
        if (dialogIndex === dialogs.length - 1) {
          clearInterval(intervalId);
          setFinished(true);  
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setOpacity(0);
            setDialogIndex(dialogIndex + 1);
            setCharacterIndex(0);
          }, 3000);
        }
      } else {
        setCharacterIndex(characterIndex + 1);
      }
    }, 10);

    return () => {
      clearInterval(intervalId); 
    };
  
  }, [characterIndex]);


  return (
    <div className='relative w-screen h-screen bg-[url("/Pictures/content_env/background1.png")]'>
      <div className="dialog flex w-full h-screen 
            justify-center items-center">
        <div id="globeTxt" className='w-full h-full w-10/12 h-1/5 
            xl:h-1/3 xl:w-9/12 md:h-1/2 md:w-9/12 lg:h-1/2 lg:w-9/12 sm:h-1/3 sm:-mt-[240px]
            p-xl sm:text-globe-md md:text-globe-lg text-globe-lg 
            text-left tracking-wider leading-loose
            '>

          <motion.p
            className='relative p-xl bg-black text-white border-double border-[20px] border-stone-500 rounded-xl'
            style={{
              opacity: opacity,
              transition: "opacity 0.10s ease-in-out justify-start text-left",

            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className='block mb-sm xl:mb-lg'
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
            {finished && <a className="absolute -bottom-[40px] -right-[40px] sm:-bottom-[55px] sm:right-[60px]
              bg-white text-black border-4 border-secondary box-border shadow-lg p-md sm:p-lg md:p-md 
              hover:shadow-black hover:bg-stone-300 hover:font-bold"
              href="nfts">
              Continuar
              </a>
            }
            
          </motion.p>
        </div>
      </div>
      <div className="image">
        <Image
          width={300}
          height={300}
          src='/Pictures/content_env/MiraiEnshi.png'
          alt='dialog globe'
          style={{ objectFit: 'contain', position: 'absolute', bottom: '0', left: '0' }}
          sizes="(max-width: 768px) 20vw, (max-width: 1200px) 30vw, 33vw"
        />
      </div>
    </div>
  )
}

export default Dialog;