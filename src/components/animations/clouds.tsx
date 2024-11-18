"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";

interface CloudProps {
  xpos: [number, number];
  ypos: [number] | [number, number];
  time: number;
  src: string;
}

type Alpha = {
  initial_width: number;
  final_width: number;
  height: number;
};

function Cloud({ xpos, ypos , time, src}: CloudProps) {
  
  const [xPos, setXPos] = useState<[number,number]>(xpos);
  const [yPos, setYPos] = useState<[number,number]>(ypos.length === 1 ? [ypos[0], ypos[0]] : ypos);
  const [duration, setDuration] = useState<number>(time);
  const  [SRC, setSRC] = useState<string>(src);
  
  useEffect(() => {
    xpos != xPos && setXPos(xpos);
    ypos != yPos && setYPos(ypos.length === 1 ? [ypos[0], ypos[0]] : ypos);
    time != duration && setDuration(time);
    src != SRC && setSRC(src);
  }, [xpos, ypos, xPos, yPos, time, duration, src, SRC]);

  return (
    <motion.div
      className="absolute  md:w-clouds-md sm:w-clouds-md w-clouds-lg  aspect-2"
      initial={{ x: xPos[0], y: yPos[0], opacity: 0 }}
      animate={{
        x: xPos[1],
        y: yPos[1],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        delay: Math.floor(Math.random() * 3),
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.4, 0.7, 1],
      }}
    >
      <Image src={SRC} fill alt="Cloud" className="object-cover" />
    </motion.div>
  );
}

export function CloudsAnimation({
  amount,
}: 
{
  amount: number;
}) {
  const [clouds, setClouds] = useState<number[]>([]);
  
  useEffect(() => {
    setClouds(Array.from({ length: amount }, (_, i) => i));
  }, [amount]);

  return (
    <motion.div
      id="cloud_animation"
      className="flex absolute  w-[2048px] h-3/5 top-[0px] lg:top-[100px] xl:top-[100px] "
    >
      {clouds.map((_, i) => (
        <Cloud
          key={i}
          xpos={[- Math.floor(Math.random() * 300 + 100), Math.floor(Math.random() * 300 + 2048) ]}
          ypos={[Math.floor(Math.random()*400)]}
          time={Math.floor(Math.random() * 10 + 15)}
          src={`/Pictures/rose_env/nube 1.png`}
        />
      ))}
    </motion.div>
  );
}
