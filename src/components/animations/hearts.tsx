import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Heart({
  diffx,
  diffy,
  delay,
}: {
  diffx: number;
  diffy: number;
  delay: number;
}) {
  const [dx, setDX] = useState<number>(diffx);
  const [dy, setDY] = useState<number>(diffy);
  const [delayed, setDelayed] = useState<number>(delay);

  

  useEffect(() => {
    diffx != dx && setDX(diffx);
    diffy != dy && setDY(diffy);
    delay != delayed && setDelayed(delay);
  }, [diffx, diffy, dx, dy, delay]);

  return (
    <motion.div 
      className="absolute  md:w-heart-md sm:w-heart-md w-heart-lg  aspect-1"
      //initial={{ x: dx, y: dy, opacity: 0, scale: 0.5 }}
      initial={{ x: dx , y: dy+100, opacity: 0, scale: 0.5 }}
      animate={{
        //x:  dx + 50,
        //y:  dy - 100,
        x:  dx+100,
        y:  dy-50,
        opacity: [0, 1, 1, 0],
        scale: [0.5, 0.5, 0.3, 0.3],
      }}
      transition={{
        delay: delayed,
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.2, 0.8, 1],
      }}
    >
      <Image
        src="/Pictures/rose_env/heart.svg"
        fill
        alt="Heart"
        className="object-cover"
      />
    </motion.div>
  );
}

export function HeartsAnimation({
  amount,
}: //update,
{
  amount: number;
  //update: boolean;
}) {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: amount }, (_, i) => i));
  }, [amount]);

  return (
    <motion.div id="heart_animation" 
    className="flex absolute  w-[200px] aspect-1  bottom-[100px] left-[870px] transform translate-x-1/2 -translate-y-1/2">
      {hearts.map((_, i) => (
        <Heart
          key={i}
          diffx={Math.floor((2 * Math.random() - 1) * 40)}
          diffy={Math.floor((2 * Math.random() - 1) * 20 )}
          delay={Math.floor(Math.random() * 2)}
        />
      ))}
    </motion.div>
  );
}
