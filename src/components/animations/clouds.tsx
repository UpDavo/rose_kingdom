"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface CloudProps {
  xpos: [number, number];
  ypos: [number, number];
  time: number;
  src: string;
}

function Cloud({ xpos, ypos, time, src }: CloudProps) {
  // No es necesario usar useMemo aquí ya que ypos ya es una tupla de dos números
  // Generamos el delay una sola vez
  const delay = useMemo(() => Math.floor(Math.random() * 3), []);

  return (
    <motion.div
      className="absolute md:w-clouds-md sm:w-clouds-md w-clouds-lg aspect-2"
      initial={{ x: xpos[0], y: ypos[0], opacity: 0 }}
      animate={{
        x: xpos[1],
        y: ypos[1],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        delay: delay,
        duration: time,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.4, 0.7, 1],
      }}
    >
      <Image src={src} fill alt="Cloud" className="object-cover" />
    </motion.div>
  );
}

interface CloudData {
  key: number;
  xpos: [number, number];
  ypos: [number, number];
  time: number;
  src: string;
}

export function CloudsAnimation({ amount }: { amount: number }) {
  // Generamos los datos de las nubes una sola vez
  const clouds = useMemo(() => {
    return Array.from(
      { length: amount },
      (_, i): CloudData => ({
        key: i,
        xpos: [
          -Math.floor(Math.random() * 300 + 100),
          Math.floor(Math.random() * 300 + 2048),
        ] as [number, number],
        ypos: [
          Math.floor(Math.random() * 400),
          Math.floor(Math.random() * 400),
        ] as [number, number],
        time: Math.floor(Math.random() * 10 + 15),
        src: `/Pictures/rose_env/nube 1.png`,
      })
    );
  }, [amount]);

  return (
    <motion.div
      id="cloud_animation"
      className="flex absolute w-[2048px] h-3/5 top-[0px] lg:top-[100px] xl:top-[100px]"
    >
      {clouds.map((cloudData) => (
        <Cloud
          key={cloudData.key}
          xpos={cloudData.xpos}
          ypos={cloudData.ypos}
          time={cloudData.time}
          src={cloudData.src}
        />
      ))}
    </motion.div>
  );
}
